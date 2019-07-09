define(["jquery"],function($){
    function big() {
        $(function(){
            $(".goodsMainPic ul").mouseenter(function(){
                $("#mark").show();
                $(".bigpic").show();
            }).mouseleave(function(){
                $("#mark").hide();
                $(".bigpic").hide();
            }).mousemove(function(ev){
                var l = ev.pageX - $(".goodsMainPic ul").offset().left -50;
                var t = ev.pageY - $(".goodsMainPic ul").offset().top -50;
                if(l <= 0){
                    l = 0;
                }
                if(l >= 272){
                    l = 272
                }

                if(t <= 0){
                    t = 0;
                }
                if(t >= 268){
                    t = 268;
                }
                $("#mark").css({
                    left: l,
                    top: t
                })
                //同时移动大图片的位置，反向四倍的距离
                $(".bigpic-ul img").css({
                    left: -l * 1.5,
                    top: - t * 1.5
                })
            })
        })
      }
      return{
          big:big
      }
})