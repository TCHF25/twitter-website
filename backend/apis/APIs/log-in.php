<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$query = $sqli->prepare("SELECT email,password FROM users");
$query->execute();
$results = $query->get_result();

$response=[];

while($a=$results->fetch_assoc()){
    $response[]=$a;
}

echo json_encode($response);

?>