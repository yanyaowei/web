a=10;//全局变量
// var a=10;//局部变量

//在Node中有一个全局变量global,
// 它的作用和网页的window类似,
// 在全局中创建的变量都会作为global的属性保存,
// 在全局中创建的函数都会作为global的方法保存
/*当Node在执行模块中的代码时,他会首先在代码的最顶部,添加如下代码
    function (exports, require, module, __filename, __dirname) {
    在代码最底部添加 }
    实际上模块中的代码都是包装在一个函数中执行的,并且在函数执行时传递了上面五个实参
    exports 该对象用来将变量或函数暴露到外部
    require 函数,用来映入外部的模块
    module  代表当前模块本身,exports就是module的属性,所以也可以用module.exports导出
    __filename
    E:\前端\Web\Node\01.node\04.module.js
    是当前模块的完整路径
    __dirname
    E:\前端\Web\Node\01.node
    是当前模块所在文件夹的路径
 */
// console.log(global.a);

//arguments.callee这个属性保存的是当前执行的函数对象
// console.log(arguments.callee+"");
console.log(arguments.length);//输出5,说明是5个参数(实参)

console.log(module.exports==exports);//输出true,说明他们就是一样的

console.log(__filename);//输出 E:\前端\Web\Node\01.node\04.module.js

console.log(__dirname);//输出 E:\前端\Web\Node\01.node