<?php
// Validates password
// By:. Kovacs Lorand @ 2020
require 'password.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$pw = $request->data;
if(strcmp($pw, $password) == 0) echo json_encode("True");
else echo json_encode("False");
?>