var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let fs = require('fs');
  let _2016_data = JSON.parse(fs.readFileSync('data_2016.json','utf8'));
  console.log(_2016_data);
  res.render('index', { title: 'New Graduate Offers', data_2016: _2016_data});
});


module.exports = router;