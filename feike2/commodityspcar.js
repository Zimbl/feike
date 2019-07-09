define(["jquery","jquery-cookie"],function ($) { 
    function  commodityspcar() {
        
        sc_msg()
        sc_num();

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
       
        $(".shopcar_body").on("click",".button",function () { 
            
            var id = $(this).closest("div").attr("id");
            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i = 0; i < cookieArr.length; i++){
                if(cookieArr[i].id == id){
                    if(this.innerHTML =="+"){
                        cookieArr[i].num++;
                    }else{
                        if(cookieArr[i].num ==1){
                            alert("不能再减了！！！");
                        }else{
                            cookieArr[i].num--;
                        }
                    }
                    $(this).closest("div").find("input").text("${cookieArr[i].num}")
                    break;
                }
            }
            $.cookie("goods",JSON.stringify(cookieArr),{
                expires: 7
            })
            sc_num();
            sc_msg();
         })
        

       
        }

        function sc_num() {
            var cookieStr = $.cookie("goods");
            if(!cookieStr){
                $(".sc_num").html(0);
                $(".mini-car-list ").find("h5").text(`共计0件商品`);
                $(".mini-car-list ").find("span").text(`共计0元`);
    
            }else{
                
                var price = 0;
                var sum = 0;
                var cookieArr = JSON.parse(cookieStr);
                for(var i = 0; i < cookieArr.length; i++){
                    sum += cookieArr[i].num;
                    price += cookieArr[i].num * cookieArr[i].price
                }
              
                $(".sc_num").html(sum);
                $(".mini-car-list ").find("h5").text(`共计${sum}件商品`);
                $(".mini-car-list ").find("span").text(`共计${price}元`);
                $(".shop_total ").find(".total_price").text(`￥${price}元`);

            }
                
          }
          function sc_msg(){
            
              $(".shopcar_body").html("");
              var cookieStr = $.cookie("goods");
              if(cookieStr){
                  var cookieArr = JSON.parse(cookieStr);
                  $.ajax({
                      url:"data/commoditybgs.json",
                      success:function (arr) { 
                          var newArr =[];
                          for(var i = 0; i < arr.length; i++){
                              for(var j = 0;j < cookieArr.length;j++){
                                  if(arr[i].id == cookieArr[j].id){
                                    arr[i].sum = cookieArr[j].num;
                                      newArr.push(arr[i]);
                                  }
                              }
                          }
                          
                          var subtotalArr = [];
                          for(var i = 0; i < cookieArr.length; i++){
                            var sum = 0;
                            sum = cookieArr[i].num * cookieArr[i].price;
                            subtotalArr.push(sum);
                        }
                          for(var i = 0; i < newArr.length;i++){
                              $(`
                              <tr>
                                    <td>
                                        <input type="checkbox" checked="" name="check">
                                    </td>
                                    <td>
                                        <div class="cart_proItem clear">
                                            <a href="" class="cartImg">
                                                <img src="${newArr[i].img}" alt="">
                                            </a>
                                            <div class="cart_name">FH7006 飞科电子秤FH7006</div>
                                        </div>
                                    </td>
                                    <td class="td3">￥${cookieArr[i].price}</td>
                                    <td> 
                                        <div class="cartNum clear" id = "${cookieArr[i].id}">
                                            <button class="reduce button">-</button>
                                            <input type="text" class="number" value="${cookieArr[i].num}">
                                            <button class="add button">+</button>
                                        </div>
                                    </td>
                                    <td class="subtotal">${subtotalArr[i]}</td>
                                    <td>
                                        <a href="">删除</a>
                                    </td>
                                </tr>
                              `).appendTo($(".shopcar_body"));
                          }
                       },
                       error:function (msg) { 
                           alert(msg);
                        }
                  })
              }
          }
        

      return{
        commodityspcar:commodityspcar
      }
 })