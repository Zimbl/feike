<?php
    header('content-type:text/html;charset="utf-8"');
    $respinseDate = array("code" => 0,"message" => "");

    $username = $_POST['username'];
	$password = $_POST['password'];
	$repassword = $_POST["repassword"];
    $addTime = $_POST["addTime"];
    $strLength = strlen($password);
    $telePhone = $_POST["telePhone"];
    $authCode = $_POST["authCode"];
    
    /*
		简单验证一下提交过来的数据
		1、验证用户名是否为空
		2、验证密码是否为空
		3、两次输入密码是否一致
    */
    if($username == ''){
        $responseData["code"] = 1;
        $responseData["message"] = "用户名不能为空";
        echo json_encode($responseData);
        exit;
    }
    if($password == ""){
		$responseData["code"] = 2;
		$responseData["message"] = "密码不能为空";
		echo json_encode($responseData);
		exit;
    }
    if($strLength > 16 || $strLength < 6){
        $responseData["code"] = 7;
		$responseData["message"] = "密码应为6-16位";
        echo json_encode($responseData);
        
		exit;
    }
	if($password != $repassword){
		$responseData["code"] = 3;
		$responseData["message"] = "两次密码输入不一致";
		echo json_encode($responseData);
		exit;
    }
    if($telePhone != "可使用"){
		$responseData["code"] = 8;
		$responseData["message"] = "电话号码不正确";
		echo json_encode($responseData);
		exit;
    }
    if($authCode != "通过"){
		$responseData["code"] = 9;
		$responseData["message"] = "验证码不正确";
		echo json_encode($responseData);
		exit;
    }
    	/*
		在数据库中验证本次注册是否成功
			1、在数据库中有没有同名的用户名
    */
    $link = mysql_connect("localhost","root","123456");
    if(!$link){
        $responseData["code"] = 4;
		$responseData["message"] = "数据库链接失败";
		echo json_encode($responseData);
		exit;
    }

    mysql_set_charset("utf8");
    mysql_select_db("qd1904");
$sql = "SELECT  * FROM users WHERE username = '{$username}'" ;
    $res = mysql_query($sql);
    $row = mysql_fetch_assoc($res);
    if($row){
        $responseData["code"] = 5;
		$responseData["message"] = "用户名已经存在";
		echo json_encode($responseData);
		exit;
    }else{
        /*
			密码要进行md5加密
        */
        $str = md5(md5(md5($password)."qianfeng")."qingdao");
        $sql2 = "INSERT INTO users(username,password,addTime) VALUES('{$username}','{$str}',{$addTime})";
        $res = mysql_query($sql2);
        if(!$res){
            $responseData["code"] = 6;
			$responseData["message"] = "注册失败";
			echo json_encode($responseData);
			exit;
        }else{
            $responseData["message"] = "注册成功";
			echo json_encode($responseData);
        }
    }
?>