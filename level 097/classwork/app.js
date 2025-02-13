// Creating the object
const obj = {
    name: "John",
    age: 28,
    height: 5.9,
    city: "Tbilisi"
};

// Printing each key-value pair where the value length is less than 5 characters
for (let key in obj) {
    if (typeof obj[key] === 'string' && obj[key].length < 5) {
        console.log(`${key}: ${obj[key]}`);
    }
}
