<?php

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


echo "successful";

?>