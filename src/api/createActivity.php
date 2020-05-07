<?php
// Saves points table to database
// By:. Kovacs Lorand @ 2020
require 'connect.php';
require 'password.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$actname = $request->data;
@$pw = $request->password;
if(strcmp($pw, $password) == 0)
{
    $query = "SELECT COUNT(*) AS num FROM activities WHERE name = '".$actname."'";
    if($result = mysqli_query($con, $query))
    {
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    
        if($row['num'] > 0)
        {
            http_response_code(500);
            exit();
        }
    }
    $query = "INSERT INTO activities (name) VALUES ('".$actname."')";
    mysqli_query($con, $query);
    $query = "SELECT id FROM activities WHERE name = '".$actname."'";
    if($result = mysqli_query($con, $query))
    {
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        $actid = $row['id'];
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
                $query = "INSERT INTO points (value, activity_id, class_id) VALUES (0, ".$actid.", ".$i.")";
                mysqli_query($con, $query);
            }
        }
    }
}
?>