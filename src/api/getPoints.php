<?php
/**
 * Returns the list of pointgroups.
 */
require 'connect.php';
    
$pointgroups = [];

$sql = "SELECT * FROM `classes`";
if($result = mysqli_query($con,$sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $id = $row['id'];
    $pointgroups[$index]['name'] = $row['name'];
    $pointgroups[$index]['value'] = 0;

    $sql2 = "SELECT value FROM `points` WHERE class_id = $id";
    if($result2 = mysqli_query($con,$sql2))
    {
        while($row2 = mysqli_fetch_assoc($result2))
        {
            $pointgroups[$index]['value'] += $row2['value'];
        }
    }
    else
    {
      http_response_code(404);
    }

    $index++;
  }

  echo json_encode(['data'=>$pointgroups]);
}
else
{
  http_response_code(404);
}