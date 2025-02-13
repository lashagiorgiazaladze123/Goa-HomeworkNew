// 1) Function to check the winner in a 3x3 grid
function checkWinner(matrix) {
    // Checking rows and columns for a winner
    for (let i = 0; i < 3; i++) {
        // Check if all elements in the row are the same and not empty
        if (matrix[i][0] && matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2]) {
            return matrix[i][0];
        }
        // Check if all elements in the column are the same and not empty
        if (matrix[0][i] && matrix[0][i] === matrix[1][i] && matrix[0][i] === matrix[2][i]) {
            return matrix[0][i];
        }
    }

    // Checking diagonals
    if (matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]) {
        return matrix[0][0];
    }
    if (matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0]) {
        return matrix[0][2];
    }

    // If no winner, return null
    return null;
}

// 2) Function to check the winner in a Connect 4 game (horizontal and vertical only)
function checkConnect4(matrix) {
    // Checking rows for 4 consecutive identical pieces
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length - 3; col++) {
            if (matrix[row][col] && matrix[row][col] === matrix[row][col + 1] && 
                matrix[row][col] === matrix[row][col + 2] && matrix[row][col] === matrix[row][col + 3]) {
                return matrix[row][col];
            }
        }
    }

    // Checking columns for 4 consecutive identical pieces
    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 0; row < matrix.length - 3; row++) {
            if (matrix[row][col] && matrix[row][col] === matrix[row + 1][col] &&
                matrix[row][col] === matrix[row + 2][col] && matrix[row][col] === matrix[row + 3][col]) {
                return matrix[row][col];
            }
        }
    }

    // If no winner, return null
    return null;
}

// 3) Function to check if the product of two numbers has the same digits as the two numbers
function sameDigitsProduct(a, b) {
    const product = a * b;
    const aDigits = a.toString().split('').sort().join('');
    const bDigits = b.toString().split('').sort().join('');
    const productDigits = product.toString().split('').sort().join('');
    
    return aDigits === bDigits && aDigits === productDigits;
}

// 4) Function to check if a string has only unique characters
function hasUniqueChars(str) {
    const charSet = new Set(str);
    return charSet.size === str.length;
}

// 5) Function to return the first non-repeating character in a string
function firstNonRepeatingChar(str) {
    const charCount = {};

    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }

    return null; // If no non-repeating character is found
}


// Test Cases:

// Test case for checkWinner (3x3 grid)
const board3x3 = [['X', 'O', ''], ['X', 'X', 'O'], ['', '', '']];
console.log('Winner (3x3 Grid):', checkWinner(board3x3)); // Output: "X"

// Test case for checkConnect4 (Connect 4 game)
const boardConnect4 = [
    ['X', 'O', 'X', 'X'],
    ['O', 'X', 'O', 'O'],
    ['X', 'O', 'X', 'X'],
    ['O', 'X', 'X', 'O']
];
console.log('Winner (Connect 4):', checkConnect4(boardConnect4)); // Output: "X" or "O" based on the winner

// Test case for sameDigitsProduct
console.log('Same digits in product (6 * 21):', sameDigitsProduct(6, 21)); // Output: true
console.log('Same digits in product (10 * 11):', sameDigitsProduct(10, 11)); // Output: false

// Test case for hasUniqueChars
console.log('Has unique characters ("abcdef"):', hasUniqueChars("abcdef")); // Output: true
console.log('Has unique characters ("aabbcc"):', hasUniqueChars("aabbcc")); // Output: false

// Test case for firstNonRepeatingChar
console.log('First non-repeating character ("swiss"):', firstNonRepeatingChar("swiss")); // Output: "w"
console.log('First non-repeating character ("aabbcc"):', firstNonRepeatingChar("aabbcc")); // Output: null
