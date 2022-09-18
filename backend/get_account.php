<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


$id = $_POST["id"];


$query = $sqli->prepare("SELECT * FROM accounts WHERE user_id = $id");
$query->execute();
$results = $query->get_result();

$response=[];

while($a=$results->fetch_assoc()){
    $response[]=$a;
}

echo json_encode($response);
?>