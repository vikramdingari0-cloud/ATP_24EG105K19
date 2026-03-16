/* ADVANCED OPERATIONS ON ARRAY
CALL BACK FUNCTION => passed as an argument to another function 
WHO CALL A CALL BACK FUNCTION => BY THE FUNCTION THAT RECEIVES IT AS AN ARGUMENT

*/

let testdata = [90,45,-12,65,73]

//filter => SELECTION
//get elements >50
let result=[]
for(let element of testdata){
    if(element>30){
        result.push(element)
    }

}
console.log(result)
/*testdata.filter(function(element){
    return element>30
})*/
let r1 = testdata.filter((element) => element>30);
console.log(r1)
// get elements between 40 & 80
let r2 = testdata.filter((element) => element > 40 && element < 80);
console.log(r2)

//MAP() => MODIFY THE DATA
//ADD 10 FOR EACH ELEMENT
let r3 = testdata.map(element => element + 10)
console.log(r3)
let r4 = testdata.map(element => element > 30) //returns in boolean
console.log(r4)

//ADD 10 FOR ELEMENTS < 50 AND SUBSTRACT 20 FROM ELEMENTS > 50
let r5 = testdata.map((element )=> {
    if(element<50){
        return element + 10
    }
    else if(element>50){
        return element - 20
    }
    })
    console.log(r5)


//REDUCE => to a single value
  //find sum of testarray
  const sum = testdata.reduce((accumulator,element) => accumulator+element)
  //                                90       45             135
  //                                135     -12             123
  //                                123      65             188
  //                                188      73             261
  //                                261
  //accumulator => stores the result of previous opreation
console.log(sum)

//find small element
let min = testdata.reduce((acc,element) => acc < element ? acc : element)
console.log(min)

const small = testdata.reduce(function(accumulator,element) {
    if(accumulator < element) {
        return accumulator;
    } else {
        return element;
    }
});
console.log(small)

//find big element
let max = testdata.reduce((acc,element) => acc > element ? acc : element)
console.log(max)


const big = testdata.reduce(function(accumulator,element) {
    if(accumulator > element) {
        return accumulator;
    } else {
        return element;
    }
});
console.log(big)

//FIND =>
    //search -12
let el = testdata.find(element => element==-12)
console.log(el)

//FIND =>
    //search 90
let el1 = testdata.findIndex(element => element==90)
console.log(el1)

//SORT 
let data = [9,6,18,4]  //lexical comparision => treats as string 
let newArray=data.sort((a,b) => a-b)
console.log("New Array (ASCENDING) => ",newArray)

let newArray1=data.sort((a,b) => b-a)
console.log("New Array (DESCENDING) => ",newArray1)

//toSorted
let data1 = [9,16,18,4]  
let newArray2=data1.toSorted((a,b) => a-b)
console.log("New Array (toSorted) => ",newArray2)