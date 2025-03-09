//arrow func cannot be a method of an obj
const empl1 = {
  name: "Voldemort",
  basicSalary: 10000,
  computeSalary: function () {
    return this.basicSalary;
  },
};

//factory method - method creating obj is not used if an obj has method/s
function createEmployee(name, basicSalary) {
  const res = { name, basicSalary };
  res.computeSalary = function () {
    return this.basicSalary;
  };
}

function Emloyee(name, basicSalary) {
  this.name = name;
  this.basicSalary = basicSalary;
}

Emloyee.prototipe.computeSalary = function () {
  return this.basicSalary;
};

const empl2 = new Emloyee("Bob", 1000000);
const empl3 = new Emloyee("Gay", 1300000);
const empl2Sal = empl2.computeSalary();

const empl3Sal = empl3.computeSalary();
let a;
