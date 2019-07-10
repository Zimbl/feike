define(["ajax"],function (ajax) { 
    function yanzheng() { 
        authcode();
        //账号***********************************************
        var oUsername = document.getElementById("username");
        oUsername.onblur = function (){
            var oUsername = document.getElementById("username");
            var oUsername_span = document.getElementById("username_span");
            var oValue = oUsername.value.replace(/ /g,"");
            oUsername.value = oValue;
            if(oValue.length > 18 || oValue.length < 6){
                oUsername_span.innerHTML = '长度应为6~18个字符';
            }else if(!/[a-zA-Z]/.test(oValue[0])){
               oUsername_span.innerHTML = "邮件地址必需以英文字母开头";
            }
            else{
                var isYES = true;
                for(var i = 0; i < oValue.length; i++){
                    if(!isABC(oValue[i])){
                           isYES = false;
                           break;
                    }
                }
                if(isYES){
                    oUsername_span.innerHTML = '√恭喜，该账号可注册';
                }else{
                    oUsername_span.innerHTML = '邮件地址需由字母、数字或下划线组成';
                }

            }
        } 
        //判断单个字符是否是 数字 字母 下划线 美元符号
        function isABC(center){
            if(center >= "0" && center <= "9" || center >= "a" && center <= "z" || center >= "A" && center <= "Z"    || center == "_")
            {
                return true;
            }else{
                false;
            }
         }
 //密码***********************************************************
        var passWord = document.getElementById("password");
        passWord.onblur = function (){
            var passWord = document.getElementById("password");
            var passWord_span = document.getElementById("password_span");
            
            // var pValue = passWord.value.replace(/ /g,"");
            // passWord.value = pValue;
            if(passWord.value.length >= 6 && passWord.value.length <= 16){
                passWord_span.innerHTML = "可用";
            }else{
                passWord_span.innerHTML = "请输入6-16字符";
            }
          

        }
        /* window.onload = function(){
          
        }   */ 
        
//确认密码********************************************************
        var ispassWord = document.getElementById('ispassword');
        ispassWord.onblur = function (){
        var passWord = document.getElementById("password");
        var ispassWord = document.getElementById('ispassword');
        var ispassWord_span = document.getElementById('ispassword_span');
         if(ispassWord.value == passWord.value){
            ispassWord_span.innerHTML = "密码正确";
         }else{
            ispassWord_span.innerHTML = "密码错误";
         }

       }

//手机号码************************************************************  
        var telePhone = document.getElementById("telephone");         
        telePhone.onblur = function (){
       
        var telePhone_span = document.getElementById("telephone_span");
        var tValue = telePhone.value.replace(/ /g,"");
        telePhone.value = tValue;
        if(tValue.length != 11){
            telePhone_span.innerHTML = '长度应为11个字符';
        }else if( tValue[0] != '1'){
        telePhone_span.innerHTML = '以数字1开头';
        }else{
            var isyes = true;
            for(var i = 0; i < tValue.length; i++){
                if(!jisuan(tValue[i])){
                        isyes = false
                        break;
                }
        }
        if(isyes){
            telePhone_span.innerHTML = '可使用';
        }else{
            telePhone_span.innerHTML = '请使用数字'
        }
        }
        }
        function jisuan(num){
            if(num <= "9" && num >= "0"){
                return true
            }else{
                return false
            }
        }   
        
//验证码*******************************************************************
    var authCode = document.getElementById('authcode');

    authCode.onblur = function (){
            var authCode_span = document.getElementById('authcode_span');
            // var aValue = authCode.value.replace(/ /g,'');
            // authCode.value = aValue;
            var ranDom_span = document.getElementById('random_span');
            
            if(authCode.value == random.innerHTML || authCode.value.toLowerCase() == random.innerHTML.toLowerCase()){
                authCode_span.innerHTML = '通过';
            }else{
                authCode_span.innerHTML = '验证码不正确'
            }

        }
        var ranDom_span = document.getElementById('random_span');
        ranDom_span.onclick =function(){
            function test(n){
            var arr = [];
            for(var i = 0; i < n ;i++){
                var tmp = parseInt(Math.random()*123);
                if( tmp >= 0 && tmp <= 9){
                    arr.push(tmp);
                }else if(tmp >= 65  && tmp <= 90  || tmp >=97 &&tmp <=122){
                    var char = String.fromCharCode(tmp);
                    arr.push(char);
                }else{
                    i--;
                } 
            }
            return arr.join('')
            }
            var random = document.getElementById('random');
            random.innerHTML = test(6); 
            
        }

        function authcode(){
            function test(n){
            var arr = [];
            for(var i = 0; i < n ;i++){
                var tmp = parseInt(Math.random()*123);
                if( tmp >= 0 && tmp <= 9){
                    arr.push(tmp);
                }else if(tmp >= 65  && tmp <= 90  || tmp >=97 &&tmp <=122){
                    var char = String.fromCharCode(tmp);
                    arr.push(char);
                }else{
                    i--;
                } 
            }
            return arr.join('')
            }
            var random = document.getElementById('random');
            random.innerHTML = test(6); 
            
        }
        

     }
     return{
         yanzheng:yanzheng
     }
 })