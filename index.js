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
//person2 is same as person1
// const person2 = person1;
const person2 = { ...person1 };
console.log(
  `before setting  age to 30`,
  `person1.age =${person1.age}; peson2.age =${person2.age}`
);
person1.age = 30;
console.log(
  `after setting  age to 30`,
  `person1.age =${person1.age}; peson2.age =${person2.age}`
);
