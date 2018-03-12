var express = require('express');
var router = express.Router();
var config = require('../config');

var toRender = 'home';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(toRender, {
    title: `Adrian's Lab Stuff`,
 });
});



module.exports = router;
