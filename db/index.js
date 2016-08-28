var mongoose = require('mongoose');
mongoose.Promise = Promise;
var settings = require('../settings');
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect(settings.dbUrl);
//用户的模型骨架
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    avatar: String //头像
});
var UserModel =mongoose.model('User',UserSchema);
var ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    pv:{type:Number,default:0},//浏览量，每当进入详情页一次就加1
    comments: [{user:{type:ObjectId,ref:'User'},
        content:String,
        createAt:{type: Date, default: Date.now()}}],
    user: {type: ObjectId, ref: 'User'},
    createAt: {type: Date, default: Date.now()} //创建时间
});
var ArticleModel =mongoose.model('Article',ArticleSchema);
global.Model = function (modelName) {
    return mongoose.model(modelName);
};

/*
UserModel.findOne({}).then(function (data) {
    console.error(data);
});*/
