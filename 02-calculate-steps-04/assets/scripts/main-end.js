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

let typeOfClick;
// console.log(typeOfClick);
buttonAdd.addEventListener("click", () => (typeOfClick = "add"));
buttonMinus.addEventListener("click", () => (typeOfClick = "minus"));
buttonDivide.addEventListener("click", () => (typeOfClick = "divide"));
buttonMulitply.addEventListener("click", () => (typeOfClick = "multiplay"));

submitButton.addEventListener("click", () => {
	let val1 = parseFloat(input1.value);
	let val2 = parseFloat(input2.value);

	let isVal1NaN = Number.isNaN(val1);
	let isVal2NaN = Number.isNaN(val2);

	if (isVal1NaN === true) return;
	if (isVal2NaN === true) return;

	switch (typeOfClick) {
		case "add":
			let addRes = add(val1, val2);
			resultText.innerHTML = addRes;
			break;
		case "minus":
			let minusRes = minus(val1, val2);
			resultText.innerHTML = minusRes;

			break;
		case "divide":
			let divideRes = divide(val1, val2);
			resultText.innerHTML = divideRes;

			break;
		case "multiplay":
			let multiplayRes = multiplay(val1, val2);
			resultText.innerHTML = multiplayRes;

			break;
		default:
			resultText.innerHTML = "Husk at truk på en regnearts knap";
	}
});

// simple function
function add(a, b) {
	let res = a + b;
	return res;
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

// input1.addEventListener("change", function (event) {
// 	const value = parseFloat(event.currentTarget.value);
// 	resultText.innerHTML = value;
// });

// buttonAdd.addEventListener("click", handelClick);

// function handelClick() {
// 	// console.log("JADA");
// }
// buttonAdd.addEventListener("click", function () {});
