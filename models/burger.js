var orm = require("../config/orm.js"); 

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

    update: function(col, val, id, cb) {
        orm.updateOne("burgers", col, val, id, function(res){
            cb(res); 
            console.log("Burger Updated: \n" + res);
        }); 
    }

}

module.exports = burger; 