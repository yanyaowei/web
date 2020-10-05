var fs=require("fs");
//创建一个可读流
var rs=fs.createReadStream("hello3.txt");
//创建一个可写流
var ws=fs.createWriteStream("hello4.txt");

//监听流的开启和关闭
rs.once("open",function (){
    console.log("可读流打开了");
});
rs.once("close",function (){
    console.log("可读流关闭了");
    //可读流数据读取完毕关闭可写流
    ws.end();
});

ws.once("open",function (){
    console.log("可读流打开了");
});
ws.once("close",function (){
    console.log("可读流关闭了");
});

// 方法二：(不写data，直接用管道)
//pipe（）可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);


//方法一：（写data）
//如果要读取可读流中的数据，必须要为可读流绑定一个data事件，
// data事件绑定完毕后，他会自动开始读取数据
// rs.on("data",function (data){
//     // console.log(data.length);
//     //将读取到的数据写入到可写流中
//     ws.write(data);
// })