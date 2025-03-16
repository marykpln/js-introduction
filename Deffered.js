export default class Deferred {
  constructor() {
    this.result = "hello";
    this.num = 1;
    this.callbacks = [];
  }
  numberToLetter() {
    return this.num >= 1 && this.num <= 26
      ? String.fromCharCode(96 + this.num)
      : null;
  }
  changer() {
    console.log(this.num, this.result);
    let result = this.numberToLetter();
    this.num++;
    return result;
  }
  then(callback) {
    return this.result !== null
      ? (this.result = callback(this.changer()))
      : this.callbacks.push(callback);
  }
  resolve(arg) {
    this.result = arg;
    this.callbacks.forEach((callback) => {
      this.result = callback(this.changer());
      let res = this.callbacks[0]("hello");
      console.log(res);
      res =  this.callbacks [1](res)
      console.log(res)
    });
    this.callbacks = [];
  }
}
