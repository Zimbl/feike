define(["jquery","jquery-cookie"],function ($) { 
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
          sc_num:sc_num
      }

 })