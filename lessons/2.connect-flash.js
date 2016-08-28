var express = require('express');
var app = express();
var session = require('express-session');
var flash = require('connect-flash');//消息写在session中，
app.use(session({
    secret:'lining',
    resave:true,
    saveUninitialized:true
}));
app.use(flash());
app.get('/write',function (req, res) {
    req.flash('success','成功1');
    req.flash('success','成功2');
    req.flash('success','成功3');
    res.redirect('/read');
});
app.get('/read',function (req, res) {
    var msg = req.flash('success');
    res.send(msg);
});

app.listen(9090);