define(["jquery","jquery-cookie"],function ($) { 
    function commoditydtl() {
        $(function(){
            sc_num()
        $.ajax({
            url: "data/fangdajing.json",
            // dataType: "json", 自动识别
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node6 = $(`  
                    <li id="${arr[i].id}"><img src="${arr[i].img}" alt=""></li>
                    
                        `);
                    node6.appendTo(".goodsMainPic ul");
                    
                };                                                                                                          
            },
                error: function(msg){
                alert(msg);
            }

                        }) ;  
        
        $.ajax({
            url: "data/fangdajing.json",
            // dataType: "json", 自动识别
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node6 = $(`  
                    <li id="${arr[i].id}" class="image-list"><span><img src="${arr[i].img}" alt=""" alt=""></span></li>
                        `);
                    node6.appendTo(".picList .clearfix");
                    
                };                                                                                                          
            },
                error: function(msg){
                alert(msg);
            }

                        }) ;   

        $.ajax({
            url: "data/fangdajing.json",
            // dataType: "json", 自动识别
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node6 = $(`  
                    <li id="${arr[i].id}"><img src="${arr[i].img}" alt=""></li>
                    
                        `);
                    node6.appendTo(".bigpic-ul");
                    
                };                                                                                                          
            },
                error: function(msg){
                alert(msg);
            }

                        }) ;  
        
        $.ajax({
            url: "data/xiangqingye.json",
            // dataType: "json", 自动识别
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node6 = $(`  
                    <div class="screen">
                         <a href="">
                              <img src="${arr[i].img}" alt="">
                         </a>
                    </div>
                        `);
                    node6.appendTo(".goods-detail-desc .detail-desc");
                    
                };                                                                                                          
            },
                error: function(msg){
                alert(msg);
            }

                        }) ; 
        
                        $.ajax({
                            url: "data/tuijian.json",
                            // dataType: "json", 自动识别
                            success: function(arr){
                                for(var i = 0; i < arr.length; i++){
                                    var node6 = $(`  
                                    <div class="recommend-item">
                                    <div class="recommend-item-content">
                                        <a target="_blank" class="block" href="#">
                                             <img src="${arr[i].img}" width="240" height="240" data-bd-imgshare-binded="1">
                                         </a>
                                          <a target="_blank" href="#" class="block f16 mt5 mb8">
                                                    ${arr[i].title}				
                                            </a>
                                              <p class="f13">￥${arr[i].price}</p>
                                    </div>
                                    </div>
                                        `);
                                    node6.appendTo(".recommend-info");
                                    
                                };                                                                                                          
                            },
                                error: function(msg){
                                alert(msg);
                            }
                
                                        }) ; 



        $.ajax({
            url: "data/commodity9.json",
            // dataType: "json", 自动识别
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node6 = $(`  
                    <li><img src="${arr[i].img}" alt="">
                    <span>${arr[i].title}</span>
                </li>
                        `);
                    node6.appendTo(".inner-footer-ul");
                    
                };                                                                                                          
            },
                error: function(msg){
                alert(msg);
            }

                        }) ;  
        $.ajax({
            url: "data/commodity10.json",
            // dataType: "json", 自动识别
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node6 = $(`  
                    <dl>
                        <dt>${arr[i].title}</dt>
                        <dd><a href="">${arr[i].content1}</a></dd>
                        <dd><a href="">${arr[i].content2}</a></dd>
                        <dd><a href="">${arr[i].content3}</a></dd>
                    </dl>
                        `);
                    node6.appendTo(".center-footer-one");
                    
                };                                                                                                          
            },
                error: function(msg){
                alert(msg);
            }

                        }) ; 
        })
        
        }

        function sc_num() {
            var cookieStr = $.cookie("goods");
            if(!cookieStr){
                $(".sc_num").html(0);
                $(".mini-car-list ").find("h5").text(`共计0件商品`);
                $(".mini-car-list ").find("span").text(`共计0元`);
    
            }else{
                var sum = 0;
                var price = 0;
                var cookieArr = JSON.parse(cookieStr);
                for(var i = 0; i < cookieArr.length; i++){
                    sum += cookieArr[i].num;
                    price += cookieArr[i].num * cookieArr[i].price
                }
                $(".sc_num").html(sum);
                $(".mini-car-list ").find("h5").text(`共计${sum}件商品`);
                $(".mini-car-list ").find("span").text(`共计${price}元`);
            }
    
          }
    return{
        commoditydtl:commoditydtl
    }
 })