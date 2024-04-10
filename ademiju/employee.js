const createEmployee = (name, role, salary) => {
	return { name, role, salary };
}

let ademiju = createEmployee("Ademiju Taiwo", "Backend Developer", 15000);

const getName = (employee) => {
	return `Employee name is ${employee.name}`;
}
const getRole = (employee) => {
	return `${employee.name} is a ${employee.role}`;
}
const getSalary = (employee) => {
	return `${employee.name}'s salary is ${employee.salary} per day`;
}
console.log(getName(ademiju));
console.log(getRole(ademiju));
console.log(getSalary(ademiju));

// My function to Update Employee role

const updateEmployeeName = (employee, name) => {
    employee.name = name;
    console.log(`Your name has been updated to ${employee.name}`);
};

const updateEmployeeRole = (employee, role) => {
    employee.role = role;
    console.log(`Your role has been updated to ${employee.role}`);
};

const updateEmployeeSalary = (employee, salary) => {
    if(typeof salary === "number"){
        employee.salary = salary;
    console.log(`Your salary has been updated to ${employee.salary}`);

    }else{
        console.log("Could not update salary...salary entered is not a number")
    }
    
};

updateEmployeeName(ademiju, "Ademijuwonlo Taiwo");
updateEmployeeRole(ademiju,"Senior Backend Engineer");
updateEmployeeSalary(ademiju,"20000");

console.log(getName(ademiju));
console.log(getRole(ademiju));
console.log(getSalary(ademiju));
