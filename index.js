const array = ["HELLO", 122, -10, "Java", "JavaScript", 500, "Node.js"];
//adding to array
array.push(...[1, 2, 3]);
//push adds to end of an sourse array
//unshift adds at beginning of an sourse array
//splice inserts at middle of array
console.log([1, 2, 3].push([4, 5, 6]));
console.log([1, 2, 3].push(4, 5, 6)); // return length 6
const array1 = [1, 2, 3].concat([3, 4, 5]);
// const array1 = [1, 2, 3].concat(3, 4, 5);
console.log(array1[3]);
//concat - that doesn't update soure array. it's only returns new array as a result of concatination
console.log(array.unshiftshift(...[3, 4, 5]));
console.log(array);

console.log(array.splice(3, 0, "kukareku"));
console.log(array);
/******************************************** */
//removing last el
console.log(array.pop());
console.log(array);
//removing first el
console.log(array.shift());
//removing several el or at middle
console.log(array.splice(3, 3));
console.log(array);

console.log(array.splice(3, 1, "Python"));
console.log(array);
