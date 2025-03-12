import { testframework } from "./testframework.js";
import Employee from "./employee.js";
import WageEmployee from "./WageEmployee.js";
import Manager from "./Manager.js";

// const commonScriptCompanyEmptyCompany = "const company = new Company();";
// const scriptsEmpty = [
//   `company.getDepBudget('dep1')`,
//   `company.getEmployeesMaxSalary()`,
// ];
// const actualEmpty = [0, []];

// testframework(
//   "Testing empty",
//   commonScriptCompanyEmptyCompany,
//   scriptsEmpty,
//   actualEmpty
// );

const commonScriptMaxSalary = `\
const company = new Company()
const empl1 = new Employee('lox', 10000, 'dep1')
const empl2 = new Employee('lox2', 12000, 'dep2')
const empl3 = new Employee('lox3', 12000, 'dep2')
company.addEmployee(empl1)
company.addEmployee(empl2)
company.addEmployee(empl3)
company.getEmployeesMaxSalary()
`;

const scriptMaxSal = [`company.getEmployeesMaxSalary()`];

const actualMaxSal = [
  [{ name: "lox2", basicSalary: 12000, department: "dep2" }],
];
testframework(
  "Testing empty",
  commonScriptMaxSalary,
  scriptMaxSal,
  actualMaxSal
);
