//create product api with below operations
// create new product({productId,name,brand,price})
//read all products
//read products by brand name
//update a product
//delete a product

//Create mini-exp app(Separate Route)
import exp from 'express'
export const productApp = exp.Router()
let product = []

//GET
productApp.get('/product', (req, res) => {
    res.json(product)
})

productApp.get('/product/:brand', (req, res) => {
    res.json(product)
})

//POST
productApp.post('/product',(req,res)=>{
        //get user from client
        const newProduct = req.body
        //push user into users
        product.push(newProduct)
        //send res
        res.json({message:"Product created"})

    })

//PUT
productApp.put('/product/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const index = product.findIndex(p => p.productId === id)

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" })
    }

    product[index] = { ...product[index], ...req.body }

    res.json(product[index])
})

//DELETE
 productApp.delete('/product/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const productsIndex = product.findIndex(p => p.productId === id)

    if (productsIndex === -1) {
        return res.status(404).json({ message: "Product not found" })
    }

    product.splice(productsIndex, 1)

    res.json({ message: "Product deleted" })
})

// import exp from 'express'
// export const productApp = exp.Router()

// let products = []

// // Read all products
// productApp.get('/products', (req, res) => {
//     res.json(products)
// })

// // Read product by ID
// productApp.get('/products/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const product = products.find(p => p.productId === id)

//     if (!product) {
//         return res.status(404).json({ message: "Product not found" })
//     }

//     res.json(product)
// })

// // Read products by brand
// productApp.get('/products/brand/:brand', (req, res) => {
//     const brand = req.params.brand
//     const filtered = products.filter(p => p.brand === brand)

//     res.json(filtered)
// })

// // Create product
// productApp.post('/products', (req, res) => {
//     const newProduct = req.body

//     if (!newProduct.productId || !newProduct.name) {
//         return res.status(400).json({ message: "Invalid product data" })
//     }

//     products.push(newProduct)
//     res.status(201).json({ message: "Product created", product: newProduct })
// })

// // Update product
// productApp.put('/products/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const index = products.findIndex(p => p.productId === id)

//     if (index === -1) {
//         return res.status(404).json({ message: "Product not found" })
//     }

//     products[index] = { ...products[index], ...req.body }
//     res.json(products[index])
// })

// // Delete product
// productApp.delete('/products/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const index = products.findIndex(p => p.productId === id)

//     if (index === -1) {
//         return res.status(404).json({ message: "Product not found" })
//     }

//     products.splice(index, 1)
//     res.json({ message: "Product deleted" })
// })