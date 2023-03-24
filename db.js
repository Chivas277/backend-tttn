import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'linhkienpc',
    port:3306
});

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     /*Create a database named "mydb":*/
//     db.query("CREATE DATABASE linhkienpc_tttn", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });