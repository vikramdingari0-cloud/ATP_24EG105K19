//Create mini-express app(Separate Route)
import exp from 'express'
export const userApp = exp.Router()

let users = []
//Create User API(REpresentational State Transfer API) ==>> enable interaction => request handling mechanism
//structure of Route => app.METHOD(path,request handler)
    //Route to handle GET req of Client // /url-path -> need to be noun (in REST API)
   userApp.get('/users', (req, res) => {
    res.json(users)
})
    //Route to handle POST req of Client
    userApp.post('/users',(req,res)=>{
        //get user from client
        const newUser = req.body
        //push user into users
        users.push(newUser)
        //send res
        res.json({message:"user created"})

    })
    //Route to handle PUT req of Client
    userApp.put('/users/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const userIndex = users.findIndex(u => u.id === id)

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" })
    }

    users[userIndex] = { ...users[userIndex], ...req.body }

    res.json(users[userIndex])
})
    //Route to handle DELETE req of Client
    userApp.delete('/users/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const userIndex = users.findIndex(u => u.id === id)

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" })
    }

    users.splice(userIndex, 1)

    res.json({ message: "User deleted" })
})

// import exp from 'express'
// export const userApp = exp.Router()

// let users = []

// // Read all users
// userApp.get('/users', (req, res) => {
//     res.json(users)
// })

// // Read user by ID
// userApp.get('/users/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const user = users.find(u => u.id === id)

//     if (!user) {
//         return res.status(404).json({ message: "User not found" })
//     }

//     res.json(user)
// })

// // Create new user
// userApp.post('/users', (req, res) => {
//     const newUser = req.body

//     if (!newUser.id || !newUser.name) {
//         return res.status(400).json({ message: "Invalid user data" })
//     }

//     users.push(newUser)
//     res.status(201).json({ message: "User created", user: newUser })
// })

// // Update user
// userApp.put('/users/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const index = users.findIndex(u => u.id === id)

//     if (index === -1) {
//         return res.status(404).json({ message: "User not found" })
//     }

//     users[index] = { ...users[index], ...req.body }
//     res.json(users[index])
// })

// // Delete user
// userApp.delete('/users/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const index = users.findIndex(u => u.id === id)

//     if (index === -1) {
//         return res.status(404).json({ message: "User not found" })
//     }

//     users.splice(index, 1)
//     res.json({ message: "User deleted" })
// })