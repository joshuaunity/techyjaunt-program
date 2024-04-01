const createEmployee = (name, role, salary) => {
	return { name, role, salary }
}

let Abiola = createEmployee("Abiola", "frontend dev", 2000)

const getSalary = (employee) => {
	return `The salary of ${employee.name} is ${employee.salary} per day`
}

console.log(getSalary(Abiola))

// New function to update salary

const updateSalary = (employee, newSalary) => {
	employee.salary = newSalary
	return `The updated salary of ${employee.name} is now ${newSalary} per day`
}

console.log(updateSalary(Abiola, 8_000))
