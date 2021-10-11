//entries method return an array of all the entries in the form of key value pairs
//entries method is used to iterate over the object
//entries method does not change the original array
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
iterator = fruits.entries();

for (var i of iterator) {
    console.log(i);
}