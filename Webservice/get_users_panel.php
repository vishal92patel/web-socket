<?php
require_once('connection.php');
if( isset($_POST['socket_id'])) {
    $protocol = ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $url = $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $profile_pic_path = str_replace('get_users_panel.php', 'user_profile_picture/', $url);
    $postData = $_POST;
    echo getAllUsersPanel($pdo, $profile_pic_path);
    // echo getUsersPanel($pdo, $postData);
}
// echo getAllUsersPanel($pdo, $profile_pic_path);
function getUsersPanel($pdo, $postDataVal){
   $data;
   $sql = 'SELECT * FROM users 
            JOIN users_profile_picture 
            ON users.id = users_profile_picture.user_id
            WHERE users.socket_id != :socket_id';
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array("socket_id" => $postDataVal['socket_id']));
    if($stmt->rowCount() > 0){
       $rows = $stmt->fetchAll();
       foreach($rows as $row){
          return json_encode(array(
             "full_name" => $row["full_name"],
             "has_already_logged_in" => $row["has_already_logged_in"],
             "last_seen" => $row["last_seen"],
             "profile_pic" => $row["path"],
             "socket_id" => $row["socket_id"]
          ));
       }
    }
}

function getAllUsersPanel($pdo, $profile_pic_path){
    $data = [];
    $sql = 'SELECT * FROM users 
             JOIN users_profile_picture 
             ON users.id = users_profile_picture.user_id';
     $stmt = $pdo->prepare($sql);
     $stmt->execute();
     if($stmt->rowCount() > 0){
        $rows = $stmt->fetchAll();
        foreach($rows as $row){
            array_push($data, array(
                "full_name" => $row["full_name"],
                "has_already_logged_in" => $row["has_already_logged_in"],
                "last_seen" => $row["last_seen"],
                "profile_pic" => $profile_pic_path.$row["path"],
                "socket_id" => $row["socket_id"])
            );
        }
    }
     return json_encode($data);
 }
?>