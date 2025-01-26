//ააკეთეთ თითოეულ ნასწავლ მეთოდზე (.createElement, .appendChild(node), .insertBefore, .removeChild(node), .parentNode, .replaceChild) 5-5 მაგალითი, ახსენით თითოეულის მუშაობა კომენტარებით
// შექმენით ახალი ელემენტი 'div'
const newDiv = document.createElement('div');

// შექმენით ტექსტური ნოდი
const newContent = document.createTextNode('This is a new div element!');

// დაამატეთ ტექსტი 'div' ელემენტში
newDiv.appendChild(newContent);

// დაემატეთ 'div' ელემენტი ბადიშის ბოლოში
document.body.appendChild(newDiv);



//2
// შექმენით ახალი ელემენტი 'p'
const newPara = document.createElement('p');

// დაამატეთ ტექსტი პესაში
newPara.textContent = 'This is a paragraph!';

// დაამატეთ ახალი პესა 'body' ელემენტში
document.body.appendChild(newPara);



//3
// შექმენით ახალი ელემენტი 'h1'
const newHeading = document.createElement('h1');
newHeading.textContent = 'This is a heading!';

// მოძებნეთ ცალმხრივი ელემენტი, რომ რომლის წინაც უნდა დავამატოთ ახალი ელემენტი
const firstPara1 = document.querySelector('p');

// დაამატეთ ახალი 'h1' ელემენტი პირველ პარაგრაფოს წინ
document.body.insertBefore(newHeading, firstPara);



//4
// მოძებნეთ ელემენტი, რომელსაც უნდა ამოიღოთ
const firstParaToRemove = document.querySelector('p');

// ამოიღეთ პირველი პესა
document.body.removeChild(firstParaToRemove);



//5
// მოძებნეთ კონკრეტული ელემენტი
const firstPara = document.querySelector('p');

// მოძებნეთ მისი მშობელი ელემენტი
const parentElement = firstPara.parentNode;

// კონსოლში გამოიტანეთ მშობელი ელემენტი
console.log(parentElement);

//6
// შექმენით ახალი ელემენტი 'h2'
const newHeading2 = document.createElement('h2');
newHeading2.textContent = 'This is a new heading!';

// მოძებნეთ ელემენტი, რომელსაც უნდა ჩაანაცვლოთ
const oldHeading = document.querySelector('h1');

// შეცვალეთ 'h1' ელემენტი ახალ 'h2' ელემენტზე
document.body.replaceChild(newHeading2, oldHeading);


