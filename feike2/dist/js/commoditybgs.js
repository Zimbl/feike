define(["parabola","jquery","jquery-cookie","sc_num"],function (parabola,$,sc_num) {
    function commoditybgs() {
        sc_num();  
        $.ajax({
            url: "data/commoditybgs.json",
            // dataType: "json", 自动识别
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node5 = $(`  
                    <li class="prom-2-1-li act">
                        <div class="figure-bottom">
                        <a href="">
                            <img src="${arr[i].img}" alt="">
                        </a>
                        </div>
                        <p class="titles">                                   
                         ${arr[i].title}
                        </p>
                        <p class="month-num">                                 
                        ${arr[i].desc}  &nbsp;
                        
                        </p>
                        <p class="price-bottom">${arr[i].price}</p>
                        <div class = 'sc'>
                        <div id = '${arr[i].id}' class = 'sc_btn'>加入购物车</div>
                        </div>                                                                                            
                    </li>
                        `);
                    node5.appendTo(".commodity2 .prom-2-1-ul");
                    
                };
            
                
                
                
            },
                    error: function(msg){
                alert(msg);
            }

                        }) 
        //事件委托
        $(".commodity2 .prom-2-1-ul").on("click",'.sc_btn',function(){
			//当前商品的id
            var id = this.id;
            var price = parseFloat($(this).closest(".sc").prev(".price-bottom").html());
			//1、判断是否是第一次添加
            var first = $.cookie("goods") == null? true :false;
            if(first){
                var str = `[{"id":${id},"num":1,"price":${price}}]`;
                $.cookie("goods",str,{
                    expires:7
                })
            }else{
                //2、判断之前是否添加过
                //eval只能转 最外层是数组，每一个元素是对象
                var cookieStr = $.cookie("goods");
                var cookieArr = eval(cookieStr);
                var same = false; //假设没有添加过
                for(var i = 0; i < cookieArr.length;i++){
                    if(cookieArr[i].id == id){
                        same = true;
                        cookieArr[i].num++;
                        break;
                    }
                }
                if(!same){
                    var obj = {id:id,num:1,price:price};
                    cookieArr.push(obj);
                }
				//存储回去
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })

            }
            sc_num();
        })





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
//计算购物车总数  总价格
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
        commoditybgs:commoditybgs
    }

  })