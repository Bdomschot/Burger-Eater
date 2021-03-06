require('dotenv').config();
const mysql = require("mysql");
const util = require("util");

let connection;
if(process.env.JAWSDB_URL){
     connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
     connection = mysql.createConnection({
        host: "localhost",
        port: 3000,
        user: "root",
        password: process.env.DB_PASS,
        database: "burger_db"
    });
}

connection.connect((err)=>{
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

connection.query = util.promisify(connection.query);


module.exports  = connection;