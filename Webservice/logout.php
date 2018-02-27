<?php
require_once('connection.php');
if( isset($_POST['command']) && isset($_POST['socketId'])) {
    $postData = $_POST;
    echo logout($pdo, $postData);
}


// $postData = array('socket_id' => 'newSocketId123' ,'command' => 'tpCmd');
// echo logout($pdo, $postData);

function logout($pdo, $postDataVal){
    $sql = 'UPDATE users SET has_already_logged_in = :has_already_logged_in WHERE socket_id = :socket_id';
    $stmt = $pdo->prepare($sql);
    if($stmt->execute(array("has_already_logged_in" => 0,"socket_id" => $postDataVal['socket_id']))){
        return json_encode(array(
            "command" => $postDataVal['command'],
            'success'=>'logout.'
        ));
    }else{
        return json_encode(array(
            "command" => $postDataVal['command'],
            'error'=>'problem with logout.'
        ));
    }
}
?>