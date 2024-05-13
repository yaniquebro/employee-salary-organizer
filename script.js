// TODO: Get user input to create and return an array of employee objects

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

addEmployeesBtn.addEventListener('click', trackEmployeeData);
// Collect employee data
const collectEmployees = function() {
//  const addEmployeesBtn = [];git 
const employees = [];
  
while (true) {
//user input/employee info
  let firstName = prompt("Enter first name.");
  let lastName = prompt("Enter last name.");
  let salaryInput = prompt("Enter Salary");

  let salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);

// creates the object
employees.push({
    firstName: firstName,
    lastName: lastName,
    salary: salary
});   

//to add another employee
let addAnother = confirm("Add new employee");
if (!addAnother) {
    break; 
}
}

return employees;

}
  
// Display the average salary
function displayAverageSalary(employees) {
    let totalSalary = 0;
    for (let employee of employees) {
        totalSalary += employee.salary;
    }

    const averageSalary = totalSalary / employees.length;

    console.log(`Average Salary: $${averageSalary.toFixed(2)} | Number of Employees: ${employees.length}`);

}


// Select a random employee
function getRandomEmployee(employees) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employees.length);

  const randomEmployee = employees[randomIndex];

  const fullName = `${randomEmployee.firstName} ${randomEmployee.lastName}`;

  console.log(`Random Employee: ${fullName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
