
//arrow func cannot be a method of an obj
const empl1 = {
  name: "Voldemort",
  basicSalary: 10000,
  computeSalaryFun: function () {
    return this.basicSalary;
  },
  computeSalaryArrow: () => {
    return this.basicSalary;
  },
};
const salatyFun = empl1.computeSalaryFun();
const salaryArroe = empl1.computeSalaryArrow();
let a;