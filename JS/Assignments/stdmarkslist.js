// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

import { log } from "console";

// Test data:
 const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
let marks_gt40 = marks.filter(mark => mark >= 40)
console.log(marks_gt40);

//     2. map() to add 5 grace marks to each student
let add5 = marks.map(ele => ele+5)
console.log(add5);

//     3. reduce() to find highest mark
let maxmarks = marks.reduce((max,mark)=>(mark>max)?max=mark:max=max)
console.log(maxmarks);

//     4. find() first mark below 40
let find = marks.find(mark => mark===40)
console.log(find);

//     5. findIndex() of mark 92
let findindex = marks.findIndex(mark => mark==92)
console.log(findindex);
