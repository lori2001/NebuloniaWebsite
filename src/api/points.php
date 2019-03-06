<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
    
$points = [];
$sql = "SELECT * FROM `points`";

if($result = mysqli_query($con,$sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $points[$index]['id']    = $row['id'];
    $points[$index]['value'] = $row['value'];
    $points[$index]['activity_id'] = $row['activity_id'];
    $points[$index]['class_id'] = $row['class_id'];
    $index++;
  }
    
  echo json_encode(['data'=>$points]);
}
else
{
  http_response_code(404);
}