var express = require('express');
var router = express.Router();

const sql = require('../config/database/mysql')

/* GET home page. */
router.get('/', function(req, res, next) {

  sql.query('SELECT * FROM funcionario', function(err, result){
    res.send(result);
  })
});

module.exports = router;