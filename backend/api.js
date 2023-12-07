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

const getAllUsers = async (req, res, next) => {
    var sql = "SELECT * FROM User";
    result = await connection.query(sql, (err, data) => {
        if(err) return res.json("Failed to SELECT");
        return res.json(data);
    });
    res.send(result);
}

router.get("/", (req, res) => {
    res.send(data);
    console.log("Welcome here!");
});
router.get("/users", getAllUsers => {});
router.post("/users", (req, res) => {
    var sql = "SELECT * FROM User"
    var count = 0;

    connection.query(sql, (err, data) => {
        if(err)
        {
            console.log("Failed to SELECT");
            return res.json("Failed to SELECT");
        }
        count = data.length;
        console.log(data.length);
        return data.length;

        const users = data;
        for(let i=0; i < users.length; i++){
          console.log(users[i].name);
        }
    }, next);

    //var sql = "INSERT INTO User(UserName, Password, Email) VALUES (" + req.username + ", " + req.password + ", " + req.email + ")";
    sql = "INSERT INTO User(ID, UserName, Password, Email) VALUES (?)";
    values = [
        count,
        req.body.username,
        req.body.password,
        req.body.email,
    ];

    console.log(values);
    connection.query(sql, [values], (err, data) => {
        if(err) {
            console.log("Failed to INSERT");
            return res.json("Failed to INSERT");
        }
        console.log("Пользователь зарегистрирован");
        return res.json("Пользователь зарегистрирован");
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