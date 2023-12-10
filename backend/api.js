const mysql = require("mysql2");
const express = require("express");
const router = express.Router();
const Eng = require("./eng");
const Ru = require("./ru");
//const { get } = require("mongoose");

let host = "localhost";
let user = "root";
let db = "typingdb";
let pass = "1234";

const connection = mysql.createConnection({
    host: host,
    user: user,
    database: db,
    password: pass
});

router.get("/", (req, res) => {
    res.send(data);
    console.log("Welcome here!");
});
router.get("/users", (req, res) => {
    var sql = "SELECT COUNT(*) AS count FROM User";
    connection.query(sql, (err, data) => {
        if(err) return res.json("Failed to SELECT");
        console.log(data[0].count);
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

    console.log(values);
    connection.query(sql, [values], (err, data) => {
        if(err) {
            console.log("Failed to INSERT", err);
            return res.json(err);
        }
        console.log("Пользователь зарегистрирован");
        return res.json("Пользователь зарегистрирован");
    });
});
router.get("/", (req, res) => {
    res.send(data);
    console.log("Welcome here!");
});

/*router.get("/ru", (req, res) => {
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
});*/
module.exports = router;