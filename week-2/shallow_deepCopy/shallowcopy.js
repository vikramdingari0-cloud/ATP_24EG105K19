/*Hands-On 1: Shallow Copy*/
//Test Data
 const user = {
        id: 101,
        name: "Ravi",
        preferences: {
         theme: "dark",
         language: "en"
    }
}
//Creating a shallow copy of user
let copyUser={...user}
//Changing name
copyUser.name="ABC"
//Changing preferences.theme
copyUser.preferences.theme="light"
//Logging both objects
console.log("Original object: ",user)
console.log("Copied object: ",copyUser)
//Output reveals that both original and copied object are the same