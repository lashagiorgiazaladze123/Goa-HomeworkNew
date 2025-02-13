class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  
    // Getter method for perimeter
    get perimeter() {
      return 2 * (this.length + this.width);
    }
  }
  
  // შექმენით და გამოიყენეთ კლასი
  const myRectangle = new Rectangle(10, 5);
  console.log(myRectangle.perimeter); // 30

  
  //2
  // ცხოველის კლასი
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // ძუძუმწოვრის კლასი (Animal კლასი გაფართოებული)
  class Mammal extends Animal {
    constructor(name, furColor) {
      super(name); // მშობელი კლასი კონსტრუქტორი
      this.furColor = furColor;
    }
  
    speak() {
      console.log(`${this.name} says: I am a mammal!`);
    }
  }
  
  // ძაღლის კლასი (Mammal კლასი გაფართოებული)
  class Dog extends Mammal {
    constructor(name, furColor, breed) {
      super(name, furColor); // მშობელი კლასი კონსტრუქტორი
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name}, the ${this.breed}, barks!`);
    }
  }
  
  // გამოყენება
  const myDog = new Dog('Buddy', 'brown', 'Golden Retriever');
  myDog.speak(); // "Buddy, the Golden Retriever, barks!"

  
//3
// მანქანის კლასი
class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    drive() {
      console.log(`The ${this.brand} ${this.model} is driving.`);
    }
  
    stop() {
      console.log(`The ${this.brand} ${this.model} has stopped.`);
    }
  }
  
  // ელექტრონული მანქანის კლასი (Car კლასის გაფართოება)
  class ElectricCar extends Car {
    constructor(brand, model, batteryLife) {
      super(brand, model); // მშობელი კლასის კონსტრუქტორი
      this.batteryLife = batteryLife;
    }
  
    // drive მეთოდის გადამუშავება
    drive() {
      console.log(`The ${this.brand} ${this.model} is driving silently.`);
    }
  
    // ახალი ფუნქციონალი, რომელიც გამოიმუშავებს მეთოდს
    charge() {
      console.log(`Charging the ${this.brand} ${this.model} for ${this.batteryLife} hours.`);
    }
  }
  
  // გამოყენება
  const myElectricCar = new ElectricCar('Tesla', 'Model S', 10);
  myElectricCar.drive(); // "The Tesla Model S is driving silently."
  myElectricCar.charge(); // "Charging the Tesla Model S for 10 hours."
  myElectricCar.stop(); // "The Tesla Model S has stopped."

  
  