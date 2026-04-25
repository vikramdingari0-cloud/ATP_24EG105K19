//write a function that recevies an array as arg and return their sum
function sumArray(arr) {
    let a=[10,20,30];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([5, 10, 15]));   // Output: 30   