define(["jquery"],function ($) { 
    function denglu() { 
        $(function () { 
            var oSubmit = document.getElementById("submit");
            var oColwarning = document.getElementById("colwarning");
            var aInputs = document.getElementsByTagName("input");
            oSubmit.onclick = function(){
                $ajax({
                    type:"post",
                    url:"php/login.php",
                    data:{
                        username:$("#username").val(),
                        password:$("#password").val()
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
                            /* setInterval(function(){
    
                                location.assign("list.html");
                            },1000) */
                        }
                    },
                    error:function(msg){
                        alert(msg);
                    }
                })
            }
         })
     }
     return{
        denglu:denglu
     }
    
 })