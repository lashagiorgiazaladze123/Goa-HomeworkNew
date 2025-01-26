function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return 'ლუწი';
    } else {
        return 'კენტი';
    }
}



function sumOfList(numbers) {
    if (numbers.length === 0) {
        return 'სია ცარიელია';
    } else {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
}


function multiplyAndFilter(numbers) {
    return numbers
        .map(num => num * 3)
        .filter(num => num > 20);
}




function findMaxInList(numbers) {
    if (numbers.length === 0) {
        return 'სია ცარიელია';
    }
    return Math.max(...numbers);
}




function checkProductGreaterThan100(num1, num2) {
    if (num1 * num2 > 100) {
        return 'ნამრავლი 100-ზე მეტია';
    } else {
        return 'ნამრავლი 100-ზე ნაკლებია';
    }
}





function checkFirstAndLastChar(text) {
    if (text.charAt(0) === text.charAt(text.length - 1)) {
        return 'პირველი და ბოლო ასოები ერთნაირია';
    } else {
        return 'პირველი და ბოლო ასოები განსხვავებულია';
    }
}


function letterFrequency(text) {
    const frequency = {};
    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}


function isPalindrome(text) {
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedText === cleanedText.split('').reverse().join('');
}

