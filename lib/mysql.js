var mysql = require('mysql');
var config = require("../config.js");
var async = require("async");

var pool  = mysql.createPool({
    host     : config.__MYSQL_DB_HOST__,
    user     : config.__MYSQL_DB_USER__,
    password : config.__MYSQL_DB_PASS__,
    database : config.__MYSQL_DB_NAME__,
	connectionLimit : 200
});


var newConnection = function(callback){
	pool.getConnection(function(err, connection){
		callback(err, connection)
	})
}

exports.connection = function(callback){
	newConnection(callback)
}

exports.format = function(query, inserts){
	return mysql.format(query, inserts)
}

exports.query = function(query, params, resultsCallback) {

	if(typeof params == "function") resultsCallback = params
	
	pool.query(query, params || null, function(err, rows){
		if(!err)
		{
			try { resultsCallback(err, rows) }
			finally { 
			}	
		}
		else
		{
			console.log(err)
		}
	})	
}