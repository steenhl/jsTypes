function getDomElement(selectorString) {
	return (dom = document.querySelectorAll(selectorString));
}
const ul = getDomElement("#mylist");
// console.log(ul);
const listItems = ul[0].querySelectorAll("li");
listItems.forEach((elm, index) => {
	// use of modulus: %
	if (index % 2 === 0) {
		console.log(index);
		console.log(elm);
	}
});

const listItems2 = ul[0].querySelectorAll("li:nth-child(even)");
const listItems3 = ul[0].querySelectorAll("li:nth-child(odd)");
const listItems4 = ul[0].querySelectorAll("li:last-child");
console.log(listItems4);
