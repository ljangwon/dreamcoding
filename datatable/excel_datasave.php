<?php

include "conn.php";

//$id, $header, $value

/*
// get postdata as json
$postdata = trim( file_get_contents("php://input"), "\xEF\xBB\xBF");
// convert json to php structure 

var_dump( $postdata );

$request = json_decode($postdata);

*/

$db_link = db_conn();

$id = $_POST[ 'id' ];
$header = $_POST[ 'header' ];
$value = $_POST[ 'value' ];


if(!$header) {
  exit;
}

$dbColumn = "";
switch($header) {
  case "Name" : $dbColumn = "name";
    break;
  case "Position" : $dbColumn = "position";
    break;
  case "Salary" : $dbColumn = "salary";
    break;
  case "Start date" : $dbColumn = "start_date";
    break;
  case "Office" : $dbColumn = "office";
    break;
  case "Progress" : $dbColumn = "extn";
    break;
    $dbColumn = "none";
}


$result = null;

if($dbColumn && $id && $value)
{
  $sql = "update dt_excel set " . $dbColumn . "='" .$value."' where dt_id='". $id ."' ";


  $result = db_update($db_link, $sql);
 
  if( $result == 'ok' ) {
    echo 'data updated';
  }
  else {
    echo $result;
  }
}

db_close($db_link);

?>