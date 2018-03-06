<?php
header('Content-Type: application/json');
date_default_timezone_set('Asia/Kolkata');
   try {
      $pdo = new PDO('mysql:host=localhost;dbname=websocket', 'root', '');
   }
   catch (PDOException $e) {
      // echo 'Error: ' . $e->getMessage();
      echo json_encode(array(
         "error" => "DB not connected."
      ));
      exit();
   }
?>