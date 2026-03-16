// -------------
// Employee Payroll Processor

import { log } from "console";

// You are building a salary processing module in a company HR app.

// Test data:
 const employees = [
   { id: 201, name: "Amit", salary: 45000, department: "IT" },
   { id: 202, name: "Neha", salary: 60000, department: "HR" },
   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
 ];

// Tasks:
//     1. filter() employees from IT department
let ITemp = employees.filter(emp => emp.department=="IT")
console.log(ITemp);

//     2. map() to add:
//             netSalary = salary + 10% bonus
let bonus = employees.map(bonus => bonus.salary + (bonus.salary/10))
console.log(bonus);


//     3. reduce() to calculate total salary payout
let totalsalary = employees.reduce((total,emp)=>total+emp.salary,0)
console.log(totalsalary);

//     4. find() employee with salary 30000
let find = employees.find(sal => sal.salary == 30000)
console.log(find);
//     5. findIndex() of employee "Neha"
let findindex = employees.findIndex(emp => emp.name == "Neha")
console.log(findindex);