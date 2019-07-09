console.log("成功");

require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "shopcar":"shopcar",
        "commodityspcar":"commodityspcar",

    },
    shim:{
        "jquery-cookie":["jquery"], 
    }
})

require(["shopcar","commodityspcar"],function (shopcar,commodityspcar) { 
    shopcar.shopcar();
    commodityspcar.commodityspcar();
 })