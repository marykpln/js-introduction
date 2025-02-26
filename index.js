// one person presented by separate variables;
const id = 123;
const name = "Vasya";
const addressCity = "Lod";
const addressStreet = "Sokolov";
const adressApp = 12;
const children = ["Yackob", "Asaf"];

const person1 = {
  id: 123,
  name: "Vasya",
  address: { city: "Lod", street: "Sokolov", app: 12 },
  children: ["Yackob", "Asaf"],
};

//Factory method
function createPreson(id, name, city, street, app, children) {
  return {
    id, //id:id
    name,
    address: (city, street, app),
    children,
  };
}

const person2 = createPreson(123, "Vasya", "Lod", "Sokolov", 12, [
  "Yackob",
  "Asaf",
]);

// const person2 = person1;
console.log(`person1 == person2  is ${person1 == person2}`);
const jsonPerson1 = JSON.stringify(person1);
const jsonPerson2 = JSON.stringify(person2);
console.log(`JSON presentation of person1 is ${JSON.stringify(jsonPerson1)}`);
console.log(`JSON presentation of person2 is ${JSON.stringify(jsonPerson2)}`);
console.log(`jsonPerson1 === jsonPerson2 is ${jsonPerson1 === jsonPerson2}`);

