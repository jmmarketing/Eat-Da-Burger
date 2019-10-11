// ############# REQUIRED FILES ##################
var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();
// ##############################################


// ############# START ROUTES  Using Burgers/ORM Part 3##################
// ------------- CATCH ALL ROUTE ---------------
router.get("/*", function (req, res) {
    burger.all(function (data) {
        var allBurgers = {
            burgers: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    });
});

// ----------------- CREATES NEW BURGER ROUTE ---------------
router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.create("burger_name", req.body.name, function (result) {
        res.json(result);
    })
});

// -------------- UPATES BURGER DEVOURED STATUS ------------
router.put("/api/burgers/:id", function (req, res) {
    burger.update(true, req.params.id, function (result) {
        res.json(result);

    })
})
// ##########################################################


module.exports = router; 