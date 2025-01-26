function sumTwoLargestElements(n, arr) {
    if (n < 2) {
        return "მინიმუმ ორი ელემენტი აუცილებელია.";
    }
    let largest = -Infinity, secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest) {
            secondLargest = num;
        }
    }
    return largest + secondLargest;
}

// მაგალითი:
let n = 5;
let arr = [18, 12, 40, 1, 19];
console.log(sumTwoLargestElements(n, arr)); // Output: 59



//2
function lastRepeatedElement(n, arr) {
    let seen = new Set();
    let lastRepeated = null;
    for (let i = n - 1; i >= 0; i--) {
        if (seen.has(arr[i])) {
            lastRepeated = arr[i];
            break;
        }
        seen.add(arr[i]);
    }
    return lastRepeated !== null ? lastRepeated : "არცერთი ელემენტი არ მეორდება";
}


n = 6;
arr = [1, 3, 4, 1, 3, 12];
console.log(lastRepeatedElement(n, arr)); 


//3
function countGreaterThanLeft(n, arr) {
    let result = [];
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}

// მაგალითი:
n = 5;
arr = [3, 2, 6, 5, 1];
console.log(countGreaterThanLeft(n, arr)); 
