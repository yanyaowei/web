// 同步异步简单文件写入都不适合大文件的写入，性能较差，容易导致溢出，因此有了   流式文件写入
var fs=require("fs");
//流式文件写入
//创建一个可写流
/*
fs.createWriteStream(path[,options])
    -可以用来创建一个可写流
    -path，文件路径
    -options 配置的参数*/
var ws=fs.createWriteStream("hello3.txt");
//可以通过监听流的open和close事件来监听流的打开和关闭
/*
on(事件字符串，回调函数)
-可以为对象绑定一个事件
 once（事件字符串，回调函数）
 -可以为对象绑定一个一次性事件，该事件会在触发一次后失效
 */
ws.once("open",function (){
    console.log("流打开了");//打开只需要一次
});
ws.once("close",function (){
    console.log("流关闭了");
});
//通过ws向文件中输出内容
ws.write("通过可写流写入内容1");
ws.write("通过可写流写入内容2");
ws.write("通过可写流写入内容3");
ws.write("通过可写流写入内容4");

//关闭流
ws.end();