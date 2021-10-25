//filter does not change the original array
//it returns all the values that fulfill the condition
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
const result = fruits.filter(fruit =>fruit.length > 5);
console.log(result);

