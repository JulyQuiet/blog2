//权限判断的中间件
exports.mustNotLogin = function (req,res,next) {
    if(req.session.user){//登录
        req.flash('error','此页面需要未登录才能访问');
        res.redirect('/');
    }else{
        next();
    }
};
//此中间件要求登录之才能访问
exports.mustLogin = function (req,res,next) {
    if(req.session.user){//登录
        next();
    }else{
        req.flash('error','此页面需要登录才能访问,您尚未登录，请登录');
        res.redirect('/user/login');
    }
};