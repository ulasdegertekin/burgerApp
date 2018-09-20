var mysql= require("mysql");
var connection= mysql.createConnection({
    host: "l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    port: 3306,
    user: "upk9fbuu2op3zd7c",
    password: "eh5d8fza78b05lc7",
    database: "z8ph0rwsxj87h9ig"
});
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connection as id " + connection.threadId);
});
module.exports= connection;