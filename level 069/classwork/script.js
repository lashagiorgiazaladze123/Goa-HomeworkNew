function filter(numberArr) {
    let evenNumbers = []; 
    for (let number of numberArr) { 
        if (number % 2 === 0) { 
            evenNumbers.push(number); 
        }
    }
    return evenNumbers; 
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filter(numbers)); 
