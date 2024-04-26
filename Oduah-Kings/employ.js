const createEmployee = (name, role, salary) => {
    return { name, role, salary };
};

let oduah = createEmployee("Oduah", "Backend Dev", 10000);

const getSalary = (employee) => {
    return `The salary of ${employee.name} is $${employee.salary} per day`;
};

console.log(getSalary(oduah)); 

// Function that update an employee's salary
const updateSalary = (employee, newSalary) => {
    employee.salary = newSalary;
    console.log(`${employee.name}'s salary has been updated to $${newSalary}`);
};

updateSalary(oduah, 80000); // Update Oduah's salary to $80000

console.log(getSalary(oduah)); 
