define(["ajax","jquery"],function (ajax,$) { 
    function zhuce() { 
        
            var oSubmit = document.getElementById("submit");
            var oColwarning = document.getElementById("colwarning");
            var aInputs = document.getElementsByTagName("input");

            oSubmit.onclick = function(){
              
                $ajax({
                    type:"post",
                    url:"php/register.php",
                    data:{
                        username: $(".form-group #username").val(),
                        password: $(".form-group #password").val(),
                        repassword: $(".form-group #ispassword").val(),
                        addTime:(new Date()).getTime(),
                        telePhone: $(".form-group #telephone_span").text(),
                        authCode: $(".form-group #authcode_span").text()
                    },
                    success: function(msg){
                        var obj = JSON.parse(msg);
                        if(obj.code){
                            oColwarning.style.display = 'block';
                            oColwarning.innerHTML = obj.message;

                        }else{
                            oColwarning.style.display = 'block';
                            oColwarning.className = "alert alert-success";
                            oColwarning.innerHTML = obj.message;
                            setTimeout(function(){
                                location.assign("login.html");
                            },1000)
                        }
                    },
                    error:function(msg){
                        alert(msg);
                    }

                })
            }
                    //密码验证
            var passWord = document.getElementById("password");
                         var oDiv = document.getElementById('qiangdu')
                         var aSpans = oDiv.getElementsByTagName("span");
                         passWord.onkeyup = function(){
                           var oValue = passWord.value;
                             
                           if(!oValue){
                             aSpans[0].className = 'yuanben';
                             aSpans[1].className = 'yuanben';
                             aSpans[2].className = 'yuanben';
                             //什么都不做。
                           }else if(/^\d+$/.test(oValue) || /^[a-z]+$/.test(oValue) || /^[A-Z]+$/.test(oValue)){
 
                             aSpans[0].className = 'active';aSpans[1].className = '';aSpans[2].className = '';
 
                           }else if(/\d/.test(oValue) && /[a-z]/.test(oValue) && /[A-Z]/.test(oValue)){
 
                             aSpans[2].className = 'active';aSpans[0].className = '';aSpans[1].className = '';
 
                           }else{
 
                             aSpans[1].className = 'active';aSpans[0].className = '';aSpans[2].className = '';
                             
                           }
                         }
            
        
     }
     return{
         zhuce:zhuce
     }
 })