<?php
/**
 * Returns the list of classes.
 */
require 'connect.php';
    
$classes = [];
$sql = "SELECT * FROM `classes`";

if($result = mysqli_query($con,$sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $classes[$index]['id']    = $row['id'];
    $classes[$index]['name'] = $row['name'];
    $index++;
  }
    
  echo json_encode(['data'=>$classes]);
}
else
{
  http_response_code(404);
}