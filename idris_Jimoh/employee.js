/*const createEmployee = (name, role, salary) => {
    return { name, role, salary };
};

let micheal = createEmployee("micheal", "frontend dev", 2000);

const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per day`;
};

console.log(getSalary(micheal));*/
//employee salary update by Idris Jimoh
const updateData = (name,salary) => {
    return {name,salary}
};
let wages = updateData("Khalid","N200,000");

const totalEarnings = (worker) => {
    return `The monthly earnings of Mr.${worker.name} is ${worker.salary}`;
}
console.log(totalEarnings(wages));