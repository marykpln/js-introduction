function sleep(timeout) {
  const rejectData = 5;
  return new Promise(
    (resolve) => {
      setTimeout(() => resolve(), timeout);
    },
    (reject) => reject("timeout cannot be negative")
  );
}
const timeout = 5000;
sleep(timeout)
  .then(() => console.log(`result after ${timeout * 1000} second`))
  .catch((e) => console.log(e))
  .finally(() => console.log(`printing out in any case`));
console.log("Hello, world");
