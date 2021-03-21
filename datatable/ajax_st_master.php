<?php

include "conndb.php";

$SQL = " select id, grade1, grade2, name, status, house from st_master";

$result = result_query($SQL);

$ret_arr = array();

while( $row = mysqli_fetch_array($result) )
{
  $row_array['id'] = $row['id'];
  $row_array['grade1'] = urlencode($row['grade1']);
  $row_array['grade2'] = urlencode($row['grade2']);
  $row_array['name'] = urlencode($row['name']);
  $row_array['status'] = urlencode($row['status']);
  $row_array['house'] = urlencode($row['house']);
    
  array_push($ret_arr, $row_array);
}

?>

{"data": <?php
echo urldecode(json_encode($ret_arr));
?>}