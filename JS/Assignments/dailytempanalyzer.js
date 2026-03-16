// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

//Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
let above35 = temperatures.filter(cel => cel > 35)
console.log(above35)
//     2. map() to convert all temperatures from Celsius → Fahrenheit
let convert = temperatures.map(cel =>  (cel * 9/5) + 32)
console.log(convert)
//     3. reduce() to calculate average temperature
let avg = temperatures.reduce((sum,cel) => sum+cel ,0) / temperatures.length
console.log(avg)
//     4. find() first temperature above 40
let find = temperatures.find(cel => cel == 40 )
console.log(find)
//     5. findIndex() of temperature 28
let findIndex = temperatures.findIndex(cel => cel == 28 )
console.log(findIndex)
