<?php
require_once('connection.php');
if(isset($_POST['fullName']) && 
isset($_POST['email']) && 
isset($_POST['password']) &&
isset($_POST['gender']) && 
isset($_POST['command']) && 
isset($_POST['profilePicture'])
) {
   $postData = $_POST;
   echo signup($pdo, $postData);   
}else{
   if(isset($_POST['command'])){
      echo json_encode(array(
         "command" => $_POST['command'],
         "error" => "Data not posted properly."
      ));
   }else{
      echo json_encode(array(
         "error" => "Data not received."
      ));
   }
}
function signup($pdo, $postDataVal){
        if(!checkEmailExist($pdo, $postDataVal['email'])){
           $sql = 'INSERT INTO users (full_name, email, password, gender, has_already_logged_in, socket_id) values (:full_name, :email, :password, :gender, :has_already_logged_in, :socket_id)';
           $stmt = $pdo->prepare($sql);
           if($stmt->execute(
               array(
                  "full_name" => $postDataVal['fullName'],
                  "email" => $postDataVal['email'],
                  "password" => $postDataVal['password'],
                  "gender" => $postDataVal['gender'], 
                  "has_already_logged_in" => 0,
                  "socket_id" => 0
               )
              )
            ){
               $getNewImgName = convertBase64ToImage($postDataVal);
               insertUserProfilePicture($pdo, $pdo->lastInsertId(), $getNewImgName);
               return json_encode(array(
                  "command" => $postDataVal['command'],
                  "success" => "Account created successfully."
               ));
            }else{
            return json_encode(array(
               "command" => $postDataVal['command'],
               "error" => "Data not inserted for signup user."
               ));
            }
        }else {
           return json_encode(array(
            "command" => $postDataVal['command'],
            "error" => "Email address is already exist."
           ));
        }
}

function checkEmailExist($pdo, $emailValue) {
   $sql = 'SELECT email FROM users WHERE email = :email';
   $stmt = $pdo->prepare($sql);
   $stmt->execute(array("email" => $emailValue));
   if($stmt->rowCount() > 0){
      return true;
   } else {
      return false;
   }
}

function insertUserProfilePicture($pdo, $lastInsertId, $getNewImgName){
   $sql = 'INSERT INTO users_profile_picture (user_id, path) values (:user_id, :path)';
   $stmt = $pdo->prepare($sql);
   $stmt->execute(
      array(
         "user_id" => $lastInsertId,
         "path" => $getNewImgName
      )
   );
}

function updateUserProfilePicture($pdo, $userId, $path){
   $sql = 'UPDATE users_profile_picture SET path = :path WHERE user_id = :user_id';
   $stmt = $pdo->prepare($sql);
   $stmt->execute(
      array(
         "user_id" => $userId,
         "path" => $path
      )
   );
   return json_encode(array("success" => "Your profile picture updated successfully."));
}

function convertBase64ToImage($postDataVal){
   define('UPLOAD_DIR', 'user_profile_picture/');
   // $image_parts = explode(";base64,", $postDataVal['profilePicture']['base64Img']);
   // $image_type_aux = explode("image/", $image_parts[0]);
   // $image_type = $image_type_aux[1];
   // uniqid(); to get uniq id
   $newImgName =  uniqid().'.'.$postDataVal['profilePicture']['extension'];
   $image_base64 = base64_decode($postDataVal['profilePicture']['base64Img']);
   $file = UPLOAD_DIR . $newImgName;
   file_put_contents($file, $image_base64);
   return $newImgName;
}
?>