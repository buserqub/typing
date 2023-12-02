const express = require("express");
const router = express.Router();
const Eng = require("./eng");
const Ru = require("./ru");

let host = "localhost";
let user = "user";
let db = "mydb";
let pass = "2378783";

function open () {
    const connection = mysql.createConnection({
        host: host,
        user: user,
        database: db,
        password: pass
      });
      
      connection.query("SELECT * FROM User",
        function(err, results, fields) {
          console.log(err);
          console.log(results); // собственно данные
          console.log(fields); // мета-данные полей 
      });
      
      connection.end();
}

router.get("/ru/add", (req, res) => {
    Eng.find({})
        .then(eng => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.send(eng);
        });
});
router.get("/ru", (req, res) => {
    Ru.find({})
        .then(ru => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.send(ru);
        });
});

router.post("/eng", (req, res) => {
    Eng.create(req.body)
        .then(eng => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.setHeader("Content-Type", "application/json");
            res.send(eng);
        });
});
router.post("/ru", (req, res) => {
    Ru.create(req.body)
        .then(ru => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.send(ru);
        });
});

router.put("/eng/:id", (req, res) => {
    res.send({method: "PUT"});
});
router.put("/ru/:id", (req, res) => {
    res.send({method: "PUT"});
});

router.delete("/eng/:id", (req, res) => {
    res.send({method: "DELETE"});
});
router.delete("/ru/:id", (req, res) => {
    res.send({method: "DELETE"});
});
module.exports = router;