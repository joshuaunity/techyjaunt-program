const getSalary=(employee)=> {
    return `The salary of ${employee.name} is ${employee.salary} per day`
}
console.log(getSalary({name:"Patrick", salary:"2000"}))