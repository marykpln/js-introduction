//Factory method
function createPreson(id, name, city, street, app, children) {
  return {
    id, //id:id
    name,
    address: (city, street, app),
    children,
  };
}

const person = createPreson(123, "Vasya", "Lod", "Sokolov", 12, [
  "Yackob",
  "Asaf",
]);

const jsonPerson = JSON.stringify(person);
console.log(`person name id ${person.name}`);
console.log(`person length is ${person.length}`);
console.log(`JSON person length is ${jsonPerson.length}`);


