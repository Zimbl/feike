define(["jquery","jquery-cookie"], function($){
    function commodity(){
        sc_num();
        $(function(){  
            //通过ajax加载数据
            $.ajax({
                url: "data/commodity.json",
                // dataType: "json", 自动识别
                success: function(arr){
                    for(var i = 0; i < arr.length; i++){
                        var node5 = $(`  
                         
                            <li class="li1 act">
                                <div class="msg">
                                    <h3 class="title" ><a href="" target="_blank">${arr[i].title}</a></h3>
                                    <p class="desc">${arr[i].desc}</p>
                                    <p class="price">
                                        <span class="num">${arr[i].price}</span> 元&nbsp;
                                        <span class="old-num">${arr[i].oldprice}</span>
                                    </p>
                                </div>
                                <div class="figure">
                                    <a href=""><img src="${arr[i].img}" alt=""></a>
                                </div>
                            </li>
                     
                         `);
                        node5.appendTo(".commodity .prom-1-2-ul");
                     
                    };
                
                    
                   
                   
                },
                error: function(msg){
                    alert(msg);
                }

            });
            $.ajax({
                url: "data/commodity2.json",
                // dataType: "json", 自动识别
                success: function(arr){
                    for(var i = 0; i < arr.length; i++){
                        var node5 = $(`  
                        <li class="li2 act">
                        <p class="titles">                                   
                        ${arr[i].title}
                        </p>
                        <p class="month-num">                                 
                        ${arr[i].desc} &nbsp;
                        <span class="num">${arr[i].num}</span>
                        </p>
                        <p class="price">${arr[i].price}元</p>
                        <div class="figure">
                            <a href="">
                                <img src="${arr[i].img}" alt="">
                            </a>
                        </div>
                    </li>
                         `);
                        node5.appendTo(".commodity .goods-list-2");
                     
                    };
                
                    
                   
                   
                },
                     error: function(msg){
                    alert(msg);
                }

                            })
            $.ajax({
                url: "data/commodity3.json",
                // dataType: "json", 自动识别
                success: function(arr){
                    for(var i = 0; i < arr.length; i++){
                        var node5 = $(`  
                        <li class="prom-2-1-li act">
                        <div class="msg">
                            <h3 class="title">
                                <a href="">${arr[i].title}</a>
                            </h3>
                            <p class="desc">${arr[i].desc}</p>
                            <p class="price">
                                <span class="num">${arr[i].price}</span>
                                <span class="old-num">${arr[i].oldprice}</span>
                            </p>
                        </div>
                        <div class="figure">
                            <a href=""><img src="${arr[i].img}" alt=""></a>
                        </div>
                    </li>
                            `);
                        node5.appendTo(".commodity .prom-2-1-ul");
                        
                    };
                
                    
                    
                    
                },
                        error: function(msg){
                    alert(msg);
                }

                            }) ;
            $.ajax({
                url: "data/commodity4.json",
                // dataType: "json", 自动识别
                success: function(arr){
                    for(var i = 0; i < arr.length; i++){
                        var node5 = $(`  
                        <li class="items-3-li act">    
                        <p class="titles">                                   
                        ${arr[i].title}
                            </p>
                            <p class="month-num">                                 
                            ${arr[i].desc}  &nbsp;
                            <span class="num">${arr[i].num}</span>
                            </p>
                            <p class="price">${arr[i].price}</p>
                            <div class="figure">
                                <a href="">
                                    <img src="${arr[i].img}" alt="">
                                </a>
                            </div>                                                                                             
                        </li>
                            `);
                        node5.appendTo(".commodity .items-3-ul");
                        
                    };
                
                    
                    
                    
                },
                        error: function(msg){
                    alert(msg);
                }

                            }) ;

            $.ajax({
                url: "data/commodity5.json",
                // dataType: "json", 自动识别
                success: function(arr){
                    for(var i = 0; i < arr.length; i++){
                        var node5 = $(`  
                        <li class="prom-2-1-li act">
                        <div class="msg">
                            <h3 class="title">
                                <a href="">${arr[i].title}</a>
                            </h3>
                            <p class="desc">${arr[i].desc}</p>
                            <p class="price">
                                <span class="num">${arr[i].price}</span>
                                <span class="old-num">${arr[i].oldprice}</span>
                            </p>
                        </div>
                        <div class="figure">
                            <a href=""><img src="${arr[i].img}" alt=""></a>
                        </div>
                    </li>
                            `);
                        node5.appendTo(".commodity1 .prom-2-1 .prom-2-1-ul");
                        
                    };
                
                    
                    
                    
                },
                        error: function(msg){
                    alert(msg);
                }

                            }) ;                    

            $.ajax({
                url: "data/commodity6.json",
                // dataType: "json", 自动识别
                success: function(arr){
                    for(var i = 0; i < arr.length; i++){
                        var node5 = $(`  
                        <li class="items-3-li act">
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
                                                                                                                      
                        </li>
                            `);
                        node5.appendTo(".commodity1 .items-3-ul");
                        
                    };
                
                    
                    
                    
                },
                        error: function(msg){
                    alert(msg);
                }

                            }) ;                 
                       
                            
            $.ajax({
                url: "data/commodity7.json",
                // dataType: "json", 自动识别
                success: function(arr){
                    for(var i = 0; i < arr.length; i++){
                        var node5 = $(`  
                        <li class="prom-2-1-li act">
                        <div class="msg">
                            <h6 class="title">
                                <a href="">${arr[i].title}</a>
                            </h6>
                            <p class="desc">${arr[i].desc}</p>
                            <p class="price">
                                <span class="num">${arr[i].price}</span>
                                <span class="old-num">${arr[i].oldprice}</span>
                            </p>
                        </div>
                        <div class="figure">
                            <a href=""><img src="${arr[i].img}" alt=""></a>
                        </div>
                         </li>
                            `);
                        node5.appendTo(".commodity2 .prom-2-1-ul");
                        
                    };
                
                    
                    
                    
                },
                        error: function(msg){
                    alert(msg);
                }

                            }) ;  
                            
                $.ajax({
                    url: "data/commodity8.json",
                    // dataType: "json", 自动识别
                    success: function(arr){
                        for(var i = 0; i < arr.length; i++){
                            var node5 = $(`  
                            <li class="items-3-li act">
                                
                                <p class="titles">                                   
                                    ${arr[i].title}
                                </p>
                                <p class="price">
                                <span class="num">${arr[i].num}</span>
                                 
                                </p>
                                <p class="month-num">                                 
                                ${arr[i].desc}  &nbsp;
                                
                                </p>
                                <p class="price">
                                <span class="">${arr[i].price}</span>
                                <span class="old-num">${arr[i].oldprice}</span>
                                </p>
                                <div class="figure">
                                <a href="">
                                    <img src="${arr[i].img}" alt="">
                                </a>
                                </div>
                                <div class = 'cartn'>
                                <a href="">
                                <span>${arr[i].cartn1}</span></br>
                                <span>${arr[i].cartn2}</span>
                                </a></div>
                                                                                                                            
                            </li>
                                `);
                            node5.appendTo(".commodity2 .items-3-ul");
                            
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
        //对外的名字: 函数名
        commodity: commodity
            }
})