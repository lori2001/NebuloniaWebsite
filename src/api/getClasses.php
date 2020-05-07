<?php
/*
 * getClasses.php - Reads class name list from database
 * Copyright 2020 - Lorinet Technologies (Kovacs)
 */
require 'connect.php';

$classlist= [];

$sql = "SELECT * FROM classes";
if($result = mysqli_query($con,$sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $classlist[$index] = $row['name'];
    $index++;
  }

  echo json_encode(['data'=>$classlist]);
}
else
{
  http_response_code(404);
}
?>