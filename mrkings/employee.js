const createEmployee = (name, role, salary) => {
    return { name, role, salary };
};

let micheal = createEmployee("micheal", "frontend dev", 2000);

const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per day`;
};

console.log(getSalary(micheal));

// CREATE A NEW FUNCTION THAT UPDATE AN EMPLOYEE'S SALARY.


const UpdateSalary = (employee, NewSalary) => {
    employee.salary = NewSalary;
    return
     `The new salary of ${employee.name}'s is ${NewSalary}`;
};

console.log(UpdateSalary(micheal, 8000));

// The above function returns employee's updated salary
