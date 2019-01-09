const mysql = require("mysql");
const http = require("http");
const url = require("url");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "superBasso86",
  database: "crypto_cur_app_db"
});

//create a server object:
http
  .createServer(function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS,GET");
    res.setHeader("Access-Control-Allow-Headers", req.headers.origin);
    let opt = url.parse(req.url, true).query["name"];
    console.log(opt);
    let query = "SELECT * FROM coins WHERE name = '" + opt + "'";
    let result = executeQuery(query, myCallbackFunction);
    console.log("bloobl");
    //let text = getText();
    res.write(result); //write a response to the client
    res.end(); //end the response
  })
  .listen(12500); //the server object listens on port 8080

const executeQuery = function(querystring, myCallbackFunction) {
  console.log("on get");
  con.connect(function(err) {
    console.log("--- connect");
    if (err) throw err;
    con.query(querystring, function(err, result) {
      console.log("--- kyselyssä");
      if (err) {
        throw err;
      }
      console.log(result);
      myCallbackFunction(result);
      //console.log(result);
    });
  });
  console.log("--- ulos");
};

const myCallbackFunction = function(result) {
  return result;
  //res.write(result);
  //res.end();
};

/* con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = `CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("The customers table is created!!");
  });
}); */

// export default MySQL_connection;
