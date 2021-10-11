//it does not change the original array
//it iterates through the array and returns the index of the first element that matches the condition
//it does not return the array but the value

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
const result = fruits.find(fruit =>fruit.length > 5);
console.log(result);