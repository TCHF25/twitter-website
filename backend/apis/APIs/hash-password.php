<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$unhashedpassword = $_POST["unhashedpassword"];

if($unhashedpassword != null){
$hashedpassword = hash("sha256",$unhashedpassword);

echo json_encode($hashedpassword);
}
?>