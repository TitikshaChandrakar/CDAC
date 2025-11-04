const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Chicku@2001",             // your MySQL password
  database: "school",   // ✅ make sure this database exists
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to DB:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

module.exports = db;
