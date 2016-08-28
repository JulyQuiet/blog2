/**
 * 如果一个方法需要在很多地方使用
 * @param str
 * @returns {*}
 */
exports.md5 = function (str) {
    return require('crypto')
        .createHash('md5')
        .update(str)
        .digest('hex');
};