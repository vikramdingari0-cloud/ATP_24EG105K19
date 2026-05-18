/*Hands-On 2: Deep Copy*/
//Test Data
 const order = {
        orderId: "ORD1001",
        customer: {
            name: "Anita",
            address: {
                city: "Hyderabad",
                pincode: 500085
            }
        },
        items: [
            { product: "Laptop", price: 70000 }
        ]
}
//Creating a deep copy
let copyOrder=structuredClone(order)
//Modifying city
copyOrder.customer.address.city="Bangalore"
//Modifying price
copyOrder.items[0].price=520000
console.log("Original object: ",order)
console.log("Copied object: ",copyOrder)
//Price in original object differs from price in copied object