// TODO: Get user input to create and return an array of employee objects

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let employees = [];

const collectEmployees = function() {
   let confirm = true
while(toconfirm) {
//user input/employee info
  let firstName = prompt("Enter employee first name.");
  let lastName = prompt("Enter employee last name.");
  let salaryInput = prompt("Enter employee salary");

  if(!isNaN(parseInt(salaryInput))){
  let newEmployee = {firstName, lastName, salaryInput: parseInt(salaryInput)}
  employees.push(newEmployee);
  console.log(employees);
  toconfirm = confirm("Add next employee")
  console.log(toconfirm);}   
}  

return employees
}
  
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  console.log("getting average")
    


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
