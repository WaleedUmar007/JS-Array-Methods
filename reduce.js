//it does not change the original array
//it returns the accumulated value

const array = [1, 2, 3, 4, 5];
function reducer (previousValue,currentValue){
    return previousValue + currentValue;
}
console.log(array.reduce(reducer));