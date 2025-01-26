//1
function sayHello() {
    console.log("გამარჯობა");
  }
//2
// ფუნქცია, რომელსაც გადაეცემა სახელის არგუმენტი
function greet(name) {
    console.log("გამარჯობა, " + name);
  }

  
  //3
  
function addOne(number) {
    return number + 1;
  }

  //4
function getNegative(number) {
    return -Math.abs(number);
  }
  
  
  let result = getNegative(44);
  console.log(result + 1);  
  //5


function getElementByIdAndUpdate(id) {
  var element = document.getElementById(id);

  
  if (element) {
    element.style.color = "blue";            
    element.style.backgroundColor = "yellow"; 
    element.textContent = "lasha";      
  } else {
    console.log("element not found");
  }
}
