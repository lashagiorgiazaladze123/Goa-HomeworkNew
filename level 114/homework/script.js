// 1. თერმომეტრი (ტემპერატურა ცელსიუსიდან ფარენჰეიტში)
class Thermometer {
    constructor(celsius) {
        this._celsius = celsius;
    }

    // Getter - აბრუნებს ტემპერატურას ფარენჰეიტში
    get temperature() {
        return (this._celsius * 9/5) + 32;
    }

    // Setter - იღებს მხოლოდ ცელსიუსში მნიშვნელობას
    set temperature(celsius) {
        this._celsius = celsius;
    }
}

// ტესტირება
const temp = new Thermometer(25);
console.log(temp.temperature); // 77°F
temp.temperature = 0;
console.log(temp.temperature); // 32°F


// 2. სტუდენტის შეფასება (ქულიდან A-F)
class Student {
    constructor(score) {
        this._score = score;
    }

    // Getter - ქულის მიხედვით აბრუნებს შეფასებას
    get grade() {
        if (this._score >= 90) return "A";
        if (this._score >= 80) return "B";
        if (this._score >= 70) return "C";
        if (this._score >= 60) return "D";
        return "F";
    }

    // Setter - იღებს ქულას (0-100)
    set score(value) {
        if (value >= 0 && value <= 100) {
            this._score = value;
        } else {
            console.log("ქულა უნდა იყოს 0-დან 100-მდე!");
        }
    }
}

// ტესტირება
const student = new Student(85);
console.log(student.grade); // "B"
student.score = 92;
console.log(student.grade); // "A"
student.score = 45;
console.log(student.grade); // "F"


// 3. საიდუმლო პაროლი (დაშიფვრა & უსაფრთხოება)
class SecurePassword {
    constructor(password) {
        this._encrypted = this.encrypt(password);
    }

    // Getter - ყოველთვის აბრუნებს "*****"
    get password() {
        return "*****";
    }

    // Setter - ინახავს დაშიფრულ პაროლს
    set password(newPassword) {
        this._encrypted = this.encrypt(newPassword);
    }

    // პაროლის დაშიფვრის მარტივი მეთოდი (არ არის ნამდვილი დაშიფვრა, მხოლოდ სიმულაცია)
    encrypt(password) {
        return btoa(password); // Base64 დაშიფვრა
    }

    // დაშიფრული პაროლის მიღება (ტესტირებისათვის)
    get encryptedPassword() {
        return this._encrypted;
    }
}

// ტესტირება
const user = new SecurePassword("mySecret123");
console.log(user.password); // "*****"
console.log(user.encryptedPassword); // დაშიფრული პაროლი
user.password = "newPass456";
console.log(user.password); // "*****"
console.log(user.encryptedPassword); // ახალი დაშიფრული პაროლი
