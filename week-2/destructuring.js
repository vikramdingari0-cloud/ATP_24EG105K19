//DESTRUCTURING (UNPACKING)
//array
let arr = [10,20,30]
let [a,b,c] = arr;
console.log(a,b,c)

//object
let emp = {
    eid : 10,
    ename : 'ramu',
    address : {
        city : 'hyd',
        pin : 123456,
    }
}

let {eid,ename,address:{city,pin}} = emp
console.log(eid,ename,city,pin)