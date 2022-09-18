<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$blocker = $_POST["id-follower"];
$blocked = $_POST["id-following"];

$query = $sqli->prepare("INSERT INTO users(id_follower,id_following) value(?,?,?,?,?)");
$query->bind_param("sssss",$follower,$following);
$query->execute();


$response=[
    "id_follower"=>$blocker,
    "id_following"=>$blocked,
    
];

echo json_encode($response);

?>