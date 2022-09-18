<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


$name = $_POST["full_name"];
$email = $_POST["email"];
$phone = $_POST["phone_number"];
$unhashedpass = $_POST["password"];

$date = date("Y-m-d");

$hashedpass = hash("sha256",$unhashedpass);


$query = $sqli->prepare("INSERT INTO users(full_name,email,phone_number,password,date_joined) value(?,?,?,?,?)");
$query->bind_param("sssss",$name,$email,$phone,$hashedpass,$date);
$query->execute();

$response=[
    "full_name"=>$name,
    "email"=>$email,
    "phone_number"=>$phone,
    "password"=>$hashedpass
    
];
echo json_encode($response);

?>