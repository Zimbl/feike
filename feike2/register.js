console.log("加载成功");


require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "ajax":"ajax",
        "yanzheng":"yanzheng",
        "zhuce":"zhuce",
        "shopcar":"shopcar",
        "sc_num":"sc_num"

    },
    shim:{
        "jquery-cookie":["jquery"]
    }
})

require(["ajax", "yanzheng","zhuce","shopcar","sc_num"],function (ajax, yanzheng,zhuce,shopcar,sc_num) { 
    yanzheng.yanzheng();
    zhuce.zhuce();
    shopcar.shopcar();
    sc_num.sc_num();
 })