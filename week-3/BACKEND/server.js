//Create HTTP server
import exp from 'express'
import { userApp } from './APIs/userAPI.js'
import { productApp } from './APIs/productAPI.js'

const app = exp() //creates express application and returns
//express application internally contains the HTTP server

//use body parser middleware
app.use(exp.json())

//create custom middleware
function middleware1(req, res, next) {
    //send res from middleware
    res.json({'message': 'this res1 is from middleware1'})
    //forward req to next
    console.log("middleware1 executed")
    next()
}

//use middleware
app.use(middleware1)

//forward req to userAPI if path starts with /user-api
app.use('/user-api',userApp)

//forward req to productAPI if path starts with /product-api

app.use('/product-api',productApp)

//need to set a port number
const port = 3000
app.listen(port,()=> console.log(`server listening port ${port} ...`)) //listen() method used to assign port number
//test data (in future replace this test data with DB)

// // Create HTTP server
// import exp from 'express'
// import { userApp } from './APIs/userAPI.js'
// import { productApp } from './APIs/productAPI.js'

// const app = exp()

// // Built-in middleware (body parser)
// app.use(exp.json())

// // Custom middleware
// function middleware1(req, res, next) {
//     console.log(`${req.method} ${req.url}`)
//     next()   // VERY IMPORTANT
// }

// // Use middleware
// app.use(middleware1)

// // Mount routers
// app.use('/user-api', userApp)
// app.use('/product-api', productApp)

// // Global error handler (good practice)
// app.use((err, req, res, next) => {
//     console.error(err)
//     res.status(500).json({ message: "Internal Server Error" })
// })

// // Start server
// const port = 3000
// app.listen(port, () => console.log(`Server listening on port ${port}...`))
