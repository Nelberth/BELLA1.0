<?php
    require_once '../server/conexion.php';
    require_once '../server/respuestas.model.php';
    session_start();
    class auth extends conexion{
        public $respuestas;
        public function __construct(){
			parent::__construct(); 
            $this->respuestas = new respuestas();          
		}          
        function login($user='',$password=''){  
             $sql="SELECT * FROM usuarios Where user='$user' AND borrado=1";
             $resultado= $this->conexion_db->query($sql);
             $verificar2=$resultado->fetchAll(PDO::FETCH_ASSOC);
             $verificar=$resultado->rowCount();
			if($verificar==1){
                if(password_verify($password, $verificar2[0]['password'])){
                    $valor=true;
				    $token=bin2hex(openssl_random_pseudo_bytes(16,$valor));
                    $_SESSION['user']=$user;
                    $_SESSION["token"]=$token;
                    echo json_encode($_SESSION["token"]);
                }else{
                    echo $this->respuestas->error_401('Contrasena incorrecta');
                }
                
			}else{
				echo $this->respuestas->error_401('usuario no existe');
			}
        }
    }
?>