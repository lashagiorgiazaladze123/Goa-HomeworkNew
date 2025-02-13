class BankAccount {
    // პირადი ველი (ინკაფსულაცია)
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // მხოლოდ წაკითხვადი მეთოდი
    getBalance() {
        return this.#balance;
    }

    // Setter-ით კონტროლირებადი მეთოდი
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`თქვენს ანგარიშზე დაემატა ${amount}$. ახალი ბალანსი: ${this.#balance}$`);
        } else {
            console.log("თანხა უნდა იყოს დადებითი!");
        }
    }
}

// ტესტირება
const myAccount = new BankAccount(100);
console.log(myAccount.getBalance()); // 100
myAccount.deposit(50); // ბალანსი ხდება 150
console.log(myAccount.getBalance()); // 150
myAccount.deposit(-20); // შეცდომა: თანხა უნდა იყოს დადებითი!

// პირდაპირი წვდომა არ შეიძლება
console.log(myAccount.#balance); // Error! Private field
