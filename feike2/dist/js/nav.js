define(["jquery"],function($){
    function nav(){
        $.ajax({
            url:"data/nav.json",
            success:function(arr){
                for(var i = 0;i < arr.length;i++){
                    var node3 = $(`
                    <li><a href="">${arr[i].title}<em>></em></a></li>
                    `);
                    node3.appendTo(".nav-ul");
                };
                $(".nav-ul").on("mouseenter","li",function(){
                    $(".nav-ol").show();
                    $(".nav-ol").empty();
                    var index = $(this).index();
                    // alert($(this)[0].tagName);
                    for(var j =0; j < arr[index].msg.length;j++){
                        var node4 = $(`
                            <li id = "${arr[index].msg[j].id}">
                                <a href="" class="link">
                                    <img src="${arr[index].msg[j].img}" alt="">
                                    <span>${arr[index].msg[j].thing}</span>
                                </a>
                                <a href="" class="btn-buy">购买</a>
                            </li>
                        `);
                        node4.appendTo(".nav-ol");
                    };
                });
                $(".nav-box").on("mouseleave",function(){
                    $(".nav-ol").hide();
                })
            },
            error:function(msg){
                alert(msg);
            }
        })
    }
    return{
        nav:nav
    }
})