let mylist = document.querySelector("#mylist");
let li = mylist.querySelectorAll("li");

myListLenght = li.length - 1;

// li.forEach((element, index) => {
// 	if (index % 3 == 0) {
// 		console.log(element);
// 	}
// });

const names = ["ole", "sissel", "Bo", "Anni"];
const names1 = [...names];
console.log(names);
names.sort();
console.log(names);
console.log(names1);
// const names2 = names.slice(1, 3);
// console.log(names2);
