/* FUNCTIONS ARE FIRST CLASS OBJECTS IN JS BECAUSE
   Functions can:
   - Store in a variable
   - Return another function
   - Receive a function as argument
*/

let test = function() {
    return function() {
        return 100;
    }
}

let result = test();
console.log(result()); // 100



// Closure Example
let createGame = function(nameOfPlayer) {
    return function(level) {
        console.log(`Hello ${nameOfPlayer}, you are at level ${level}`);
    }
}

let createLevel = createGame('Mango');
createLevel(1);
createLevel(2);
createLevel(3);



// Function as Argument
let test1 = function(a) {
    console.log("Executing argument function:");
    a();
}

test1(function() {
    console.log("hello");
});



// Scope Example
let a = 10;  // global scope

function testScope() {
    let b = 20; // function scope
    if (true) {
        let c = 30; // block scope
        console.log(c);
    }
}

testScope();



// Closure Sum Example
let sum = function(x) {
    return function(y) {
        return x + y;
    }
}

let res = sum(10);
console.log(res(20)); // 30
