var fs=require("fs");
/*1、
fs.existsSync(path)
检查一个文件是否存在
*/
// var isExists=fs.existsSync("hello.txt");
// console.log(isExists);

/*2、
   fs.stat(path,callback)
   fs.statSync(path)
   获取文件的状态
   */
// fs.stat("hello2.txt",function (err,stat){
        //  isFile（）  是否是一个文件
        //  isDirectory（）  是否是一个文件夹/目录
    // console.log(stat.isFile());
    // console.log(stat.isDirectory());
// });

/*3、
fs.unlink(path,callback)
fs.unlinkSync(path)
删除文件*/
// fs.unlinkSync("hello4.txt");

/*4、
fs.readdir(path[,options])
fs.readdirSync(path[,options])
读取一个目录的目录结构
    files是一个字符串数组，每一个元素就是一个文件夹或文件的名字
*/
// fs.readdir(".",function (err,files){
//     if(!err){
//         console.log(files);
//     }
// })

/*5、
fs.truncate(path,length,callback)
fs.truncateSync(path,length)
截断文件,将文件修改为指定的大小
*/
// fs.truncateSync("hello.txt",5);

/*6、
fs.mkdir(path,[,mode],callback)
fs.mkdirSync(path[,mode])
创建一个目录
*/
// fs.mkdirSync("hello");

/*
7、
fs.rmdir(path,callback)
fs.rmdirSync(path)
删除一个目录
*/
// fs.rmdirSync("hello");

/*8、
fs.rename(oldPath,newPath,callback)
fs.renameSync(oldPath,newPath)
对文件进行重命名
参数：
    oldPath 旧的路径
    newPath 新的路径
    callback 回调函数
    */
// fs.rename("hello3.txt","helloa.txt",function (err){
//     if(!err){
//         console.log("修改成功");
//     }
// });//重复名操作
// fs.rename("hello.txt","C:\\Study\\node\\hello.txt",function (err){
//     if(!err){
//         console.log("修改成功");
//     }else {
//         console.log(err);
//     }
// });//相当于剪切

/*9、
fs.watchFile(filename[,options],listener)
监视文件的修改
参数：
    filename  要监视的文件
    options  配置选项
    listener  回调函数，当文件发生变化时，回调函数会执行
        在回调函数中会有两个参数{
            curr 当前文件的状态
            prev 修改前文件的状态
                这两个都是stats对象
*/
// 设置options：interval：1000  表示每隔1秒监视一次，吃性能
fs.watchFile("hello.txt",{interval:1000},function (curr,prev){
    console.log("修改前文件大小:"+prev.size);
    console.log("修改后文件大小:"+curr.size);
});