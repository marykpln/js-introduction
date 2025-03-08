const array = [1, 2, 3];
let [first, second] = array;
console.log(`second = ${second}`);
[second, first] = array;

console.log(`second after = ${second}`);
console.log(`first after = ${first}`);
