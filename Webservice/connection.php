<?php
header('Content-Type: application/json');
   try {
      $pdo = new PDO('mysql:host=localhost;dbname=websocket', 'root', '');
   }
   catch (PDOException $e) {
      echo 'Error: ' . $e->getMessage();
      exit();
   }
?>