const calc = document.querySelector("#calc");
// input felt DOM
const input1 = calc.querySelector("#calc-text-input1");
// Show result in DOM
const input2 = calc.querySelector("#calc-text-input2");
// add button
const buttonAdd = calc.querySelector("#calc-button-add");
// minus button
const buttonMinus = calc.querySelector("#calc-button-minus");
// minus divide
const buttonDivide = calc.querySelector("#calc-button-divide");
// minus multiplay
const buttonMulitply = calc.querySelector("#calc-button-mulitply");
// submit
const submitButton = calc.querySelector("#submit-values");
// Show result
const calcResultText = calc.querySelector("#calc-result-text");
// vars
const addText = "add";
const minusText = "minus";
const divideText = "divide";
const multiplayText = "multiplay";
let typeOfCalculation = "";
// eventListener
buttonAdd.addEventListener("click", () => (typeOfCalculation = addText));
buttonMinus.addEventListener("click", () => (typeOfCalculation = minusText));
buttonDivide.addEventListener("click", () => (typeOfCalculation = divideText));
buttonMulitply.addEventListener("click", () => (typeOfCalculation = multiplayText));

submitButton.addEventListener("click", () => {
	let value1 = parseFloat(input1.value);
	let value2 = parseFloat(input2.value);
	// check if value1 and value2 return NaN
	let isVal1NaN = Number.isNaN(value1);
	let isVal2NaN = Number.isNaN(value2);
	// stop
	if (isVal1NaN) return;
	if (isVal2NaN) return;

	// variable typeOfCalculation contains e.g text
	switch (typeOfCalculation) {
		case addText:
			showResult(add(value1, value2), calcResultText);
			break;
		case minusText:
			showResult(minus(value1, value2), calcResultText);
			break;
		case divideText:
			showResult(divide(value1, value2), calcResultText);
			break;
		case multiplayText:
			showResult(multiplay(value1, value2), calcResultText);
			break;
		default:
			calcResultText.innerHTML = "Enter a number";
	}
});

function showResult(resultVal, domTextFelt) {
	domTextFelt.innerHTML = resultVal;
}

function add(a, b) {
	return a + b;
}
function minus(a, b) {
	return a - b;
}
function divide(a, b) {
	return a / b;
}
function multiplay(a, b) {
	return a * b;
}
