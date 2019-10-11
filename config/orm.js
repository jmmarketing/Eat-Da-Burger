var connection = require ("../config/connection.js");


var orm = {

    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, result){
            if (err) {
                throw err;
            }
            callback(result);
        })
    },

    insertOne: function(tableInput, col1, val1, callback){
        var queryString = "INSERT INTO ?? (??) VALUE (?)";
        connection.query(queryString, [tableInput, col1, val1], function (err, result){
            if(err){
                throw err;
            }
            callback(result);
        })
    },

    updateOne: function (tableInput, val1, id, callback){
        var queryString= "UPDATE ?? SET devoured = ? WHERE id=?";
        connection.query(queryString, [tableInput, val1, id], function(err, result){
            if (err){
                throw err;
            }
            callback(result)
        })
    }

}

module.exports = orm; 