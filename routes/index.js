var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let fs = require('fs');
  let _2016_data = JSON.parse(fs.readFileSync('data_2016.json','utf8'));
  let _2015_data = JSON.parse(fs.readFileSync('data_2015.json','utf8'));
  
  res.render('index', { title: 'New Graduate Offers', data_2016: _2016_data, data_2015: _2015_data });
});


module.exports = router;