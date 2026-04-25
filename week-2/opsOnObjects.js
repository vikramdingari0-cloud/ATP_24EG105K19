/* BASIC OPERATIONS ON OBJECT  => unordered collection of properties
  =>READ PROPERTIES
  =>ITERATE OBJECT
  =>ADD A NEW PPT
  =>UPDATE A PPT
  =>DELETE A PPT */

let person = {    //PERSON => OBJECT REFERENCE => STORED IN STACK
    names : "vikram",
    age : 19,
}
// ADDING NEW PROPERTY => DYNAMICALLY => DURING EXECUTION
person.city = 'ktl'
console.log(person)

//UPDATE PPT
person.names = 'bobieee'
console.log(person)

//DELETE A PPT
delete person.age
console.log(person)

