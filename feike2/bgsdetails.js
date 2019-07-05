console.log("成功");
//引入模块
/*
	第一个参数是引入模块的名字   必须传的是数组
	第二个参数 回调函数  参数，可以按照顺序，拿到对应的模块对象

 */
/*require(["demo/add"], function(add){
	alert(add.addOut(10, 20));
	add.hello();
})*/

/*
	预先配置好加载.js文件的路径
 */

 require.config({
     paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "commoditydtl":"commoditydtl",
        "shopcar":"shopcar",
     },
     shim:{
        "jquery-cookie":["jquery"],
        "parabola":{
            exports:"_"
        }
     }
 })

 require(["commoditydtl","shopcar"],function(commoditydtl,shopcar){
    commoditydtl.commoditydtl();
    shopcar.shopcar();
 })