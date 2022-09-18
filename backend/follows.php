<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$follower = $_POST["id-follower"];
$followed = $_POST["id-followed"];

$query = $sqli->prepare("SELECT * FROM follows");
$query->execute();
$results = $query->get_result();


$response=[
    "id_follower"=>$follower,
    "id_following"=>$following,
    
];

echo json_encode($response);

?>