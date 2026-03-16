// Student Performance Dashboard

import { log } from "console";

// You are working on a college result analysis system.

// Test Data:
 const students = [
   { id: 1, name: "Ravi", marks: 78 },
   { id: 2, name: "Anjali", marks: 92 },
   { id: 3, name: "Kiran", marks: 35 },
   { id: 4, name: "Sneha", marks: 88 },
   { id: 5, name: "Arjun", marks: 40 }
 ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
let pass = students.filter(std=>std.marks>=40)
console.log(pass);

//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
let grade = students.map(grade=>(grade.marks>=90)?'A':(grade.marks>=75)?'B':(grade.marks>=60)?'C':'D')
console.log(grade);

//    3. reduce() to calculate average marks
let avg = students.reduce((avg,mark) => avg+mark.marks,0)/students.length
console.log(avg);

//    4. find() the student who scored 92
let find = students.find(mark=>mark.marks==92)
console.log(find);

//    5. findIndex() of student "Kiran"
let findIndex = students.findIndex(mark=>mark.name=="Kiran")
console.log(findIndex);
