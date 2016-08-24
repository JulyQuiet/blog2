var debug = require('./debug');//可用于打印一些调试信息
//console.log(process.env.DEBUG);
var loggerServer = debug('logger:server');
//调用此函数在控制台输出日志
//输出的时候会用此日志记录记录器的名字和环境变量中的值进行比较，如果相同则输出到控制台，如果不相同则不输出任何东西
loggerServer('server');
var loggerClient = debug('logger:client');
loggerClient('client');