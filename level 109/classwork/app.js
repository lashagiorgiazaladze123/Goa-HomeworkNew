function func(operation, ...numbers) {
    if (operation === "add") {
        return numbers.reduce((acc, num) => acc + num, 0);
    } else if (operation === "minus") {
        return numbers.reduce((acc, num) => acc - num);
    } else if (operation === "multiply") {
        return numbers.reduce((acc, num) => acc * num, 1);
    } else {
        return "Unknown operation";
    }
}

// მაგალითები
console.log(func("add", 1, 7, 2, 1)); // 11
console.log(func("minus", 10, 3, 2)); // 5
console.log(func("multiply", 2, 3, 4)); // 24
console.log(func("divide", 10, 2)); // Unknown operation
