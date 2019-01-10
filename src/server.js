const mysql = require("mysql");
const http = require("http");
const url = require("url");

const con = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "superBasso86",
  database: "crypto_cur_app_db",
  socketPath: "/tmp/mysql.sock"
});

// Create a server object:
http
  .createServer(function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS,GET");
    res.setHeader("Access-Control-Allow-Headers", req.headers.origin);
    let opt = url.parse(req.url, true).query["name"];
    let query = "SELECT * FROM coins WHERE name = '" + opt + "'";
    con.query(query, function(error, results, fields) {
      if (error) throw error;
      res.writeHead(200, {
        "Content-Type": "x-application/json"
      });
      res.end(JSON.stringify(results[0].description));
    });
  })
  .listen(12500); // The server object listens on port 12500
