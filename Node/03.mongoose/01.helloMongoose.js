/*
1、下载安装mongoose
npm i mongoose --save
2、在项目中引入mongoose
var mongoose=require("mongoose")
3、连接MongoDB数据库
如果端口号是默认端口号（27017）可省略不写
mongoose.connect('mongodb://数据库ip地址:端口号/数据库名');

4、断开数据库连接（一般不需要调用)
MongoDB数据库一般情况下，只需要连接一次，连接一次后，除非项目停止服务器关闭，否则连接不会断开
mongoose.disconnect()

5、监听MongoDB数据库的连接状态
在mongoose对象中，有一个属性叫做connection，该对象表示的就是数据库连接
通过监视该对象的状态们可以用来监听数据库的连接与断开

数据库连接成功的事件
mongoose.connection.once("open",function(){});
数据库连接断开的事件
mongoose.connection.once("close",function(){});
*/

//引入
var mongoose=require("mongoose");
//连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test");

mongoose.connection.once("open",function(){
    console.log("Success!");
});

mongoose.connection.once("close",function(){
    console.log("Bye!");
});
//断开连接
mongoose.disconnect();