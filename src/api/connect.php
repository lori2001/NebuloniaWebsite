<?php

// db credentials

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'angular_db');
/*
define('DB_HOST', 'server60');
define('DB_USER', 'nebuloni_1');
define('DB_PASS', 'Wf^Fccq4LKm!');
define('DB_NAME', 'nebuloni_db');*/

// Connect with the database.
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();