const path = require("path")
const express = require("express")
const hbs = require("hbs")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

const app = express()
const PublicDirPath = path.join(__dirname, "../public")
const viewDirPath = path.join(__dirname, "../templates/views")
const partDirPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs")
app.set("views", viewDirPath)
hbs.registerPartials(partDirPath)

app.use(express.static(PublicDirPath))

app.get('', (req, res) => {
    res.render("index", {
        title: "Welcome back...",
        name: "Ganesh"
    })
})


app.get('/about', (req, res) => {
    res.render("about", {
        title: "Welcome to about us...",
        name: "Ganesh"
    })
})

app.get('/help', (req, res) => {
    res.render("help", {
        title: "Welcome to HELP us...",
        name: "Ganesh"
    })
})
// app.get('', (req, res) => { 
//     res.send("Welcome to home page")
// })

// app.get('/help', (req, res) => { 
//     res.send("Welcome to HELP page")
// })

// app.get('/about', (req, res) => { 
//     res.send("<h1>Welcome to ABOUT page</h1><br> <i>We will meet soon</i>")
// })

app.get('/weather', (req, res) => { 
    if(!req.query.address){
        return res.send({
            error: 'Please provide correct address'
        })
    }
    
    geocode(req.query.address, (error, data) => {
         if(error){
            return res.send({
                error: error
            })
        }
            
   forecast(req.query.address, (ferror, forcastdata) => {
        if(ferror){
            return res.send({
                error: ferror
            })
        }
        res.send({
            DataLocation: data.location,
            DataForcast: forcastdata});
   })
   })
   
    // res.send({
    //     address: req.query.address
    // })
    
})

app.get('*', (req, res) => {
    res.render("404", {
        title: "Welcome to HELP us...",
        name: "Ganesh"
    })
})

app.listen(3000, () => {
    console.log("Server up and running on port 3000")
})