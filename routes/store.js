var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('store', { title: 'Express in Store', messageURL: process.env.MESSAGE_URL });
});

router.route('/message')
  .post(function (req, res, next) {
   console.log('Receive message ' + req.body.message);
   res.send('Message was ' + req.body.message);
});

module.exports = router;
