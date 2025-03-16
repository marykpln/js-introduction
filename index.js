function sleep(timeout) {
  let runnig = true;
  const timestamp = new Date().getTime();
  while (running) {
    let current = new Date().getTime();
    if (current - timestamp >= timeout) {
      runnig = false;
    }
  }
}
sleep(5000);
console.log("Hello, world");
