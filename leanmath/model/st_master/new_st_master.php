<?php
include "../../lib/conn.php";

$grade1 = "미정";
$grade2 = "미정";
$name = $_POST[ 'name' ];

  $sql = "INSERT INTO `codei`.`st_master` (`grade1`, `grade2`, `name`, `status`, `house`, `school`, `sibling`, `st_phone`, `pa_phone`, `mom_job`) VALUES ( '미정', '미정', '".$name."', '대기', NULL, NULL, NULL, NULL, NULL, NULL) ";
  

  $result = db_insert($sql);
 
  if( $result == 'ok' ) {
    echo 'st_master table data is inserted';
  }
  else {
    echo $result;
  }

db_close();
