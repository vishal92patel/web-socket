<?php
require_once('connection.php');
if(isset($_POST['command']) && isset($_POST['old_socket_id']) && isset($_POST['new_socket_id'])) {
    $postData = $_POST;
    echo auto_signing($pdo, $postData);
}
function auto_signing($pdo, $postDataVal){
    if(searchUserWithSocketId($pdo, $postDataVal['old_socket_id'], $postDataVal['new_socket_id'])){
        return json_encode(array(
            "command" => $postDataVal['command'],
            'success'=> true
        ));
    }else{
        return json_encode(array(
            "command" => $postDataVal['command'],
            'error'=> true
        ));
    }
}

function searchUserWithSocketId($pdo, $old_socket_id ,$new_socket_id) {
    $sql = 'UPDATE users SET socket_id = :new_socket_id, has_already_logged_in = :has_already_logged_in WHERE socket_id = :old_socket_id';
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array("has_already_logged_in" => 1, "new_socket_id" => $new_socket_id, "old_socket_id" => $old_socket_id));
    if($stmt->rowCount() == 1){
       return true;
    } else {
       return false;
    }
 }
?>