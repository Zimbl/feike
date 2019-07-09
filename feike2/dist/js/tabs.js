define(["jquery"],function ($) {
    function  tabs(){
        $(function () {
            $(".goodsScrollPic .picList .clearfix").on("click","li",function () { 
                $(".goodsMainPic ul li").css("display","none").eq($(this).index()).css("display","block");
             });
             $(".goodsScrollPic .picList .clearfix").on("click","li",function () { 
                $(".bigpic .bigpic-ul li").css("display","none").eq($(this).index()).css("display","block");
             })
          })
    }
    return{
        tabs:tabs
    }
  })