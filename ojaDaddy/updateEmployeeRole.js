const createEmployee = (name, role, salary) => {
	return { name, role, salary }
}

let micheal = createEmployee("micheal", "frontend dev", 2000)

const getSalary = (employee) => {
	return `The salary of ${employee.name} is ${employee.salary} per day`
}

console.log(getSalary(micheal))

// My function to Update Employee role

const updateRoleStatus = (employee, newRole) => {
    return employee.role = newRole, 
    `Congratulations ${employee.name}, kindly confirm your new position as a ${newRole}`;
};

console.log(updateRoleStatus(micheal, "Backend developer"));