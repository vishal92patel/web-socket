<?php
require_once('connection.php');
if( isset($_POST['socket_id'])) {
    $postData = $_POST;
    echo logout($pdo, $postData);
}

function logout($pdo, $postDataVal){
    $sql = 'UPDATE users SET has_already_logged_in = :has_already_logged_in, last_seen = :last_seen WHERE socket_id = :socket_id';
    $stmt = $pdo->prepare($sql);
    if($stmt->execute(array("has_already_logged_in" => 0, "last_seen" => date('d-m-Y H:i:s'), "socket_id" => $postDataVal['socket_id']))){
        return json_encode(array(
            'success'=>'logout.'
        ));
    }else{
        return json_encode(array(
            'error'=>'problem with logout.'
        ));
    }
}
?>