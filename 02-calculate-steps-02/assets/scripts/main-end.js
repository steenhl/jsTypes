// DOM calc
const calc = document.querySelector("#calc");
// input 1
const input1 = calc.querySelector("#calc-text-input1");
// result text
const resultText = calc.querySelector("#calc-result-text");
//
// console.log(resultText.innerHTML);

input1.addEventListener("change", function (event) {
	const value = parseFloat(event.currentTarget.value);
	resultText.innerHTML = value;
});
