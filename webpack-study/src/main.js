//这个main.js是项目的JS入口文件

//1.导入jQuery

//import *** from ***是ES6中导入模块的方式
//ES6代码很高级，所以下面这一行执行会报错无法识别
import $ from 'jquery';//相当于const $ =require("jquery");

//使用import语法，导入css样式表
import './css/index.css'
//注意：webpack默认只能打包处理JS类型的文件，无法处理其他的非JS类型的文件
//如果需要处理非JS类型的文件，我们需要手动安装一些合适的第三方Loader加载器
import './css/index.less'
import './css/index.scss'

$(function(){
    
    $('li:odd').css('backgroundColor','blue');

    $('li:even').css('backgroundColor',function(){
        return '#'+'ff0000';
    });
})