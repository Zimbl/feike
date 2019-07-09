console.log("加载成功");


require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "ajax":"ajax",
        "commoditylog":"commoditylog",
        "shopcar":"shopcar",
        "sc_num":"sc_num",
        "denglu":"denglu"

    },
    shim:{
        "jquery-cookie":["jquery"]
    }
})

require(["ajax","shopcar","sc_num","commoditylog","denglu"],function (ajax,shopcar,sc_num,commoditylog,denglu) { 
    commoditylog.commoditylog();
    shopcar.shopcar();
    sc_num.sc_num();
    denglu.denglu();
 })