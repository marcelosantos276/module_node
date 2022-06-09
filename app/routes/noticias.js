module.exports = function (app) {

    app.get('/noticias', (req,res) => {

    var mysql = require('mysql');

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "portal_noticias"
    });

    con.connect((err) => {
        if (err) throw err
        //Select all customers and return the result object:
        con.query("SELECT * FROM noticias", (err, result) => {
            if (err) throw err
            res.send(result)
        })
    })
})
}