const express = require('express')
const app = express()
const PORT = 8282

let data = {
    name: "james",
    age: 23,
    height: "6ft 2"
}

//HTTP VERBS(methods) && ROUTES
//The methods inform the nature of the requet
// and the routs are like sub-directories that redirect 
// the request a body of code that provides an 
// appropriate answer. 
// these locations or routes are known as endpoints


//websit enpoint for responds when user enter url
app.get('/', (req, res) => {
    //End point 1
    res.send('<h1>This is actualy how it works wow <br>so at this point the user expects a website hollala</h1>(<h3>home page</h3>)')

})

app.get('/dashboard', (req, res) => {
    res.send('<h1>Dashboard</h1>')
})

//API enpoint non visual respond 

//CRUD => Create Read Update and Delete

app.get('/api/data', (req, res) => {
    console.log('this is for data')
    res.send(data)
})


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))