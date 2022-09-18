<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$name = $_POST["user_id"];
$tweet= $_POST["user_tweet"];


$query = $sqli->prepare("INSERT INTO users(user_id,user_tweet) value(?,?,?,?,?)");
$query->bind_param("sssss",$name,$tweet);
$query->execute();


$response=[
    "user_id"=>$name,
    "user_tweet"=>$content,

];

echo json_encode($response);

?>