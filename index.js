function getUserPassword(probRightPass) {
  const passwords = ["correct", "wrong"];
  const index = Math.random() < probRightPass ? 0 : 1;
  return passwords[index];
}

function login(password) {
  if (password !== "correct") {
    throw "wrong";
  }
  return users[username];
}

function getUserData(username) {
  const users = {
    Vasya: { name: "Vasya", age: 30 },
    Petya: { name: "Petya", age: 40 },
  };
  if (!users[username]) {
    throw `username ${username} not exist`;
  }
}

function funStackExample(username) {
  const password = getUserPassword(0.8);
  try {
    login(password);
    const userData = getUserData(username);
    console.log(userData);
  } catch (error) {
    console.log(`error: ${error}`);
  }
}

funStackExample("Vasya");
