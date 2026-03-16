//Examples of Promises

import { log } from "node:console"

   //Make an API request
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(postsData=>console.log(postsData))
   .catch(err => console.log("err is:",err))
   //Hash a password
   //Creating tokens
   //Databases  / HTTP Libraries
   //File & Stream APIs


//WHAT IS AN API => Application programing interface  => 

    //tech neutral data format ==>> XML,JSON(js object notation)

// JAVASCRIPT OBJECT NOTATION 
let obj = {
    uname : 'ramu',
    email : 'ramu1@gmail.com',
}

//json
let obj1 = {
    "uname" : "ramu",
    "email" : "ramu1@gmail.com",
}

//async & await  ==> modern syntax
async function getData(params) {
    try {
        let res = await fetch("https://jsonplaceholder.typicode")
        let data = await res.json()
        console.log(data);
    }catch(err){
        console.log(err);
        
    }
}

getData();