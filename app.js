const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3999;

app.use(express.static(__dirname + "/public"))
hbs.registerPartials(__dirname + "/views/partials")

app.get("/",(req, res, next) => {
    res.render('home.hbs', {
        css: ["home.css"]
    })
    
})
app.get("/about",(req, res, next) => {
    res.render('about.hbs',{
        css: ["about.css"]
    })
})
app.get("/works",(req, res, next) => {
    res.render('works.hbs',{
        css: ["works.css"]
    })
})


app.listen(port, () => {
    console.log("Listening on port : " + port)
});