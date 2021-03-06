<?php
//SQL환경 설정
global $DB_HOST,$DB_USER,$DB_PASSWD,$DB_SNAME,$db_link;

$DB_HOST="jakeleanco.ipdisk.co.kr";
$DB_USER="codei";
$DB_PASSWD="111111";
$DB_SNAME="codei";
$db_link = false;

//DB 서버 연결
function db_conn(){
	global $DB_HOST,$DB_USER,$DB_PASSWD,$db_link;
	$db_link=mysqli_connect("$DB_HOST","$DB_USER","$DB_PASSWD");

	if (mysqli_connect_errno($db_link)){
		printf("%d : %S", mysqli_errno($db_link), mysqli_error($db_link));
		exit;
	}
	return $db_link;
}

//DB선택, 결과 record set을 리턴
function result_query($query){
	global $DB_SNAME,$db_link;

	if(!$db_link)
	{
		$db_link=db_conn(); //연결식별자
	}

	if(!($stat=mysqli_select_db($db_link,"$DB_SNAME"))){
		printf("DB 실패1");
		exit;
	}

	if(!($result=mysqli_query($db_link,$query))){
		printf("%d : %s",mysqli_errno($db_link),mysqli_error($db_link));
		exit;
	}
	return $result;
}

//DB선택, 결과 record set을 리턴
function result_queryTran($query){
	global $DB_SNAME,$db_link;

	if(!$db_link)
	{
		$db_link=db_conn(); //연결식별자
	}

	if(!($stat=mysqli_select_db($db_link,"$DB_SNAME"))){
		mysqli_rollback($db_link);
		printf("DB 실패");
		exit;
	}

	if(!($result=mysqli_query($db_link,$query))){
		mysqli_rollback($db_link);
		printf("%d : %s",mysqli_errno($db_link),mysqli_error($db_link));
		exit;
	}
	return $result;
}

//DB선택, 결과 record set을 리턴
function result_oneVal($query){
	global $DB_SNAME,$db_link;

	if(!$db_link)
	{
		$db_link=db_conn(); //연결식별자
	}

	if(!($stat=mysqli_select_db($db_link,"$DB_SNAME"))){
		printf("DB 실패");
		exit;
	}

	if(!($result=mysqli_query($db_link,$query))){
		printf("%d : %s",mysqli_errno($db_link),mysqli_error($db_link));
		exit;
	}

	$row = mysqli_fetch_array($result);
	return $row[0];
}

//DB선택, 결과 record set을 리턴
function result_oneValTran($query){
	global $DB_SNAME,$db_link;

	if(!$db_link)
	{
		$db_link=db_conn(); //연결식별자
	}

	if(!($stat=mysqli_select_db($db_link,"$DB_SNAME"))){
		mysqli_rollback($db_link);
		printf("DB 실패");
		exit;
	}

	if(!($result=mysqli_query($db_link,$query))){
		mysqli_rollback($db_link);
		printf("%d : %s",mysqli_errno($db_link),mysqli_error($db_link));
		exit;
	}

	$row = mysqli_fetch_array($result);
	return $row[0];
}


?>