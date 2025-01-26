// multiply.js

// Function to multiply two numbers
function multiply() {
    const firstNumber = parseFloat(prompt("Enter the first number:"));
    const secondNumber = parseFloat(prompt("Enter the second number:"));
    return firstNumber * secondNumber;
}

// Function to subtract two numbers
function subtract() {
    const firstNumber = parseFloat(prompt("Enter the first number:"));
    const secondNumber = parseFloat(prompt("Enter the second number:"));
    return firstNumber - secondNumber;
}

// Function to divide two numbers
function divide() {
    const firstNumber = parseFloat(prompt("Enter the first number:"));
    const secondNumber = parseFloat(prompt("Enter the second number:"));
    return firstNumber / secondNumber;
}

// Function to return a full name
function fullName() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    return `${firstName} ${lastName}`;
}

// Function to convert minutes to seconds
function minutesToSeconds() {
    const minutes = parseFloat(prompt("Enter the number of minutes:"));
    return minutes * 60;
}

// Function to calculate the area of a rectangle
function rectangleArea() {
    const length = parseFloat(prompt("Enter the length of the rectangle:"));
    const width = parseFloat(prompt("Enter the width of the rectangle:"));
    return length * width;
}

// Function to concatenate two strings
function concatenateStrings() {
    const firstString = prompt("Enter the first string:");
    const secondString = prompt("Enter the second string:");
    return firstString + secondString;
}

// Function for exponentiation
function power() {
    const base = parseFloat(prompt("Enter the base number:"));
    const exponent = parseFloat(prompt("Enter the exponent:"));
    return Math.pow(base, exponent);
}

// Function to calculate circle circumference
function circumference() {
    const radius = parseFloat(prompt("Enter the radius of the circle:"));
    return 2 * Math.PI * radius;
}

// Function to return the next number
function nextNumber() {
    const number = parseInt(prompt("Enter a number:"));
    return number + 1;
}
