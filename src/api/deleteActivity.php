<?php
// Saves points table to database
// By:. Kovacs Lorand @ 2020
require 'connect.php';
require 'password.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$actid = $request->data;
@$pw = $request->password;
if(strcmp($pw, $password) == 0)
{
    $query = "DELETE FROM points WHERE activity_id = ".$actid;
    mysqli_query($con, $query);
    $query = "DELETE FROM activities WHERE id = '".$actid."'";
    mysqli_query($con, $query);
}
?>