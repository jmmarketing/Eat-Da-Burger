// ##################### REQUIRED FILES TO USE ORM.JS ###################
var orm = require("../config/orm.js"); 

// ################ Functions to make changes in Database Part 2 ################

var burger = {

    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res); 
            //console.log(res);
        }); 
    },

    create: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res){
            cb(res); 
            console.log("New Burger Added: \n" + res);
        }); 
    },

    update: function(val, id, cb) {
        orm.updateOne("burgers", val, id, function(res){
            cb(res); 
            console.log("Burger Updated: \n" + res);
        }); 
    }

}

module.exports = burger; 