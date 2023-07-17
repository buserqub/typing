const express = require("express");
const router = express.Router();
const Eng = require("./eng");
const Rus = require("./ru");

router.get("/eng", (req, res) => {
    Eng.find({})
        .then(eng => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
            res.send(eng);
        });
});
router.get("/rus", (req, res) => {
    Rus.find({})
        .then(rus => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
            res.send(rus);
        });
});

router.post("/eng", (req, res) => {
    Eng.create(req.body)
        .then(eng => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
            res.send(eng);
        });
});

router.post("/ru", (req, res) => {
    Rus.create(req.body)
        .then(rus => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
            res.send(rus);
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