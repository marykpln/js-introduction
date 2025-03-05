const array = [1, 2, 3];
// const temp = second;
// second = first;
// first = second;

// let first = 1;
// let second = 2;
let [first, second] = array;
console.log(`second = ${second}`);
console.log(`first = ${first}`);

const person1 = { name: "Voldemort", age: 25 };

let [nm, ag] = person1;
console.log(`ag=${ag}`); //undefinded

const [name, age] = person1;
console.log(`age=${age}`);

function minMax(arr) {
  return arr.reduce(
    (acc, cur) => ({
      min: acc.man > cur ? cur : acc.min,
      max: acc.max < cur ? cur : acc.max,
    }),
    { min: arr[0], max: arr[0] }
  );
}
const arr = [1000, -1, 20, -10];
const { min, max } = minMax(arr);
console.log(`min=${min}`);
console.log(`max=${max}`);
