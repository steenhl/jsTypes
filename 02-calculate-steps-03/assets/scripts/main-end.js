// DOM calc
const calc = document.querySelector("#calc");
// input 1
const input1 = calc.querySelector("#calc-text-input1");
//
const buttonAdd = calc.querySelector("#calc-button-add");
// Minus
const buttonMinus = calc.querySelector("#calc-button-minus");
// div
const buttonDivide = calc.querySelector("#calc-button-divide");
// Multiplay
const buttonMulitply = calc.querySelector("#calc-button-mulitply");
//
const input2 = calc.querySelector("#calc-text-input2");
// submit
const submitButton = calc.querySelector("#submit-values");
// result text
const resultText = calc.querySelector("#calc-result-text");

input1.addEventListener("change", function (event) {
	const value = parseFloat(event.currentTarget.value);
	//resultText.innerHTML = value;
});
