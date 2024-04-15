
const createEmployee = (name, role, salary) => {
    return {name, role, salary}
}

let micheal = createEmployee("Levi", "frontend dev", 2000)

const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per day`
}

console.log(getSalary(micheal))

//write a function that updates the salary of the employee

const updateSalary = (employee, newSalary) => {
    employee.salary = newSalary
    return `The new salary of ${employee.name} is now ${employee.salary} per day`
}

console.log(updateSalary(micheal, 7000))

