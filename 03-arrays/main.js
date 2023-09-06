const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const resultat = document.querySelector("#resultat");
const knap = document.querySelector("#click-button");
// plus knap
const plus = document.querySelector("#plus");

let isPlusClicked = false;
plus.addEventListener("click", (event) => {
	isPlusClicked = true;
});

number1.addEventListener("change", (event) => {
	number1Tal = parseFloat(event.currentTarget.value);
});

number2.addEventListener("change", (event) => {
	number2Tal = parseFloat(event.currentTarget.value);
});

knap.addEventListener("click", (event) => {
	if (isPlusClicked) {
		console.log("sand");
		console.log(isPlusClicked);
		console.log((resultat.innerHTML = number1Tal + number2Tal));
	} else {
		console.log("falsk");
		console.log(isPlusClicked);
	}
});

const number1Text = number1.value;
//const number1Text = number1.innerHTML;
const number2Text = number2.value;

let number1Tal = parseFloat(number1Text);
let number2Tal = parseFloat(number2Text);

let res = number1Tal * number2Tal;

const ul = document.querySelector("#mylist");

//const li = ul.querySelectorAll("li");

// console.log(number1Tal);
// console.log(number2Tal);
// console.log(res);
// li.forEach((element, index) => {});
// const liLength = li.length;

// console.log(li);
// console.log(myList);

// for (let index = 0; index < liLength; index++) {
// 	li[index].addEventListener("click", (event) => {
// 		// console.log(event.currentTarget);
// 		//console.log(event.currentTarget.innerHTML);
// 		let text = event.currentTarget.innerHTML;
// 		text
// 		// li[index].innerHTML = `List item ${index + 1}
// 	});
// 	//console.log((li[index].innerHTML = `List item ${index + 1} hej hej`));
// }
// parseFloat()
// console.log
// myList.addEventListener("click", (event) => {
// 	console.log(event.currentTarget);
// });
// let mylist = document.querySelector("#mylist");
// let li = mylist.querySelectorAll("li");

// myListLenght = li.length - 1;

// // li.forEach((element, index) => {
// // 	if (index % 3 == 0) {
// // 		console.log(element);
// // 	}
// // });

// const names = ["ole", "sissel", "Bo", "Anni"];
// const names1 = [...names];
// console.log(names);
// names.sort();
// console.log(names);
// console.log(names1);
// const names2 = names.slice(1, 3);
// console.log(names2);
