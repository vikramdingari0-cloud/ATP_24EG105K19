/* COLLECTIONS {PACK OF DATA}
   ->Array  => pack of elements
   ->Object => pack of properties
   ->Array of Objects*/


   //Array => Ordered collections
   let marks = [100,98,99]  //pack of numbers => reference of array
   let names = ['vikram','raju','akthar']  //pack of strings
   console.log(marks[10]) //=> returns undefined
   console.log(marks)
   console.log(names)

   //iterate an array (for-of loop) => accessing the elements
   for(let v of marks){
    console.log(v)
   }
   for(let k of names){
    console.log(k)
   }


   //Object => every real world existing is an object => a group of properties => key-value pair  => Unordered collections
   let std = {
    sno:100,
    name:"vikram", //all key need to be strings
    age:19,
    course:"B.Tech"
   }
   //accessing
   console.log(std.course)//=>simple
   console.log(std['name'])


   //iterate an object (for-in loop) => in general returns the keys
   for(let v in std){
    console.log(v +" is :"+std[v])
   }



   //Array of objects
   let emp = [{eno:1,ename:"raj"},{eno:2,ename:"varun"},{eno:3,ename:"arjun"},{eno:4,ename:"tej"}]
   console.log(emp)
   for(let k in emp){
    console.log(`eno is ${emp[k].eno} and name is ${emp[k].ename}`)
   }


   let student = {
    rno : 1,
    fname : "dingari",
    lname : "vikram",
    marks : [99,100,99],
    course : {
        dept : "CSE",
        spec : "Gen"
    },

    getFullName : function() {
        return this.fname+this.lname
    },
    getavgmarks : function() {
        let sum = 0
        for(let m of this.marks){
            sum += m
        }
        return sum / this.marks.length
    },
   };
console.log("FullName => ",student.getFullName())
console.log("Average Marks => ",student.getavgmarks())

