const createEmployee = (name, role, salary) => {
	return { name, role, salary }
}

let staff = createEmployee("Kevin", "frontend dev", 2000)

const getSalary = (employee) => {
	return `The salary of ${employee.name} is ${employee.salary} per day`
}

console.log(getSalary(staff))

// Function that updates an employee's salary

const updateSalary = (employee, salaryUpgrade) => {
    employee.salary = salaryUpgrade;
    return `Congratulation ${employee.name}, your updated salary is ${salaryUpgrade} per day`;
}

console.log(updateSalary(staff, 5000));