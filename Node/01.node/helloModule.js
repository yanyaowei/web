// exports.name="小巍";
// exports.age=20;
// exports.sayName=function (){
//     console.log("我是小巍");
// }

module.exports= {//这是改对象,用什么什么点什么这样来改对象
    name: "小微微",
    age: 20,
    sayName :function () {
        console.log("我是小巍");
    }
}
// 下面这个不行:
// exports= {//这是改变量
//     name: "小微微",
//     age: 20,
//     sayName :function () {
//         console.log("我是小巍");
//     }
// }

/*
  exports和module.exports区别:
    1.通过exports只能使用.的方式来向外暴露内部变量
    即exports.XXX=XXX;
    2.而module.exports既可以通过.的形式,也可以直接赋值
    即module.exports.XXX=XXX;
      module.exports={};*/
