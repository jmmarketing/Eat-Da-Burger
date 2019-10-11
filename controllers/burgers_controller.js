// ############# REQUIRED FILES ##################
var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();
// ##############################################

router.get("/*", function (req, res) {
    burger.all(function (data) {
        var allBurgers = {
            burgers: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.create("burger_name", req.body.name, function (result) {
        res.json(result);
    })
});

router.put("/api/burgers/:id", function (req, res) {
    burger.update(true, req.params.id, function (result) {
        res.json(result);

    })
})


module.exports = router; 