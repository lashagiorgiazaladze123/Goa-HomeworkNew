// ობიექტის შექმნა
let person = {
    name: "lashagiorgi",
    age: 14,
    city: "Tbilisi",
    job: "Developer"
  };
  
  // ობიექტის ინფორმაციის გამოყვანა "key: value" ფორმატში
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  