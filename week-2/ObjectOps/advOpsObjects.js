// --CLASS

//what is an object => obj holds the instancse variable and instance methodes(instance of data)
//Method() => it holds the business logic to maintain the data
//an object  the dynamic data(instance data)

//OBJECT LITERALS
const test = {
    a:100,
    getData:function(){
    }
}

//create 20students objects  
//when we want to create multiple objects with same type => CLASS
class StudentDetails{
    //properties
    sno;
    name;
    #email;  //private variable => define by '#' (access modifier)
    //constructors => when obj is created then automatically constructor is invoked
    constructor(sno,name,email){
        //initialize the obj
        this.sno = sno;
        this.name = name;
        this.#email = email;
    }

    // methods
    //Instance Method
    getStudentName(){
        return this.name;
    }
    //Static Method
    static testMethod(){
        return this.test
    }
}



//creating objects
let s1 = new StudentDetails(101,'vikram','vikram1@email.com');   // => calling constructor
let s2 = new StudentDetails(102,'bobieee','bobieee1@email.com');
console.log(s1)
console.log(s2)
