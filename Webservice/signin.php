<?php
require_once('connection.php');
if( isset($_POST['email']) && 
isset($_POST['password']) && 
isset($_POST['socket_id'])) {
    $postData = $_POST;
    echo signin($pdo, $postData);
}

function signin($pdo, $postDataVal){
    $sql = 'SELECT * FROM users WHERE email = :email AND password = :password';
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array("email" => $postDataVal['email'],"password" => $postDataVal['password']));
    if($stmt->rowCount() == 1){
        while($row = $stmt->fetch()){
            if(setUserTologgedIn($pdo, $row['id'], $postDataVal['socket_id'])){
                return json_encode(array(
                    'success'=>'You have successfully logged in.',
                    'old_socket_id' => $row['socket_id']
                ));
            }else{
                return json_encode(array(
                    'error'=>'loggedIn.'
                ));
            }
        }
    }else{
        return json_encode(array(
            'error'=>'Invalid email or password, Try again.'
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