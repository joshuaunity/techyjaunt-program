const createEmployee = (name, role, salary) => {
    return { name, role, salary };
};

let sasha = createEmployee("Sasha", "Back-end Dev", 2000);

const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per month`;
};

console.log(getSalary(sasha));


// Update Salary
const updateSalary = (employee, newSalary) => {
    employee.salary = newSalary
    return `After consideration, ${employee.name}'s new salary is ${employee.salary} per month`;
};

console.log(updateSalary(sasha, 3500));
// console.log(sasha.salary);
