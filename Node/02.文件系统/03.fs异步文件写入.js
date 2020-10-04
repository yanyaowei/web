/*
异步文件写入：
1.打开文件：
    fs.open(path,flags[,mode],callback)
       -异步调用方法，结果都是通过回调函数的参数返回的
       -回调函数的参数：
         err 错误对象：如果没有错误，则为null
         fd  文件的描述符
2.写文件
    fs.write(fd,string[,position[,encoding]],callback)
    -异步写入一个文件
3.关闭文件
    fs.close(fd,callback)
*/
//引入fs模块
var fs=require("fs");
//打开文件
fs.open("hello2.txt","w",function (err,fd){
    //判断是否出错
    if(!err){
        //如果没有错误，则对文件进行写入操作
        fs.write(fd,"异步操作内容",function (err){
            if(!err){
                console.log("写入成功");
            }
            //关闭文件
            fs.close(fd,function (err){
                if(!err){
                    console.log("文件已关闭");
                }
            })

        });

    }else {
        console.log(err);
    }
});

console.log("异步请等我完成了再执行");