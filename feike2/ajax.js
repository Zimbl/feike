function $ajax({type = "get",url,data,success,error}){
    var xhr = null;
    try{
		xhr = new XMLHttpRequest();
	}catch(error){
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
    if(type == "get" && data){
        url += "?" + queryString(data);
    }
    xhr.open(type,url,true);
    if(type == "get"){
        xhr.send();
    }else{
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(queryString(data));
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                if(success){
                    success(xhr.responseText);
                }
            }else{
                if(error){
                    error("error:" + xhr.status);
                }
            }
        }
    }



}


function queryString(obj){
    var str = '';
    for(var attr in obj){
        str += attr + "=" + obj[attr] + '&';
    }
    str = str.replace(/&$/,'');
    return str;
}