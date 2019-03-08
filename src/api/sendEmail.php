<?php

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    // Extract the data.
    $request = json_decode($postdata);

    // Place data into variables
    $email = $request->email;
    $name = $request->name;
    $message = $request->message;
    $title = $request->title;

    // Validate.
    if ($email === '' || $name === '' || $message === '' || $title === '') {
        return http_response_code(400);
    }

    // Removing vulnerabilities
    $headers = "From: NebuloniaWebsite";
    $message = "Email: " . $email . " -- Név: " . $name . "\n\n" .
                $message;

    $to ="nebulonia.alf@gmail.com";

    // send
    $ok = mail($to, $title, $message, $headers);

    // if something went wrong throw an error
	if(!($ok)){
		return http_response_code(421);
	}	
}
?>