<?php
    // Saves points table to database
    // By:. Kovacs Lorand @ 2020

    require 'connect.php'; // connects to database
    require 'password.php'; // gets the password

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$dataInput = $request->data;
    @$passwordInput = $request->password;

    if(strcmp($passwordInput, $password) == 0)
    {
        $actid = $dataInput->activity;

        // delete old points for this activity
        $query = "DELETE FROM points WHERE activity_id = ".$actid;
        mysqli_query($con, $query);

        $query = "SELECT * FROM classes";
        if($result = mysqli_query($con, $query))
        {
            // gets all classes into array
            $classes = [];
            while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
            {
                $classes[(int)$row['id']] = (string)str_replace(".", "", $row['name']);
            }
            
            // sends new points to database
            for($i = 1; $i <= count($classes); $i++)
            {
                $query = "INSERT INTO points (value, activity_id, class_id) VALUES 
                (".$dataInput->{$classes[$i]}.", ".$actid.", ".$i.")";
                mysqli_query($con, $query);
            }
        }
    }
?>