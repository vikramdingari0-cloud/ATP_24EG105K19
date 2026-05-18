//spread operator (Create copies of arrays & objects)
//spread operator => copies only top level properties (in case of nested objects) ==>> SHALLOW COPY
  //create copy
  let originalObj = {a : 10,b : 20}
  let copyObj = { ...originalObj}
     //change originalObj
     originalObj.a = 123
     console.log(originalObj) 
     console.log(copyObj)

     let o = {a : 10}
     let copyo = {...o,b:20}
     console.log(o)
     console.log(copyo)

     let arr = [1,2,3]
     let carr = [...arr,10,12]
        console.log(arr)
        console.log(carr)



     //DEEP COPY
     let person={
        pname : 'ramu',
        address : {
            city : "hyd",
            pincode : 123456,
        }
     }

//deep copy ==>> STRUCTURED CLONE ==>> USED WHEN NESTED OBJECT 

     let copyPerson = structuredClone(person)
     //change name and city in person
     person.pname = "raju"
     person.address.city = "rjmy"
     console.log(copyPerson)
     console.log(person)
