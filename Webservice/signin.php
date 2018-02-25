<?php
require_once('connection.php');
if( isset($_POST['email']) && 
isset($_POST['password']) && 
isset($_POST['command']) && 
isset($_POST['socketId'])) {
    $postData = $_POST;
    echo signin($pdo, $postData);
}

// $postData = array('email' => 'v@y.com','password' => '1234567890', 'socket_id' => 'newSocketId123' ,'command' => 'tpCmd');
// echo signin($pdo, $postData);

function signin($pdo, $postDataVal){
    $sql = 'SELECT * FROM users WHERE email = :email AND password = :password';
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array("email" => $postDataVal['email'],"password" => $postDataVal['password']));
    if($stmt->rowCount() == 1){
        while($row = $stmt->fetch()){
            if(setUserTologgedIn($pdo, $row['id'], $postDataVal['socket_id'])){
                return json_encode(array(
                    "command" => $postDataVal['command'],
                    'success'=>'loggedIn.'
                ));
            }else{
                return json_encode(array(
                    "command" => $postDataVal['command'],
                    'error'=>'loggedIn.'
                ));
            }
        }
    }else{
        return json_encode(array(
            "command" => $postDataVal['command'],
            'error'=>'Email/Password invalid.'
        ));
    }
}

function setUserTologgedIn($pdo, $userId, $socket_id){
    $sql = 'UPDATE users SET has_already_logged_in = :has_already_logged_in, socket_id = :socket_id WHERE id = :id';
    $stmt = $pdo->prepare($sql);
    if($stmt->execute(array("id" => $userId,"has_already_logged_in" => 1,"socket_id" => $socket_id))){
        return true;
    }else{
        return false;
    }
    //echo $stmt->rowCount() . " records UPDATED successfully";
}
?>