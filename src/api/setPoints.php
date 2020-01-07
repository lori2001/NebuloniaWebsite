<?php
// Saves points table to database
// By:. Kovacs Lorand @ 2020
require 'connect.php';
require 'password.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$pt = $request->data;
@$pw = $request->password;
if(strcmp($pw, $password) == 0)
{
    $actid = $pt->activity;
    $query = "DELETE FROM points WHERE activity_id = ".$actid;
    mysqli_query($con, $query);
    $query = "SELECT * FROM classes";
    if($result = mysqli_query($con, $query))
    {
       $classes = [];
       while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
       {
           $classes[(int)$row['id']] = (string)str_replace(".", "", $row['name']);
       }
       for($i = 1; $i <= count($classes); $i++)
       {
           $query = "INSERT INTO points (value, activity_id, class_id) VALUES (".$pt->{$classes[$i]}.", ".$actid.", ".$i.")";
           mysqli_query($con, $query);
      }
    }
}
?>