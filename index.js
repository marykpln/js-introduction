//function is an objectt with operator () (function call)
//conversion func to str will return str containing text of the func
//conversion fun to num will return NaN

const sum = function (a, b) {
  return a + b;
};

const substract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a - b;
};
// console.log(sum + "");

function calculate(fun, a, b) {
  return fun(a, b);
}
console.log(calculate(substract, 10, 5));
