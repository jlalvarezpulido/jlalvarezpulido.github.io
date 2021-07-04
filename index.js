
var Mocha = document.getElementById("Mocha");
var Latte = document.getElementById("Latte");
var n = 5;
var button0 = document.getElementById("Not");
var button1 = document.getElementById("Reset");
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
