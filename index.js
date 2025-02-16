function sum(...operands) {
  let sum = 0;
  // if (Array.isArray(operands[0])) {
  //   operands = [...operands];
  // }
  for (let i = 0; i < operands.length; i++) {
    let operand = operands[i];
    if (Array.isArray(operand)) {
      operand = sumArray(operand);
    }
    sum = sum + operand;
  }
  return sum;
}

function sumArray(array) {
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    sum += array[i];
  }
  return sum;
}
// // console.log(`sum(1,2,3)=${sum(1,2,3)}`);
// console.log(`sum([1,2,3], 4, 6)=${sum([1,2,3], 5, 6)}`);

console.log(`Math.max(1,2,3) = ${Math.max(1, 2, 3)}`);

console.log(`Math.max(...[1,2,3]) = ${Math.max(...[1, 2, 3])}`);
