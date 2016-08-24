var express = require('express');
var router = express.Router();

/* GET users listing. */
//不是完整的路径，而是/users后的路径
router.get('/reg', function(req, res, next) {
  res.render('user/reg');
});
router.get('/login', function(req, res, next) {
  res.render('user/login');
});
router.get('/logout', function(req, res, next) {
  res.send('退出');
});
module.exports = router;
