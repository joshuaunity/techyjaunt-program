const createEmployee = (name, role, salary) => {
	return { name, role, salary }
};

let micheal = createEmployee("micheal", "frontend dev", 2000)

const getSalary = (employee) => {
	return `The salary of ${employee.name} is ${employee.salary} per day`;
};

console.log(getSalary(micheal))

// function that update salary
const updateSalary = (employee, newSalary) => {
    employee.salary = newSalary;
	return `Mr. ${employee.name} your new salary is ${employee.salary} per day`;
};

// Updating Micheal's salary to 3000
console.log(updateSalary(micheal, 3000)); 