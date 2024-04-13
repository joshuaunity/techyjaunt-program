
const createEmployee = (name, role, salary) => {
    return {name, role, salary}
}

let micheal = createEmployee("micheal", "frontend dev", 2000)

const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per day`
}

console.log(getSalary(micheal))

//write a function that updates the salary of the employee

const updateSalary = (employee) => {
    employee.salary = 7000
    return `The new salary of ${employee.name} is now ${employee.salary} per day`
}

console.log(updateSalary(micheal))

