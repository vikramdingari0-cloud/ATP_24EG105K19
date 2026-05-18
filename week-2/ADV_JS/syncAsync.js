//SYNCHRONOUS ==>> line by line execution 
console.log("1")
console.log("2")
for(let i = 0;i<1000000000;i++){}
console.log("3")

//ASYNCHRONOUS
console.log("asynchronous")
console.log("1")
setTimeout(() => {
    console.log("task completed")
},5000) //after 5 seconds it`ll print next statement
console.log("2")
console.log("3")