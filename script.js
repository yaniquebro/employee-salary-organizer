// TODO: Get user input to create and return an array of employee objects

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let employees = [];

const collectEmployees = function() {

   const newEmployee = {
//user input/employee info
  firstName: prompt("Enter employee first name."),
  lastName: prompt("Enter employee last name."),
  salary: parseFloat (prompt("Enter employee salary")),
   };
  employees.push(newEmployee);
  addAnotherEmployee();  
}  
function addAnotherEmployee() {
  const addNew = confirm('add another')

  if (addNew == true) {
    collectEmployees();
  } else {
    displayEmployees(employees);
  }

return employees
}
  
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let sum = 0
  for (i=0; i<employeesArray.length; i++) {
    sum = sum + employeesArray[i].salary;
  }

  let salaryAvg = sum/employeesArray.length

  console.log("The average employee salary is" + salaryAvg)

}

// Select a random employee

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
}