<?php
include "conndb.php";

$db_link=db_conn();  //데이터베이스와 연결하는 사용자 정의 함수
mysqli_select_db($db_link,$DB_SNAME); //내부 database 선택

$SQL = " insert into dt_excel (dt_id, name, position, office, extn, start_date )
 values('".$_POST['dt_id']."','".$_POST["name"]."','".$_POST["position"]."','".$_POST["office"]."','".$_POST["extn"]."',now()) ";

$result = mysqli_query($db_link, $SQL);
?>