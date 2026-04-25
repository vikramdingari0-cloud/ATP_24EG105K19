//promise
//call in 5 mins
  //pending
      //fulfilled or rejected

//promise producer(creates promise)
console.log("friend is waiting for a call")
let futureCondition = true
const promiseObj = new Promise((fulfilled,rejected) => {
    setTimeout(() => {

    
    if (futureCondition === true){
    fulfilled("promise fulfilled")
    }else{
    rejected("promise rejected")
    }
},5000)
})


promiseObj
.then(() =>console.log("message in then :",message))
.catch((errorMessage) => console.log("error is:",errorMessage))

console.log("hello")