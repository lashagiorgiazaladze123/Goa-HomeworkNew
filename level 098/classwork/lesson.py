import tkinter as tk
from tkinter import messagebox

class CounterApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Counter Programs")

        # Create three counter buttons
        self.counter_buttons_frame = tk.Frame(self.root)
        self.counter_buttons_frame.pack(pady=10)

        self.counter1_button = tk.Button(self.counter_buttons_frame, text="Counter 1", command=self.create_counter1)
        self.counter1_button.grid(row=0, column=0, padx=10)

        self.counter2_button = tk.Button(self.counter_buttons_frame, text="Counter 2", command=self.create_counter2)
        self.counter2_button.grid(row=0, column=1, padx=10)

        self.counter3_button = tk.Button(self.counter_buttons_frame, text="Counter 3", command=self.create_counter3)
        self.counter3_button.grid(row=0, column=2, padx=10)

        # Store states for undo and redo
        self.undo_stack = []
        self.redo_stack = []

    def create_counter(self, counter_num):
        counter_window = tk.Toplevel(self.root)
        counter_window.title(f"Counter {counter_num}")

        # Counter variables
        counter_value = tk.IntVar(value=0)
        lock_status = tk.BooleanVar(value=False)

        # Display counter value
        counter_label = tk.Label(counter_window, textvariable=counter_value, font=("Helvetica", 20))
        counter_label.pack(pady=10)

        # Counter buttons
        increment_button = tk.Button(counter_window, text="Increment", command=lambda: self.increment(counter_value, lock_status))
        increment_button.pack(side=tk.LEFT, padx=10)

        decrement_button = tk.Button(counter_window, text="Decrement", command=lambda: self.decrement(counter_value, lock_status))
        decrement_button.pack(side=tk.LEFT, padx=10)

        # Lock checkbox
        lock_checkbox = tk.Checkbutton(counter_window, text="Lock Counter", variable=lock_status)
        lock_checkbox.pack(pady=10)

        # Undo/Redo buttons
        undo_button = tk.Button(counter_window, text="Undo", command=lambda: self.undo(counter_value, lock_status, counter_num))
        undo_button.pack(side=tk.LEFT, padx=10)

        redo_button = tk.Button(counter_window, text="Redo", command=lambda: self.redo(counter_value, lock_status, counter_num))
        redo_button.pack(side=tk.LEFT, padx=10)

        # Save state for undo
        self.save_state(counter_value, lock_status, counter_num)

    def increment(self, counter_value, lock_status):
        if not lock_status.get():
            counter_value.set(counter_value.get() + 1)
            self.save_state(counter_value, lock_status, 1)

    def decrement(self, counter_value, lock_status):
        if not lock_status.get():
            counter_value.set(counter_value.get() - 1)
            self.save_state(counter_value, lock_status, 2)

    def lock_counter(self, lock_status):
        return lock_status.get()

    def save_state(self, counter_value, lock_status, counter_num):
        state = (counter_value.get(), lock_status.get(), counter_num)
        self.undo_stack.append(state)
        self.redo_stack.clear()  # Clear redo stack when new action is performed

    def undo(self, counter_value, lock_status, counter_num):
        if self.undo_stack:
            last_state = self.undo_stack.pop()
            self.redo_stack.append((counter_value.get(), lock_status.get(), counter_num))  # Save current state before undoing
            counter_value.set(last_state[0])
            lock_status.set(last_state[1])

    def redo(self, counter_value, lock_status, counter_num):
        if self.redo_stack:
            redo_state = self.redo_stack.pop()
            self.undo_stack.append((counter_value.get(), lock_status.get(), counter_num))  # Save current state before redoing
            counter_value.set(redo_state[0])
            lock_status.set(redo_state[1])

    def create_counter1(self):
        self.create_counter(1)

    def create_counter2(self):
        self.create_counter(2)

    def create_counter3(self):
        self.create_counter(3)


if __name__ == "__main__":
    root = tk.Tk()
    app = CounterApp(root)
    root.mainloop()
