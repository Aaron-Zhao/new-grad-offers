var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/2014', function(req, res, next) {
  let _2014_data = JSON.parse(fs.readFileSync('data_2014.json','utf8'));
  res.render('offers2014', { title: '2014 Internship Offers', data_2014: _2014_data });
});

router.get('/2015', function(req, res, next) {
  let _2015_data = JSON.parse(fs.readFileSync('data_2015.json','utf8'));
  res.render('offers2015', { title: '2015 Tech New Graduate and Internship Offers', data_2015: _2015_data });
});

router.get('/2016', function(req, res, next) {
  let _2016_data = JSON.parse(fs.readFileSync('data_2016.json','utf8'));
  res.render('offers2016', { title: '2016 Tech New Graduate and Internship Offers', data_2016: _2016_data });
});


module.exports = router;