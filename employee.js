const createEmployee = (name, role, salary) => {
	return { name, role, salary }
}

let micheal = createEmployee("micheal", "frontend dev", 2000)

const getSalary = (employee) => {
	return `The salary of ${employee.name} is ${employee.salary} per day`
}

console.log(getSalary(micheal))

// My function to update the salary

const updateSalary = (employee) => {
	employee.salary = employee.salary + 1000
	return `The salary of ${employee.name} is now ${employee.salary} per day`
}

console.log(updateSalary(micheal))
