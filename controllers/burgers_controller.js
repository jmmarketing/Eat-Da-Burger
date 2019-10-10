var burger = require("../models/burger.js"); 
var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    burger.all(function(data){
        var allBurgers = {
            burgers: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    });
});

router.post("/api/burgers", function(req,res){
    burger.create("burger_name", req.body.name, function (result){
        res.json(result); 
    })
});

router.put("/api/burgers/:id", function(req,result){
    var burgerId =  req.params.id; 
    
    burger.update({devour: req.body.devour}, burgerId, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }   
    })
})


module.exports = router; 