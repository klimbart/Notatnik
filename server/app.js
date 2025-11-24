const express = require('express');
const mysql = require("mysql")
const app = express();
const cors = require("cors")
app.use(cors());
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "notes"
    }
);

connection.connect((err) =>{
    if (err) throw err;
    console.log("polaczono");
});

app.get("/", (req, res) => {
    res.send("testtt")
});
app.get('/sub/:val', (req, res) => {
    const urlVal = parseInt(req.params.val);
    res.status(200).send(urlVal);
})
app.post('/notes', (req, res) => {
    const {title, content, colour, data} = req.body;
    res.status(201).json({tytul: title, tresc: content, kolor: colour, data: data})
})

app.get('/table', (req,res) => {
    const sql = "SELECT * FROM notatki";
    connection.query(sql, (err, results) => {
        if (err){
            res.status(500).json({error: "problem z kwerenda"});
            return;
        }
        res.json(results);
    });
});


app.listen(3001);