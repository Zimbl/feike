define(["jquery","jquery-cookie"],function ($) { 
    $(".cart_empty").on("click",function (ev) { 
        var e = ev || window.event;
        preDef(e);
     })
    function  commodityspcar() {
        
        sc_msg();
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
     /* 添加删除事件 */  
        $(".shopcar_body").on("click",".delete-one",function () { 
            var id = this.id;
            //1、删除页面上的数据
            $(this).closest('tr').remove();
            //2、删除cookie中的数据 
            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i =0; i < cookieArr.length;i++){
                if(cookieArr[i].id == id){
                    cookieArr.splice(i,1);
                    break;
                }
            }
            if(!cookieArr.length){
                $.cookie("goods",null);
                $(".shop_total ").find(".total_price").text(`￥0元`);
            }else{
                $.cookie("goods",JSON.stringify(cookieArr),{
                    rxpires:7
                })
            }
            sc_num();
         })
         $(".delete-all").on("click",function () { 
             alert("确定删除购物车？")
              //1、删除页面上的数据
            $(".shopcar_body").children("tr").remove();
            //2、删除cookie中的数据 
            $.cookie("goods",null);
            sc_num();
          })

       /* 购物车加减事件 */
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
/* 计算总数总价 */
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
    /* 加载购物车 */
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
                                        <p id = "${cookieArr[i].id}" class="delete-one" >删除</p>
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

          function preDef(e){
            if(e.preventDefault){
                e.preventDefault();
            }else{
                window.event.returnValue = false;
            }
        }
        

      return{
        commodityspcar:commodityspcar
      }
 })