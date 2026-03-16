// You are building a shopping cart summary for an e-commerce website.

import { log } from "console";

// Test Data : 
 const cart = [
   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
 ];

// Tasks:
//     1. Use filter() to get only inStock products
let instock = cart.filter(prod => prod.inStock==true)
console.log(instock);

//     2. Use map() to create a new array with:  { name, totalPrice }
let newArray = cart.map(prod => ({
   name: prod.name,
   totalprice: prod.quantity*prod.price
  }))
console.log(newArray);
 
//     3. Use reduce() to calculate grand total cart value
let gtotal = cart.reduce((total,prod)=>total+(prod.price * prod.quantity),0)
console.log(gtotal);

//     4. Use find() to get details of "Mouse"
let find = cart.find(prod => prod.name=="Mouse")
console.log(find);

//     5. Use findIndex() to find the position of "Keyboard"
let findindex = cart.findIndex(prod => prod.name=="Keyboard")
console.log(findindex);
