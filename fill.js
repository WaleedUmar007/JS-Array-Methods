//it overwrites the original array

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits.fill("Kiwi", 1, 3));
// console.log(fruits.fill("Orange", 2, 4));

const fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruit.fill("Kiwi", 1, 3));//in js fill method, the end is n-1
console.log(fruit)

const array1 = [1, 2, 3, 4, 5];
console.log(array1.fill(0,2,3))