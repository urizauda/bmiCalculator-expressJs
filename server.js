const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8080;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/")
})

app.post("/", (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight / (height * height);
    res.send(`Your BMI is: ${bmi}`);
})



app.listen(PORT, (() => { console.log(`server listening on port ${PORT}`); }))
