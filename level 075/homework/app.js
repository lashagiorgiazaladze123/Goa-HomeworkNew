const array1 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(array1.length);
console.log(array1.toString());
console.log(array1.at(1));
console.log(array1.join('-'));
array1.push('fig', 'grape');
console.log(array1);
const lastElement = array1.pop();
console.log(lastElement);

const array2 = ['one', 'two', 'three'];
array2.shift();
console.log(array2);
array2.unshift('zero');
console.log(array2);
delete array2[1];
console.log(array2);

const array3 = ['four', 'five'];
const concatenatedArray = array2.concat(array3);
console.log(concatenatedArray);
const newLength = array2.unshift('newStart');
console.log(newLength);
