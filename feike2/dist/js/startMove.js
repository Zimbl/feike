define(function () {
    function startMove(node, obj, complete){ //假设有这本书
        clearInterval(node.timer);
        node.timer = setInterval(function(){
            var isEnd = true; //假设下述的操作，到达目的值了

            for(var attr in obj){
                var iTarget = obj[attr];

                var iCur = null;
                //去计算速度
                if(attr == "opacity"){
                    iCur = parseInt(getStyle(node, "opacity") * 100);
                }else{
                    iCur = parseInt(getStyle(node, attr));
                }

                var speed = (iTarget - iCur) / 8;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                
                if(attr == "opacity"){
                    iCur += speed;
                    node.style.opacity = iCur / 100;
                    node.style.filter = "alpha(opacity=" + iCur + ")";	
                }else{
                        node.style[attr] = iCur + speed + 'px';
                }
                
                if(iCur != iTarget){
                    isEnd = false;
                }
            }

            if(isEnd){
                clearInterval(node.timer);
                if(complete){
                    complete.call(node);
                }
            }
        }, 30);
    }
    //获取当前有效样式
    function getStyle(node, styleStr){
        return node.currentStyle ? node.currentStyle[styleStr] : getComputedStyle(node)[styleStr];
    };
    return{
        startMove:startMove
    }
  })