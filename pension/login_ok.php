<?php
session_start();

include "conndb.php";

if(!$_POST["userid"] || !$_POST["userpassword"])
{
  exit;
}

$db_link=db_conn(); //데이터베이스와 연결하는 사용자 정의 함수
mysqli_select_db($db_link, $DB_SNAME); //내부 database 선택

$SQL = " select uid from tb_member_master where user_id='"