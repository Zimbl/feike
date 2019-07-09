<?php
    header('content-type:text/html;charset="utf-8"');

    $responseDate = array("code" => 0,"message" =>'');
    $username = $_POST["username"];
    $password = $_POST["password"];
    $str = md5(md5(md5($password)."qianfeng")."qingdao");

    /*
		做一个简单的验证
    */
    if($username == ""){
		$responseData['code'] = 1;
		$responseData['message'] = "用户名不能为空";
		echo json_encode($responseData);
		exit;
    }
    if($password == ""){
		$responseData['code'] = 2;
		$responseData['message'] = "密码不能为空";
		echo json_encode($responseData);
		exit;
    }
    /*
		在数据库中验证本次注册是否成功
        1、在数据库中这个用户名和密码是否存在
    */
    $link = mysql_connect("localhost","root","123456");

    if(!$link){
		$responseData["code"] = 3;
		$responseData["message"] = "数据库链接失败";
		echo json_encode($responseData);
		exit;
    }
    mysql_set_charset("utf8");
    mysql_select_db("qd1904");
    $sql = "SELECT * FROM users WHERE username = '{$username}' AND password='{$str}'";

    $res = mysql_query($sql);
    
    $row = mysql_fetch_assoc($res);
    
    if($row){
        $responseData['message'] = "成功";
        
          echo json_encode($responseData);
      }else{
          $responseData['code'] = 4;
          $responseData['message'] = "用户名或密码错误";
          echo json_encode($responseData);
      }
    mysql_close($link);


?>