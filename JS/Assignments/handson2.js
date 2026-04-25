// 💡 Exercise 1: Copy & Extend an Array

//                         Goal: Learn array copying with spread
                        
//                         You are given:
//                               -> Create a new array moreFruits
  let fruits = ["apple", "banana"];
  let morefruits = [...fruits,"citaphal"]
  morefruits.push("jack")

  //console.log(fruits)
  //console.log(morefruits)
                        
                        
//                         Tasks
                              
//                               -> Copy all fruits from fruits
let cfruits = [...fruits]
//console.log(cfruits)
//                               -> Add "orange" at the end using spread
let addfruit = [...fruits,"orange"]
//console.log(addfruit)
//                               -> Print both arrays
console.log(fruits)
console.log(addfruit)
                        
//                         ✅ Expected Output
//                               ["apple", "banana"]
//                               ["apple", "banana", "orange"]
                        
//                         👉 Original array should NOT change.








// 💡 Exercise 2: Update User Object
                        
//                         Goal: Learn object cloning & adding new property
                        
//                         You are given:
                                
                                 let user = {
                                   name: "Ravi",
                                   city: "Hyderabad"
                                 };
                        
                        
                        
//                         Tasks
                        
//                               -> Create a new object updatedUser
let updateuser
//                               -> Copy all properties from user
    updateuser = {...user}                               
//                               -> Add a new property age: 25
let addage = {...user,age:25}                              
//                               -> Print both objects
console.log(user)
console.log(addage)                        
                        
                        
//                         ✅ Expected Output
//                               { name: "Ravi", city: "Hyderabad" }
//                               { name: "Ravi", city: "Hyderabad", age: 25 }
                        
//                         👉 Original object should remain unchanged.









