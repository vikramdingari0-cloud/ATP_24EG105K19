//REST PARAMETER ==>> when no parameter are do not know (like *args)
function find(a) {
    console.log(a)
}
find(10,20,30); //=>all the arguments are ignored prints '10'

//REST PARAMETER ==>> RECEVIES N NUMBER OF ARGUMENTS
function findSum(...a) {
    console.log(a)
}
findSum(10,20,30);

// function findSum(...a,b) { //=> rest parameter must be last parameter
//     console.log(a,b)
// }
// findSum(10,20,30);

//write a function that recevises any no of args and returns their sum
function Sum(...a) {
    return a.reduce((plus,el)=>plus+el)
}
console.log(Sum(10, 20, 30));