//Student is a person
class Person{}
class Student extends Person{}

////Car has a engine (composition) => reuseability
class Engine{
    constructor(hp) {
        this.hp = hp;
    }
}

class Car extends Engine{
    
}

//Object literal
let emp1 = {
    eno : 100,
    name : "ravi",
    address : {
        city : 'hyd',
        pincode : 566666,
    }
} 

let emp2 = {
    eno : 101,
    name : "ramu",
    address : {
        city : 'hyd',
        pincode : 566666,
    }
} 