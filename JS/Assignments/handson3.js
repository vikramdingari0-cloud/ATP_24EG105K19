// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
               const user = {
                 id: 101,
                 name: "Ravi",
                 preferences: {
                   theme: "dark",
                   language: "en"
                 }
               };

// 🎯 Task
//     1. Create a shallow copy of user
let copyuser = {...user}
//console.log(copyuser)
//     2. Change:
//           i. name in the copied object
copyuser.name = 'ramu'
//           ii. preferences.theme in the copied object
copyuser.preferences.theme = "aqua"
//           iii .Log both original and copied objects
console.log(user)
console.log(copyuser)

//           iv. Observe what changes and what doesn’t












// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
                 const order = {
                   orderId: "ORD1001",
                   customer: {
                     name: "Anita",
                     address: {
                       city: "Hyderabad",
                       pincode: 500085
                     }
                  },
                   items: [
                     { product: "Laptop", price: 70000 }
                   ]
                 };

// 🎯 Task:
//       1. Create a deep copy of order
let deepcopy = structuredClone(order)

//       2. Modify in copied object:
//             i. customer.address.city
deepcopy.customer.address.city = "vzg";
//             ii. items[0].price
deepcopy.items[0].price = 85000
//             iii. Verify original object remains unchanged
console.log(order)
console.log(deepcopy)