var connection = require ("./connection.js");


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

    insertOne: function(tableInput, col1, col2, val1, val2, callback){
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [tableInput, col1, col2, val1, val2], function (err, result){
            if(err){
                throw err;
            }
            callback(result);
        })
    },

    updateOne: function (tableInput, col1, val1, id, callback){
        var queryString= "UPDATE ?? SET ?? = ? WHERE id=?";
        connection.query(queryString, [tableInput, col1, val1, id], function(err, result){
            if (err){
                throw err;
            }
            callback(result)
        })
    }

}

module.exports = orm; 