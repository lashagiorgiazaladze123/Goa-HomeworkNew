// სავარჯიშო 1, 2, 3 - პიროვნების კლასი
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // სავარჯიშო 1 - ინიციალები
    get initials() {
        return `${this.firstName[0]}.${this.lastName[0]}.`;
    }

    // სავარჯიშო 2 - ასაკი თვეებში
    get ageInMonths() {
        return this.age * 12;
    }

    // სავარჯიშო 3 - პენსიაზე გასვლა
    get isRetired() {
        return this.age >= 60;
    }
}

// ტესტირება
const person1 = new Person("გიორგი", "კობახიძე", 45);
console.log(person1.initials); // "გ.კ."
console.log(person1.ageInMonths); // 540
console.log(person1.isRetired); // false

const person2 = new Person("ნინო", "ბერიძე", 65);
console.log(person2.isRetired); // true

// სავარჯიშო 4, 5 - პროდუქტის კლასი
class Product {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount; // პროცენტულად (მაგ. 10 = 10%)
    }

    // სავარჯიშო 4 - ფორმატირებული ფასი
    get formattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }

    // სავარჯიშო 5 - ფასდაკლებული ფასი
    get discountPrice() {
        let discounted = this.price - (this.price * this.discount / 100);
        return `$${discounted.toFixed(2)}`;
    }
}

// ტესტირება
const product1 = new Product("ლეპტოპი", 1000, 10);
console.log(product1.formattedPrice); // "$1000.00"
console.log(product1.discountPrice); // "$900.00"

const product2 = new Product("ტელეფონი", 500, 20);
console.log(product2.discountPrice); // "$400.00"
