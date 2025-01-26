// Create the car object with properties
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
};

// Access object properties
console.log(car.brand); // Output: Toyota
console.log(car.year);  // Output: 2020

// Add a new property
car.color = "Red";
console.log(car.color); // Output: Red

// Change a property value
car.year = 2022;
console.log(car.year);  // Output: 2022

// Delete a property
delete car.model;
console.log(car.model); // Output: undefined

// Create a method
car.startEngine = function() {
    console.log("Engine started");
};

// Call the method
car.startEngine(); // Output: Engine started

// Object inside an object
car.owner = {
    name: "Alice",
    age: 30,
};

// Access owner properties
console.log(car.owner.name); // Output: Alice
console.log(car.owner.age);  // Output: 30
