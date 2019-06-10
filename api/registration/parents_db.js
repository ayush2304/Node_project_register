var mysql = require('mysql');
var serverSettings = require('./Strings/ServerSettings');

//local mysql db connection
var con = mysql.createConnection({
    host     : serverSettings.host,
    user     : serverSettings.user,
    password : serverSettings.password
});


var SetupSQLDatabase = function SetupSQLDatabase() {
    
    con.connect(function (err) {
        if (err) {
            console.log("error")
            throw err;
}
        con.query("CREATE DATABASE IF NOT EXISTS mydb_test", function (err, result) {
            if (err) { throw err };
            SetupTables();
        });

        });
    
}

var pool = mysql.createPool({
    connectionLimit: 10,
    host     : serverSettings.host,
    user     : serverSettings.user,
    password : serverSettings.password,
    database : serverSettings. database
});

function SetupTables() {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("error error release"+err);
            //connection.release();
            //res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        connection.query("CREATE TABLE IF NOT EXISTS `mydb_test`.`parents_table` ( `id` INT NOT NULL AUTO_INCREMENT, `child_enrollment` BIGINT NOT NULL,  `email_id` VARCHAR(80) NOT NULL, `contact_number` INT NOT NULL, `category` VARCHAR(45) NOT NULL,  `verification_status` INT NULL DEFAULT 0,  `child_class` VARCHAR(45) NOT NULL, PRIMARY KEY (`id`))", function (err, result) {
            if (err) throw err;
            console.log("parents table created/verified");
        });
        connection.release();
    });
}





module.exports = {

    SetupSQLDatabase,
    pool
}


