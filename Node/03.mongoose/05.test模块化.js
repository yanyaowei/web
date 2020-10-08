require("./tools/connect_mongo");//连接MongoDB服务器
var Student=require("./models/student");//获取Model
Student.find({},function (err,docs){
    if(!err){
        console.log(docs);
    }
});
