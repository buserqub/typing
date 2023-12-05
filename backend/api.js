const mysql = require("mysql2");
const express = require("express");
const router = express.Router();
const Eng = require("./eng");
const Ru = require("./ru");
//const { get } = require("mongoose");

let host = "localhost";
let user = "root";
let db = "mydb";
let pass = "1234";

const connection = mysql.createConnection({
    host: host,
    user: user,
    database: db,
    password: pass
});
      
//const sql = `INSERT INTO User(UserName, Password) VALUES('buser', 1234)`;
router.get("/", (req, res) => {
    res.send(data);
    console.log("Welcome here!");
});
router.get("/users", (req, res) => {
    /*pool.query("SELECT * FROM User", function(err, data) {
        if(err) return console.log(err);
        res.send(data);
    });*/
    var sql = "SELECT * FROM User"
    connection.query(sql, (err, data) => {
        if(err) return res.json("Failed to SELECT");
        return res.json(data);
        const users = data;
        for(let i=0; i < users.length; i++){
          console.log(users[i].name);
        }
    });
});
router.post("/users", (req, res) => {
    //var sql = "INSERT INTO User(UserName, Password, Email) VALUES (" + req.username + ", " + req.password + ", " + req.email + ")";
    var sql = "INSERT INTO User(UserName, Password, Email) VALUES (?)";
    values = [
        req.body.username,
        req.body.password,
        req.body.email,
    ];
    connection.query(sql, [values], (err, data) => {
        //return console.log(req);
        if(err) return res.json("Failed to INSERT");
        return console.log("Пользователь зарегистрирован");
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