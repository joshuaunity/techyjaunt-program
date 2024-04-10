const employeeInfo = (name, role, salary) => {
  return { name, role, salary };
};

let Johnson = employeeInfo('Johnson', 'backend developer', 5000);

const basicSalary = (employee) => {
  return `The basic salary of ${employee.name} for the role of ${employee.role} is ${employee.salary} per month`;
};

// basic salary before promotion
console.log(basicSalary(Johnson));

const salaryUpdate = (employee) => {
  employee.salary = employee.salary + 3000;
  employee.role = 'full-stack developer'
  return `The updated salary of ${employee.name} for the role of ${employee.role} is ${employee.salary} per month`;
}

// updated salary after promotion
console.log(salaryUpdate(Johnson));