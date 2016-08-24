module.exports = function (name) {
    return function (msg) {
        //先获取环境变量中的debug值
        var debug = process.env.DEBUG;
        //进行字符串替换
        debug = '^'+debug.replace('*','.*');
        var regex = new RegExp(debug);
        if (regex.test(name))
            console.log(name,msg);
    }
};