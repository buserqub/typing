const mysql = require("mysql2");
const express = require("express");
const router = express.Router();
const Eng = require("./eng");
const Ru = require("./ru");

const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');

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

/*var sql = "DROP TRIGGER before_insert_user";
connection.query(sql, (err, data) => {
    if (err) return console.log("Failed to DROP TRIGGER before_insert_user")
    return console.log("Success to DROP TRIGGER before_insert_user");
})

sql = "DELIMITER $$\nCREATE TRIGGER before_insert_user\nBEFORE INSERT ON User\nFOR EACH ROW\nBEGIN\nDECLARE user_with_this_username_count INT;\nDECLARE user_with_this_email_count INT;\nSELECT COUNT(*) INTO user_with_this_username_count FROM User WHERE username = NEW.username;\nSELECT COUNT(*) INTO user_with_this_email_count FROM User WHERE email = NEW.email;\n\nIF (user_with_this_username_count > 0) THEN\nSIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Пользователь с таким именем уже существует в базе данных.';\nELSE\nIF (user_with_this_email_count > 0) THEN\nSIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Пользователь с такой электронной почтой уже существует в базе данных.';\nELSE\nSET NEW.registrationdate = NOW();\nEND IF;\nEND IF;\nEND;\nDELIMITER;";
connection.query(sql, (err, data) => {
    if (err) return console.log("Failed to CREATE TRIGGER before_insert_user")
    return console.log("Success to CREATE TRIGGER before_insert_user");
})

sql = "DROP TRIGGER after_insert_user";
connection.query(sql, (err, data) => {
    if (err) return console.log("Failed to DROP TRIGGER after_insert_user")
    return console.log("Success to DROP TRIGGER after_insert_user");
})

sql = "DELIMITER $$\nCREATE TRIGGER after_insert_user\nAFTER INSERT ON User\nFOR EACH ROW\nBEGIN\nINSERT INTO statistic (AverageTextSpeed, AverageMistakesRate, `Language`, User_ID, WrittenTextsCount, WrittenSymbolsCount)\nVALUES (0, 0, \"Rus\", NEW.ID, 0, 0);\nINSERT INTO statistic (AverageTextSpeed, AverageMistakesRate, `Language`, User_ID, WrittenTextsCount, WrittenSymbolsCount)\nVALUES (0, 0, \"Eng\", NEW.ID, 0, 0);\nEND;"
connection.query(sql, (err, data) => {
    if (err) return console.log("Failed to CREATE TRIGGER after_insert_user")
    return console.log("Success to CREATE TRIGGER after_insert_user");
})*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

router.get("/", (req, res) => {
    res.send(data);
    console.log("Welcome here!");
});


router.get("/text/rus", (req, res) => {
    sql = "SELECT * FROM Text WHERE Language = ?";
    connection.query(sql, ['Rus'], (err, data) => {
        if (err) {
            console.log("Failed to SELECT", err);
            return res.json(err);
        }
        console.log(data);
        if (data[0])
            return res.json(data[getRandomInt(data.length)].Text);
        res.message = 'There is no data found';
        return res.json();
    });
});

router.get("/text/eng", (req, res) => {
    sql = "SELECT * FROM Text WHERE Language = ?";
    connection.query(sql, ['Eng'], (err, data) => {
        if (err) {
            console.log("Failed to SELECT", err);
            return res.json(err);
        }
        console.log(data);
        if (data[0])
            return res.json(data[getRandomInt(data.length)].Text);
        res.message = 'There is no data found';
        return res.json();
    });
});

router.post("/text/rus", (req, res) => {
    sql = "INSERT INTO Text (Language, Text, User_ID) VALUES ('Rus', ?, 1)";
    connection.query(sql, [req.body.text], (err, data) => {
        if (err) {
            console.log("Failed to INSERT", err);
            return res.json({
                sqlState: err.sqlState,
                sqlMessage: err.sqlMessage
            }); 
        }
        return res.json({
            message: 'Success'
        });
    });
});

router.get("/users", (req, res) => {
    sql = "SELECT COUNT(*) AS count FROM User";
    connection.query(sql, (err, data) => {
        if (err) return res.json("Failed to SELECT");
        console.log(data[0].count);
        return res.json(data);

        const users = data;
        for(let i=0; i < users.length; i++){
          console.log(users[i].name);
        }
    });
});

router.post("/users", (req, res) => {
    sql = "INSERT INTO User(UserName, Password, Email) VALUES (?)";
    values = [
        req.body.username,
        req.body.password,
        req.body.email,
    ];

    //console.log(values);
    connection.query(sql, [values], (err, data) => {
        if(err) {
            console.log("Failed to INSERT", err);
            if (err.sqlMessage)
                return res.json(err.sqlMessage);
        }
        console.log("Пользователь зарегистрирован");
        return res.json("Пользователь зарегистрирован");
    });
});

router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.username;

    sql = "SELECT * FROM User WHERE username = ? AND password = ?"
    connection.query(sql, [username, password], (err, data) => {
        if (err) {
            console.log("Failed to SELECT", err);
            if (err.sqlMessage)
                return res.json(err.sqlMessage);
        }
        console.log("Авторизация прошла успешно", data);
        return res.json(data);
    })
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