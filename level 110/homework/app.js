
class Animal {
    constructor(name, type, age) {
      this.name = name;
      this.type = type;
      this.age = age;
    }
  
    speak() {
      console.log(`${this.name} says hello!`);
    }
  }
  

  class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    drive() {
      console.log(`${this.brand} ${this.model} is driving!`);
    }
  }
  

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.firstName} ${this.lastName}.`);
    }
  }
  

  let animal1 = new Animal("Dog", "Mammal", 5);
  let animal2 = new Animal("Cat", "Mammal", 3);
  let animal3 = new Animal("Bird", "Avian", 2);
  
  
  let car1 = new Car("Toyota", "Corolla", 2020);
  let car2 = new Car("BMW", "X5", 2021);
  let car3 = new Car("Audi", "A4", 2019);
  

  let person1 = new Person("John", "Doe", 28);
  let person2 = new Person("Jane", "Smith", 34);
  let person3 = new Person("Alex", "Johnson", 25);

  animal1.speak();
  animal2.speak();
  animal3.speak();
  
  car1.drive();
  car2.drive();
  car3.drive();
  
  person1.introduce();
  person2.introduce();
  person3.introduce();
  