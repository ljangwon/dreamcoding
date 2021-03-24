<?php
include "../../lib/conn.php";

$sql = " select id, st_id, course, memo from study_history";

$result = db_select_rows($sql);

$ret_arr = array();

while( $row = mysqli_fetch_array($result) )
{
  $row_array['id'] = $row['id'];
  $row_array['st_id'] = $row['st_id'];
  $row_array['course'] = urlencode($row['course']);
  $row_array['memo'] = urlencode($row['memo']);
    
  array_push($ret_arr, $row_array);
}
db_close();
?>

{"data": <?php
echo urldecode(json_encode($ret_arr));
?>}