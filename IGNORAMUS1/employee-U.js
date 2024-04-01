const createEmployee = (name, role, salary) => {
    return { name, role, salary };
};

let micheal = createEmployee("micheal", "frontend dev", 2000);

const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per day`;
};

console.log(getSalary(micheal));

// CREATE A NEW FUNCTION THAT UPDATE AN EMPLOYEE'S SALARY.

/* this function update an employee's new salary.
It takes an employee's name and his new salary as its arg and then modify the employee's salary. */

const updateSalary = (employee, newSalary) => {
    return employee.salary = newSalary, 
    `${employee.name}'s new salary is ${newSalary}`;
};

console.log(updateSalary(micheal, 6000));

// the below code is used to check whether micheal's salary has been successfully reassigned.
//console.log(micheal.salary);