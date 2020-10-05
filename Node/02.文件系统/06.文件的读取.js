/*
1、同步文件的读取
2、异步文件的读取
3、简单文件读取
    fs.readFIle(path[,options],callback)
    fs.readFileSync(path[,options])
        -path 要读取的文件的路径
        -options 读取的选项
        -callback 回调函数，通过回调函数将读取到的内容返回
            err 错误对象
            data  读取到的数据，会返回一个Buffer
4、流式文件读取

*/
var fs=require("fs");
fs.readFile("hello.txt",function (err,data){
    if(!err){
        // console.log(data);
        //将data写入到文件中,下面的这个相当于复制操作
        fs.writeFile("hello2.txt",data,function (err){
            if(!err){
                console.log("成功！");
            }
        })
    }
})