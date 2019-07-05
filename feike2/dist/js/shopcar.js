define(["jquery"],function($){
    function shopcar(){
        $(function(){
            $("#banner_top_shopcar").mouseenter(function(){
                $("#banner_top_shopcar").addClass("shopcar-else");
                $(".mini-car-list").show();
            })
            $(".shopcar").mouseleave(function(){
                $("#banner_top_shopcar").removeClass("shopcar-else");
                $(".mini-car-list").hide();
            })
        })

    }
    return{
        shopcar:shopcar
    }
})