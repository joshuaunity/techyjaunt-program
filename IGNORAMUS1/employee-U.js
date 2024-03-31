const createEmployee = (name, role, salary) => {
    return { name, role, salary };
};

let micheal = createEmployee("micheal", "frontend dev", 2000);

const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per day`;
};

console.log(getSalary(micheal));

// CREATE A NEW FUNCTION THAT UPDATE AN EMPLOYEE'S SALARY.

// this function calculate the new salary of an employee (increase salary by 25%).
const newSalary = (employee) => {
    let increSalary = employee.salary + 0.25*employee.salary;
    return `The new salary of ${employee.name} is ${increSalary} per day.`;
}
console.log(newSalary(micheal))