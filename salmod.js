// List of employees with their current salaries
const employees = [
  { id: 1, name: "Alice", department: "sales", salary: 40000 },
  { id: 2, name: "Bob", department: "engineering", salary: 50000 },
  { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
  { id: 4, name: "David", department: "sales", salary: 35000 },
  { id: 5, name: "Emily", department: "engineering", salary: 55000 },
];

// Function to increase salaries based on the department
function increaseSalaries(employees) {
  let newSal = [];
  newSal = employees.map((element, index) => {
    let salupd;
    if (element.department === "sales") {
      salupd = element.salary + element.salary * 0.1;
    } else if (element.department === "engineering") {
      salupd = element.salary + element.salary * 0.15;
    } else {
      salupd = element.salary + element.salary * 0.05;
    }
    obj = {
      id: element.id,
      name: element.name,
      department: element.department,
      salary: salupd.toFixed(1),
    };
    return obj;
  });

  return newSal;
  // Use the map function to iterate over each employee in the array
  // Use a switch statement to determine the salary increase based on department
  // Remember to use toFixed(1) to round the salary to one decimal place.
  // Return a new employee object with the updated salary
  // Return the new array of employees with updated salaries
}

// You can call the function and log the result to check if the implementation is correct
console.log(increaseSalaries(employees));
