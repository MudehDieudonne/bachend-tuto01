const express = require('express')
const app = express()
const PORT = 8282

let data = ['James']

//middleware
app.use(express.json())

//HTTP VERBS(methods) && ROUTES
//The methods inform the nature of the requet
// and the routs are like sub-directories that redirect 
// the request a body of code that provides an 
// appropriate answer. 
// these locations or routes are known as endpoints


//websit enpoint for responds when user enter url
app.get('/', (req, res) => {
    //End point 1
    res.send(`
        <body style="background:pink; color:blue">
            <h1>Data:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
            <h1>Dashboard</h1>
            <a href="/">Home</a>
        </body>
        `)
    
})

//API enpoint non visual respond 

//CRUD => Create - Post, Read - Get, Update - PUT and Delete - delete


app.get('/api/data', (req, res) => {
    console.log('this is for data')
    res.send(data)
})

//Reade
app.post('/api/data', (req, res) => {
    // creating a new user (entry)
    const newEntry = req.body
    console.log('new user/entry', newEntry)
    data.push(newEntry.name)
    res.send(201)
})

//Delete
app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('We jus removed the lat name foun in the array')
})


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))