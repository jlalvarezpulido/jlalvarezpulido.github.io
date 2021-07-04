
let Mocha = document.getElementById("Mocha");
let Latte = document.getElementById("Latte");
let n = 5;
let button0 = document.getElementById("Not");
let button1 = document.getElementById("Reset");
button0.innerHTML = "Not";
button1.innerHTML = "Reset";
button0.onclick = function(){
     Mocha.innerHTML = "Not Mocha";
     Latte.innerHTML = "Not Latte";
}
button1.onclick = function(){
    Mocha.innerHTML = "Esspresso Steamed milk and Syrup"; 
    Latte.innerHTML = "Milky Froathy Esspresso";
}
