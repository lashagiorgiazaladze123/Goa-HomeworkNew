const btn = document.getElementById('btn')
if (btn) {
    btn.onclick = function() {
        btn.textContent = "I want to become a full stack developer and know both back end and front end. Then I want to make my own websites or even start my own company and get orders from people on my website, create my own little group, and work with them";
    };
} else {
    console.error('Button with ID "btn" not found.');
}

const Btn = document.getElementById('Btn')
if (Btn) {
    Btn.onclick = function() {
        Btn.textContent = "c# javaScript c++ node.js";
    };
} else {
    console.error('Button with ID "Btn" not found.');
}

const button = document.getElementById('button')
if (button) {
    button.onclick = function() {
        button.textContent = "NEVER";
    };
} else {
    console.error('Button with ID "button" not found.');
}
document.getElementById('exit').onclick = function() {
    window.open('http://127.0.0.1:5500/index.html');
};
