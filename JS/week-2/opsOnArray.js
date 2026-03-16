/* BASIC OPERATIONS ON ARRAY
=>READ ELEMENTS |
=>INSERT ELEMENT | ==> MAKE CHANGES TO ORIGINAL ARRAY
=>UPDATE ELEMENT |
=>DELETE ELEMENTS |*/

let testarray = [10,20,30]

//DYNAMIC INSERTION END
testarray.push(40,50,60)
console.log(testarray)

//INSERTION AT BEGINNING
testarray.unshift(1)
console.log(testarray)

//INSERTION IN BETWEEN
testarray.splice(2,0,5)
console.log(testarray)

//DYNAMIC DELETION 
let removedElement = testarray.shift() //IMP TO STORE DELETED ELEMENT
console.log(testarray)
console.log(removedElement)

//DELETION AT END
testarray.pop()
console.log(testarray)

//DELETION AT END
testarray.splice(2,2)
console.log(testarray)

//DYNAMIC UPDATION
testarray.splice(2,1,12)
console.log(testarray)