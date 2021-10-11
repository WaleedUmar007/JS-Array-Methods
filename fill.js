//it overwrites the original array

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits.fill("Kiwi", 1, 3));
console.log(fruits.fill("Orange", 2, 4));