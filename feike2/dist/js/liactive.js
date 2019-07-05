define(["jquery"], function($){
    function liactive(){
        $(".liactive ").on("mouseenter",".act",function(){
            $(this).addClass("li-active");
        });
        $(".liactive ").on("mouseleave",".act",function(){
            $(this).removeClass("li-active");
        });
         $(".liactive ").on("mouseenter",".act",function(){
            $(this).find(".cartn").animate({
                bottom:'0px',
                opacity:'1'
        }); 
    }); 
         $(".liactive ").on("mouseleave",".act",function(){
        $(this).find(".cartn").animate({
            bottom:'-50px',
            opacity:'0'
    }); 
}); 
        
   
        
      
}

  

            return{
                //对外的名字: 函数名
                liactive: liactive
            }
})