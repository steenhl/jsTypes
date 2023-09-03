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
const submitValues = calc.querySelector("#submit-values");
// Show result
const calcResultText = calc.querySelector("#calc-result-text");
// var
const addText = "add";
const minusText = "minus";
const divideText = "divide";
const multiplayText = "multiplay";
let typeOfCalculation = "";
// eventListener
buttonAdd.addEventListener("click", (e) => {
	typeOfCalculation = addText;
});
buttonMinus.addEventListener("click", (e) => {
	typeOfCalculation = minusText;
});
buttonDivide.addEventListener("click", (e) => {
	typeOfCalculation = divideText;
});
buttonMulitply.addEventListener("click", (e) => {
	typeOfCalculation = multiplayText;
});

function submitResult(val1, val2, submitButton) {
	// Click on submit button
	submitButton.addEventListener("click", () => {
		let value1 = parseFloat(val1.value);
		let value2 = parseFloat(val2.value);
		// stop
		if (typeof value1 !== "number") return;
		if (typeof value2 !== "number") return;

		switch (typeOfCalculation) {
			case addText:
				showResult(add(value1, value2), calcResultText);
				// calcResultText
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
				console.log("default");
				calcResultText.innerHTML = "Indtast et tal";
		}
	});
}

submitResult(input1, input2, submitValues);

function showResult(resultVal, domTextFelt) {
	domTextFelt.innerHTML = resultVal;
	console.log(domTextFelt.innerHTML);
	console.log(resultVal);
	// console.log(domTextFelt);
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

// inputDOM, resultDOM
function showInput(inputDOM, resultDOM) {
	inputDOM.addEventListener("change", (event) => {
		const curResult = parseFloat(event.target.value);
		resultDOM.innerHTML = curResult;
	});
}
//showInput(inputDOM, resultDOM);
