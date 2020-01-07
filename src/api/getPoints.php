<?php
/**
 * Returns the list of pointgroups.
 */
require 'connect.php';
    
$pointgroups = [];

$sql = "SELECT * FROM `points`";
if($result = mysqli_query($con,$sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $id = 0; // takes in number not string
    $id += $row['id'];
    $pointgroups[$index]['value'] = 0; // takes in number not string
    $pointgroups[$index]['value'] += $row['value'];
    $pointgroups[$index]['class_id'] = 0; // takes in number not string
    $pointgroups[$index]['class_id'] += $row['class_id'];
    $pointgroups[$index]['activity_id'] = 0; // takes in number not string
    $pointgroups[$index]['activity_id'] += $row['activity_id'];

    $activity_id = $row['activity_id'];
    $class_id = $row['class_id'];

    $sql2 = "SELECT name FROM `classes` WHERE id = $class_id";
    if($result2 = mysqli_query($con,$sql2))
    {
        if($row2 = mysqli_fetch_assoc($result2))
        {
            $pointgroups[$index]['className'] = $row2['name'];
        }
    }
    else { http_response_code(404); }

    $sql2 = "SELECT name FROM `activities` WHERE id = $activity_id";
    if($result2 = mysqli_query($con,$sql2))
    {
        if($row2 = mysqli_fetch_assoc($result2))
        {
            $pointgroups[$index]['activity'] = $row2['name'];
        }
    }
    else { http_response_code(404); }

    $index++;
  }

  echo json_encode(['data'=>$pointgroups]);
}
else
{
  http_response_code(404);
}
?>