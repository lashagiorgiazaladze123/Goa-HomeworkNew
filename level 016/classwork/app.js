while (true) {
    let num1 = prompt("შეიყვანეთ პირველი რიცხვი:");
    let num2 = prompt("შეიყვანეთ მეორე რიცხვი:");
  
    if (num1.toLowerCase() === "exit" || num2.toLowerCase() === "exit") {
      alert("პროგრამა დასრულდა.");
      break;
    }
  
    if (!isNaN(num1) && !isNaN(num2)) {
      let product = Number(num1) * Number(num2);
      alert(`რიცხვების ნამრავლი არის: ${product}`);
    } else {
      alert("გთხოვთ, შეიყვანეთ მხოლოდ რიცხვები.");
    }
  }
  