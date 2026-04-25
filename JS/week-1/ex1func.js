//write a function that receives 3 number args and return the big number
function getLargest(a, b, c) {
    if(a>b && a>c){
    console.log("a is big");
}
else if(b>a && b>c){
    console.log("b is big");
}
else{
    console.log("c is big");
}
    
 // return Math.max(a, b, c);
}

let big = getLargest(10,20,30)
console.log(big); 