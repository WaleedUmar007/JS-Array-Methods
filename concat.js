//concat does not change the existing array but returns a new array

var a=[1,2,3];
var b=[4,5,6];
console.log(a.concat(b))
console.log(a)
console.log(a.concat(b[0])) //we cannot concat an index of an array with array but can concat an array to an index of an array
console.log(a.concat(b[0],b[1])) //we can concat multiple elements to an index of an array