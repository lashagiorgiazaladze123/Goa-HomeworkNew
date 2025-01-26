// 1. Basic Constructor with Properties
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    };
}

// 2. Constructor with Default Parameter Value
function Book(title, author = "Unknown") {
    this.title = title;
    this.author = author;
    this.getDetails = function() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    };
}

// 3. Constructor with Arrays
function Classroom(students) {
    this.students = students;
    this.countStudents = function() {
        console.log(`Number of students: ${this.students.length}`);
    };
}

// 4. State Management with Constructor
function Counter() {
    this.value = 0;
    this.increment = function() {
        this.value += 1;
    };
    this.getValue = function() {
        return this.value;
    };
}

// 5. Constructor with Boolean State
function Light() {
    this.state = "off";
    this.toggle = function() {
        this.state = this.state === "off" ? "on" : "off";
    };
}

// 6. Product Constructor with Properties
function Product(name, price) {
    this.name = name;
    this.price = price;
    this.getDetails = function() {
        console.log(`Product: ${this.name}, Price: ${this.price} USD`);
    };
}

// 7. Constructor with Object Properties
function User(username, contact) {
    this.username = username;
    this.contact = contact; // contact should be an object
    this.getContactInfo = function() {
        console.log(`Email: ${this.contact.email}, Phone: ${this.contact.phone}`);
    };
}

// 8. Constructor with Array of Objects
function Library(books) {
    this.books = books; // books should be an array of objects
    this.listBooks = function() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}`);
        });
    };
}

// 9. Cart Constructor with Array Management
function Cart() {
    this.items = [];
    this.addItem = function(item) {
        this.items.push(item);
    };
    this.getItems = function() {
        console.log("Items in cart:", this.items);
    };
}

// 10. Conditional Logic in Constructor
function Student(name, marks) {
    this.name = name;
    this.marks = marks; // marks should be an array of numbers
    this.hasPassed = function() {
        const average = this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
        return average >= 50;
    };
}
