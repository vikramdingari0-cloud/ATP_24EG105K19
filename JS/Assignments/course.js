// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

import { log } from "console";

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
let length = courses.filter(course => course.length>5)
console.log(length)
//     2. map() to convert course names to uppercase
let upcs = courses.map(course => course.toUpperCase())
console.log(upcs)
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let singlestr = upcs.reduce((sstr,course) => sstr+course)
console.log(singlestr)

//     4. find() the course "react"
let find = courses.find(ele => ele === "react")
console.log(find);

//     5. findIndex() of "node"
let findIndex = courses.findIndex(ele => ele === "node")
console.log(findIndex);