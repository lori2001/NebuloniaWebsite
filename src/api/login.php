<?php
// Validates password
// By:. Kovacs Lorand @ 2020
    require 'password.php';

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$passwordInput = $request->data;
    $response = true;

    if(strcmp($passwordInput, $password) == 0) {
        $response = true;
       
    } else {
        $response = false;
    }

    echo json_encode($response);
?>