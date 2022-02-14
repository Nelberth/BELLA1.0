<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Request-Method: *");
header("Access-Control-Request-Headers: *");
require_once 'auth.model.php';
require_once '../server/respuestas.model.php';

    $auth = new auth;
    $respuestas=new respuestas();
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $data=json_decode(file_get_contents('php://input'));
       
        if(isset($data->user) && isset($data->password)){
            $auth->login($data->user,$data->password);
        }else{    
          echo $respuestas->error_400();
        }
    }else{
        echo 'Metodo no permitido';
    }

?>