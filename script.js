var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+","
	+color3.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomNumGenerator() {
	let ran = Math.random() * (255-0+10) + 0 ;
	return ran;
}

function randomBg() {
	body.style.background = `linear-gradient(to right, rgb(${randomNumGenerator()},${randomNumGenerator()},${randomNumGenerator()}), 
	rgb(${randomNumGenerator()},${randomNumGenerator()},${randomNumGenerator()}), 
	rgb(${randomNumGenerator()},${randomNumGenerator()},${randomNumGenerator()}))`;
	css.textContent = body.style.background + ";";
}

window.addEventListener("load", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
button.addEventListener("click", randomBg);