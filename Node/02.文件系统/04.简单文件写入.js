/*
简单文件写入也分同步+异步
fs.writeFile(file, data[, options], callback)
fs.writeFileSync(file, data[, options])
    -file 要操作的文件的路径
    -data 要写入的数据
    -options 选项，可以对写入进行一些设置(可选)
    -callback 当写入完成后执行的函数
    -flag
        r 只读
        w 可写
        a 追加
*/
var fs=require("fs");
// fs.writeFile("hello3.txt","这是第三个写入的文件",{flag:"a"},function (err){
//     if(!err){
//         console.log("写入成功");
//     }else{
//         console.log("error");
//     }
// })
//注意，绝对路径的话需要在转义字符\后面再加一个转义字符\这样就只转义路径
fs.writeFile("C:\\Study\\node\\hello.txt","这是通过writeFile写入的文件",{flag:"a"},function (err){
    if(!err){
        console.log("写入成功");
    }else{
        console.log("error");
    }
})