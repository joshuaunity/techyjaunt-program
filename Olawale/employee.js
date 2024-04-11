const createEmployee = (name, role, salary) => {
    return { name, role, salary };
};

let micheal = createEmployee("micheal", "frontend dev", 2000);

const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per day`;
};

console.log(getSalary(micheal));

//a function to update employee salary
const updateSalary = (employee, newSalary) => {
    micheal.salary = newSalary;
    return `${employee.name} updated salary is now ${employee.salary} per day`;
}
console.log(updateSalary(micheal, 6500)); // micheal updated salary is now 6500 per day
console.log(micheal.salary); //6500