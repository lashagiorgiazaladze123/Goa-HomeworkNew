const inp = document.getElementById("id").value; // Get the value from the input element
const age = Number(inp); 
if (age < 18) {
    console.log("you can't enter the site");
} else if (age > 18) {
    console.log("you are old enough to enter the site");
} else if (age <= 0) {
    console.log("you were just born or even not born");
} else {
    console.log("error");
}