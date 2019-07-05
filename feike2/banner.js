define(["jquery","startMove"],function($,startMove){
    function banner(){
        $(function(){
            $.ajax({
                url:"data/banner.json",
                success:function (arr) {
                    for(var i = 0;i < arr.length;i++){
                        var node = $(`
                        <li  id = "${arr[i].id}"><a href=""><img src="${arr[i].img}" alt=""></a></li>
                        `);
                        node.appendTo(".banner-ul");
                        var node2 = $(`
                        <li class="">${arr[i].id+1}</li>
                        `);
                        node2.appendTo(".banner-id-box");
                    };
                    var aBtns = $(".banner-box").find(".banner-id-box").find("li");
                    var oUl = $(".banner-box").find("ul");
                    var aLis =oUl.find("li");
                    var iNow = 0;
                    var timer = null;
                    aBtns.eq(5).css("display","none");
                    aBtns.click(function(){
                        iNow = $(this).index();
                        tab();
                    });
                    timer = setInterval(function () {
                        iNow++;
                        tab();
                      },2000)
                    function tab(){
                        aBtns.attr("class","").eq(iNow).attr("class","active");
                  
                      /*   aLis.css("opacity","0").eq(iNow-1);
                        aLis.css("filter","alpha(opacity=0)"); */
                        if(iNow == aLis.size() -1){
                            aBtns.eq(0).attr("class","active");
                        }
                       
                       
                      
                        
                         aLis.eq(iNow).stop().animate({
                            opacity:"1",
                            filter:"alpha(opacity=100)"
                        },1000)
                        aLis.eq(iNow).siblings().stop().animate({
                            opacity:"0",
                            filter:"alpha(opacity=0)"
                          },1000);
                         
                            if(iNow == aLis.size() -1){
                                aLis.eq(0).stop().animate({
                                    opacity:"1",
                                    filter:"alpha(opacity=100)"
                                },1000).siblings().stop().animate({
                                    opacity:"0",
                                    filter:"alpha(opacity=0)"
                                  },1000);
                                iNow = 0;
                            }
                          
                    };
                    $("#banner-box").mouseenter(function(){
                        clearInterval(timer);
                    });
                    $("#banner-box").mouseleave(function () {
                        timer = setInterval(function () { 
                            iNow++;
                            tab();
                         },2000)
                      })
                  },
                  error:function (msg) {
                      alert(msg);
                    }
            })
        })
    }
    return{
        banner:banner
    }
})