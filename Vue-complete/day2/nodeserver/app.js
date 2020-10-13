//导入http内置模块
const http = require('http');
//这个核心模块能够帮助我们解析URL地址，从而拿到pathname query
const urlModule=require('url');
//创建一个http服务器
const server = http.creatServer();
//监听http服务器的request请求
server.on('require', function (req, res) {
    // const url = req.url;
    const {pathname:url,query}=urlModule.parse(req.url,true);
    if (url === '/getscript') {


        var data={
            name:'xw',
            age:20,
            gender:'女生'
        }
        //拼接一个合法的JS脚本，这里拼接的是一个方法的调用
        var scriptStr = `${query.callback}()`;
        //res.end发给客户端，客户端把这个字符串当作JS代码去执行
        res.end(scriptStr);
    }else{
        res.end('404');
    }

});
//指定端口号并启动服务器监听
server.listen(3000, function () {
    console.log('server listen success!');
});