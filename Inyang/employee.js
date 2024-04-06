 const createEmployee = (name, salary, role) => {
    return { name, role, salary };
};

let michael = createEmployee('michael', 'frontend dev', 2000);

const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per day`;
}

console.log(getSalary(michael));

// Function that updates an Employee's salary

const updateSalary = (employee, newSalary) => {
    employee.salary = newSalary;
    return `Salary updated successfully for ${employee.name}. New salary: ${employee.salary}`;
}

// updating the salary of a employee michael
console.log(updateSalary(michael, 6000));
