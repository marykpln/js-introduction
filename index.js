const array = ["HELLO", 122, -10, "Java", "JavaScript", 500, "Node.js"];
//finding
let index = array.indexOf("Java");
console.log(index);
const array1 = array.filter(function (el) {
  let result = true;
  if (typeof el == "string") {
    result = !el.includes("Java");
  }
  return result;
});
console.log(array1);

//forEach
array.forEach(function (el, index) {
  console.log(`${i + 1} : ${el}`);
});

//map
const array2 = array.map(function (e) {
  let res = typeof e == "number" ? Math.abs(e).toString().length : e.length;
  return res;
});

console.log(array2);

//join
const str = array.join("<br>");

//sort
const array3 = [122, 10000, 2, 9, 1000000000];
// console.log(array3.sort());
// console.log(array3);
// const array4 = [122, 10000, 2, 9, 1000000000];
// console.log(array4.toSorted());
// console.log(array4);

console.log(
  array1.toSorted(function (a, b) {
    return a - b;    //b-a
  })
);
