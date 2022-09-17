<?php

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