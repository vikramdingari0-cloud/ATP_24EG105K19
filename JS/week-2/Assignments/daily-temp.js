 /*Assignment 1: Daily Temperature Analyzer
# # ----------------------------------------
# # Scenario : You are analyzing daily temperatures recorded by a weather app.

# # Test data:
# # const temperatures = [32, 35, 28, 40, 38, 30, 42];

# # Tasks:
# #     1. filter() temperatures above 35
# #     2. map() to convert all temperatures from Celsius → Fahrenheit
# #     3. reduce() to calculate average temperature
# #     4. find() first temperature above 40
# #     5. findIndex() of temperature 28*/

const temp = [32, 35, 28, 40, 38, 30, 42]
let r1 = temp.filter((el) => el>35)
console.log(r1)

const r2 = temp.map(c => (c * 9/5) + 32);

console.log(r2);

const avg = temp.reduce((sum, value) => sum + value, 0) / temp.length
console.log(avg)

const firstAbove40 = temp.find(t => t > 40)
console.log(firstAbove40)

const index28 = temp.findIndex(t => t === 28)
console.log(index28)