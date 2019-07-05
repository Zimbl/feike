define(["jquery"],function ($) {
    function commodity() {
        $.ajax({
            url: "data/commodity.json",
            // dataType: "json", 自动识别
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node5 = $(`                      
                        <li id = "${arr[i].id}" class="li1 act">
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
        })
      };
      return{
        commodity:commodity
      }
  })