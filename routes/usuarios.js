var express = require('express');
var router = express.Router();

const sql = require('../config/database/mysql')

router.get('/', function(req, res, next) {
  sql.query('SELECT * FROM usuarios', function(err, result){
    res.send(result);
  })
});

module.exports = router;
