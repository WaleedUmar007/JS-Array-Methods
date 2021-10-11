// it does not change the original array
//it creates a new array

const array = [1, 2, 3, 4, 5];
// const array1 = array.map(function(item) {
//     return item * 2;
// });
const array1 = array.map(item => item ** 2);
console.log(array1);
console.log(array)