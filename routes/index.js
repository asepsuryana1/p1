var express = require('express');
var router = express.Router();
var path = require('path');
var sqlite3 = require('sqlite3').verbose();

const db_name = path.join(__dirname, "../chat.db");
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'bread.db'");
});


/* GET home page. */
router.get('/', function (req, res, next) {
const tulisan = req.body.tulisan
  db.all('select * from tulis',(tulisan),[req.body.tulisan] ,(err, data) => {
    console.log(data);
    if (err) return res.send(err)
    res.render("p1",
    req.body.tulisan
    
    );
  })
});

module.exports = router;
