define(["jquery","jquery-cookie"],function ($) { 
    function commoditydtl() {
        sc_num()



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