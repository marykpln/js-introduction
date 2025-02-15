/*
1.Java array - block of memory



2.Java Script array set of key-vallue pairs

*/

const array = ["abc", 22];
// array[10000000000] = 10; //10000000000 - key; vallue = 10;
console.log(array.length); //10000000001
console.log(array[0]);

function forEach(array, fun) {
  for (let i = 0; i < array.length; i++) {
    fun(array[i], i);
  }
}

function print(el, index) {
  console.log(`index: ${index},  element: ${elem}`);
}

forEach(array, print);

// forEach takes array fun with 2 parent, el of array, second index
function some(array, fun) {
  //TODO
  //retun true if all el of the ar match a condition given in the function (fun)
}

function evenNumber(num) {
  return num % 2 == 0;
}
