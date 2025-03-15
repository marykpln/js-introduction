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

// let charCode = String.fromCharCode("fff");
// console.log("code", charCode);
