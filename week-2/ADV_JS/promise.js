//i'll send 10000 rs on tomorrow
//promise
//10,000rs on tomorrow
  //pending
      //fulfilled or rejected

//promise producer(creates promise)
console.log("opp is waiting for a money")
let futureCondition = true
const promiseObj = new Promise((fulfilled,rejected) => {
    setTimeout(() => {
    if (futureCondition === true){
    fulfilled("promise fulfilled , 10,000 rs received")
    }else{
    rejected("promise rejected , not received")
    }
},5000)
})
//promise consumer
promiseObj
.then((message) =>console.log("message in then :",message))
.catch((errorMessage) => console.log("error is:",errorMessage))

console.log("hello")