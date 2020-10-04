var fs=require("fs");//文件系统fs（File System）
// console.log(fs);

/*同步文件的写入：
   1.打开文件
      fs.openSync(path,flags[,mode])
        -path  是指要打开文件的路径
        -flags  是指打开文件要做的操作的类型
            r 只读的
            w 可写的
        -mode  是指设置文件的操作权限，一般不传
      该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
   2.向文件中写入内容
      fs.writeSync(fd,string[,position[,encoding]])
        -fd  文件的描述符，需要传递要写入的文件的描述符
        -string 要写入的内容
        -position 写入的起始位置
        -encoding 写入的编码，默认的是UTF-8
   3.保存并关闭文件（不关的话会一直占用内存空间）
      fs.closeSync(文件名);

   */

var fd=fs.openSync("hello.txt","w");//打开文件
// fs.writeSync(fd,"你小子可以的");//向文件中写入内容
fs.writeSync(fd,"你小子可以的",3);//从3后开始向文件中写入内容
fs.closeSync(fd);//关闭文件
