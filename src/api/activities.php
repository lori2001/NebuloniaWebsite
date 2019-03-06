<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
    
$activities = [];
$sql = "SELECT * FROM `activities` ORDER BY `activities`.`created_at` ASC";

if($result = mysqli_query($con,$sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $activities[$index]['id']    = $row['id'];
    $activities[$index]['name'] = $row['name'];
    $activities[$index]['created_at'] = $row['created_at'];
    $index++;
  }
    
  echo json_encode(['data'=>$activities]);
}
else
{
  http_response_code(404);
}