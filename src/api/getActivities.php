<?php
// Returns the list of activities
// By:. Kovacs Lorand @ 2020
require 'connect.php';
    
$activitylist= [];

$sql = "SELECT * FROM `activities`";
if($result = mysqli_query($con,$sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $activitylist[$index]['id'] = 0;
    $activitylist[$index]['id'] += $row['id'];
    $activitylist[$index]['name'] = $row['name'];
    $index++;
  }

  echo json_encode(['data'=>$activitylist]);
}
else
{
  http_response_code(404);
}
?>