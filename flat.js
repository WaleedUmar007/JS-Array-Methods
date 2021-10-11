//the flat method concatenates all the sub-arrays into one array to a certain depth
//the depth is the number of sub-arrays to concatenate
//by default the depth is 1 and it does not change the original array

const numbers = [1,2,3,[4,5,6]];
const flatNumber = numbers.flat();
console.log(flatNumber);

const number1 = [1,2,3,[4,5,6,[7,8,9]]];
const flatNumber1 = number1.flat(1);
console.log(flatNumber1);

const number2 = [1,2,3,[4,5,6,[7,8,9]]];
const flatNumber2 = number2.flat(2);
console.log(flatNumber2);