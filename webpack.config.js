const path = require('path')
//启用热更新的第二步：
const webpack =require('webpack')
//这个配置文件起始就是一个JS文件，通过Node中的模块操作，
//向外暴露了一个配置对象
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    //入口，表示要使用webpack打包哪个文件
    output:{//输出文件相关的配置
        path:path.join(__dirname,'./dist'),
        //指定打包好的文件，输出到哪个目录中去
        filename:'bundle.js'//指定输出的文件名称
    
},
devServer:{//这个是配置dev-server命令参数的第二种形式，相对来说更麻烦一些
     //--open --port 3000 --contentBase src --hot
     open : true,//自动打开浏览器
     port : 3000,//设置启动时的运行端口
     contentBase:'src',//指定托管的根目录
     hot: true//启用热更新的第一步
},
plugins:[//配置插件的节点
    //new一个热更新的模块对象，这里启用热更新的第三步：
   new webpack.HotModuleReplacementPlugin()
]
}