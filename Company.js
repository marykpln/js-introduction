export default class Company {
  constructor() {
    this.employees = {}; //key - name (unique name value), value - employee object (either Employee, or WageEmployee, or Manager)
  }
  addEmployee(empl) {
    this.employees[empl.name] = empl;
  }
  deleteEmployee(empl) {
    delete this.employees[empl.name];
  }
  getDepBudget(department) {
    return this.getEmployeesDepartment(department).reduce(
      (acc, empl) => acc + empl.computeSalary(),
      0
    );
    //TODO
    //take department name
    //returns total salary of all employees working in the given department
  }
  getEmployeesMaxSalary() {
    let arr = [];
    let maxSal = 0;
    Object.values(this.employees).forEach((empl) => {
      let salary = empl.computeSalary();
     
      if (salary > maxSal) {
        maxSal = salary;
        arr = [empl];
      } else if (salary === maxSal) {
        arr.push(empl);
      }
    });
    return arr;
    //TODO
    //returns array of employees with maximal salary
  }
  getEmployeesDepartment(department) {
    return Object.values(this.employees).filter((empl) => {
      empl.department === department;
    });
    //TODO
    //returns array of employees working in the given department
  }
}

// const empl = new Employee("lox", 666, "dep1");
// const empl2 = new Employee("pidor", 1000, "dep2");
// const empl3 = new Employee("pidor2", 1000, "dep3");
// const empl4 = new Employee("pidor3", 1010, "dep4");

// const company = new Company();
// company.addEmployee(empl);
// console.log(company);
