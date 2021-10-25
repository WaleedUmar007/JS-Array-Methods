//forEach does not change the original array
//it returns the elements in a new array

// const fruits = ["apple", " ", "cherry"]; 
// fruits.forEach(function(fruit) {
//   console.log(fruit);
// }); //with an empty string the forEach runs and gives a space

const fruits = ["apple"," " , "cherry"]; 
fruits.forEach(function(fruit) {
  console.log(fruit);
});
console.log(fruits);