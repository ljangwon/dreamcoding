<?php

include "conndb.php";

//$id, $header, $value

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = AA($id);
$header = AA($header);
$value = AA($value);

$dbColumn = "";
switch($header) {
  case "Name" : $dbColumn = "name";
    break;
  case "Postion" : $dbColumn = "position";
    break;
  case "Salary" : $dbColumn = "salary";
    break;
  case "Start date" : $dbColumn = "start_date";
    break;
  case "Office" : $dbColumn = "office";
    break;
  case "Progress" : $dbColumn = "extn";
    break;
}

$result = null;
if($dbColumn && $id && $value)
{
  //update dt_cxcel set name = 'AA' where dt_id='1'
$SQL = " update dt_excel set " . $dbColumn. "='" .$value."' where dt_id='".$id."' ";
$result = result_query($SQL);
}
if($result)
{ 
  echo "ok";
}
?>