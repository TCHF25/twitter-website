<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$name = $_POST["user_id"];
$content = $_POST["content"];
$attachement = $_POST["attachement"];

$query = $sqli->prepare("INSERT INTO users(user_id,content,attachement) value(?,?,?,?,?)");
$query->bind_param("sssss",$name,$content,$attachement);
$query->execute();


$response=[
    "user_id"=>$name,
    "content"=>$content,
    "attachement"=>$attachement,

];

echo json_encode($response);

?>