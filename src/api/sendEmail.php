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
    $headers = "From:" .$email. "\r\n";
    $message = "Név: " . $name . "\n\n" .
                $message;

    $to ="office@nebulonia.ro";
    // $to ="nebulonia.alf@gmail.com";

    // send
    $ok = mail($to, $title, $message, $headers);

    // send response
    $headers = "From:" .$to. "\r\n";
    $headers .= "Reply-To: ". strip_tags($email) . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $to = $email;
    $message =
    "<!doctype html>
    <html lang=\"hu\">
        <body>
        Üzenetét magkaptuk! Hamarosan elolvassuk!<br>
        Mesajul dumneavoastră a fost primit! îl vom citi imediat!<br>
        Your message has been submited! We will read it shortly!<br>
        <br><br>
        -Robot-
        <a href=\"www.nebulonia.ro\">www.nebulonia.ro</a>
        <br>
        <img src=\"http://www.nebulonia.ro/assets/images/logo.png\" width=\"200px\" height=\"200px\" />
        </body>
    </html>
    ";

    $title = "Mesajul a fost primit - Üzenetét megkaptuk - We recieved your message";

    mail($to, $title, $message, $headers);

    // if something went wrong throw an error
	if(!($ok)){
		return http_response_code(421);
	}	
}
?>