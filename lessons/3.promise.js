var fs = require('fs');
function readFile(fileName) {
    return new Promise(function (resolve, reject) {
        //当创建promise实例的时候，此函数就开始执行了
        fs.readFile(fileName, 'utf-8', function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        })
    })
}

readFile('1.txt').then(function (data) {
    console.log(data);
    return readFile(data);
})
    .then(function (data) {
        console.log(data);
        return readFile(data);
    })
    .then(function (data) {
        console.log(data);
        return readFile(data);
    }).catch(function (err) {
        console.log(err);
});

