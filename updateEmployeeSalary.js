// This is a function that updates the salary of an employee

let employees = [
    {id:1,
    firstName: 'Temitope',
    lastName: 'Israel',
    role: 'Full-stack Dev',
    salary: 2000000},
    {id:2,	
        firstName: 'Sasha',
        lastName: 'Israel',
        role: 'Front-end Dev',
        salary: 40000},
    {id:3,
        firstName: 'Abiola',
        lastName: 'Famzy', 
        role: 'Front-end Dev',
        salary: 20000},
    {id:4,
        firstName: 'Michelle',
        lastName: 'Israel',
        role: 'Back-end Dev',
        salary: 10000},
]

// Increase the salary of all employees based on their job roles...
const updateSalary = (role) => {
    for (let i = 0; i < employees.length; i++){
        // If role is 'Full-stack Dev', Let us increase the salary by 50, 000
        if (employees[i].role === role){
            employees[i].salary += 50000
            console.log(`Dear, ${employees[i].firstName}, Your new salary is: ${employees[i].salary}`)
            break;
        }
        // If role is 'Back-end Dev', Let us increase the salary by 20, 000
        if (employees[i].role === role){
            employees[i].salary += 20000
            console.log(`Dear, ${employees[i].firstName}, Your new salary is: ${employees[i].salary}`);
            break;
    }

    // If role is 'Front-end Dev', Let us increase the salary by 15, 000
        if (employees[i].role === role){
            employees[i].salary += 15000
            console.log(`Dear, ${employees[i].firstName}, Your new salary is: ${employees[i].salary}`)
            break;
    }
}
}

// Call Function by Job Roles
updateSalary('Full-stack Dev')
updateSalary('Back-end Dev')
updateSalary('Front-end Dev')

updateSalary('DevOps')


// 2. Here we could increase the salary of all employees by 10000
const updateSalaryAll = () => {
    for (let i = 0; i < employees.length; i++){        
            employees[i].salary += 10000
            console.log(`Dear, ${employees[i].firstName}, Your new salary is: ${employees[i].salary}`)            
}
}

// Call Function to update the salary of all employees
updateSalaryAll()