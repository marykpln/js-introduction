function getUserPassword(probCorrectPass) {
  //example what should be done in the HW solution
  const passwords = ["correct", "wrong"];
  const index = Math.random() < probCorrectPass ? 0 : 1;
  return new Promise((resolve) => {
    setTimeout(() => resolve(passwords[index]));
  });
}
function login(password) {
  if (password !== "correct") {
    throw "wrong credentials";
  }
  return getPromise(2000);

  //TODO
  //returns promise in the state resolved only for passowrd 'correct' otherwise state rejected
}
function getUserData(username) {
  const users = {
    Vasya: { name: "Vasya", age: 30 },
    Petya: { name: "Petya", age: 40 },
  };
  if (!users[username]) {
    throw `user ${username} not found`;
  }
  //timeout 1 sec
  return getPromise(1000, users[username]);
  //TODO
  //returns promise in the state resolved if username exists with returning user data
  //otherwise state rejected with apropriate message
}
async function funStackExample(username) {
  try {
    const password = await getUserPassword(0.5);
    await login(password);
    const userData = await getUserData(username);
    console.log(userData);
  } catch (error) {
    console.log(error, username);
  }
}
funStackExample("Petya");
console.log("waiting for the data coming from the server...");
