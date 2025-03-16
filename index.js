// import { testframework } from "./testframework.js";
import Deffered from "./Deffered.js";

const d = new Deffered();
d.then(function (res) {
  console.log("1 ", res);
  return "a";
});
d.then(function (res) {
  console.log("2 ", res);
  return "b";
});
d.then(function (res) {
  console.log("3 ", res);
  return "c";
});
d.resolve("hello");

Function.prototype.myBind = function (thisContext, ...args) {
  return (...newArg) => this.call(thisContext, ...args, ...newArg);
};

function sum(a, b) {
  return a + b;
}

const sum = sum.myBind(null, 1, 2)();
console.log(sum);
