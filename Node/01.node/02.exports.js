/*
    1.在Node中，一个js文件就是一个模块
    2.在Node中，每一个js文件中的js代码都是独立运行在一个函数中，
    而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
*/
console.log('我是02module');

/*可以通过exports来向外暴露变量和方法
* 只需要将需要暴露给外部的变量或方法设置为exports的属性即可*/
// 向外暴露属性或方法
// 模块定义
exports.x="我是02module中的x";
// module.exports.x="我是02module中的x";和上面一样的
exports.y="我是02module中的y";
exports.lasa=function(){

}