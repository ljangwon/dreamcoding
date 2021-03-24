<?php
include "../../lib/conn.php";

$id = $_POST[ 'id' ];
$grade1 = $_POST[ 'grade1' ];
$grade2 = $_POST[ 'grade2' ];
$name = $_POST[ 'name' ];

if(!$grade1 or !$grade2 or !$name) {
  exit;
}

$result = null;

  $sql = 'insert into st_master (grade1, grade2, name) values ("'+ $grade1 + '", "'+$grade2+'","'+$name+'")';

  $result = db_insert($sql);
 
  if( $result == 'ok' ) {
    echo ' data inserted';
  }
  else {
    echo $result;
  }


db_close();
