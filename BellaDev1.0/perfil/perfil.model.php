<?php
	header('Content-Type: application/json');
	include_once("../server/conexion.php");
	include_once("../server/anti_inyeccion.php");
	class perfil extends conexion{
		public function __construct(){
			parent::__construct();
		}
        function ver_nombre_perfil(){
            echo json_encode($_SESSION['user']);
            exit();
    }
		/*function ver_usuario($empezar=0, $buscar=''){
				$sql="call ver_usuario($empezar,'$buscar',10)";	
				$resultado=$this->conexion_db->query($sql);
	   			$verificar=$resultado->fetchAll(PDO::FETCH_ASSOC);
				$resultado->closeCursor();
				echo json_encode($verificar);
				exit();
		}
		function eliminar_usuario($id){
			$sql=("call eliminar_usuario($id)");
			$resultado=$this->conexion_db->query($sql);
			if ($resultado) {
				echo 1;
				exit();
			}else{
				echo 'error';
				exit();
			}
		}
		
		function agregar_usuario($user,$password,$rol){
			$sql="call disponible_usuario('$user')";
			$resultado=$this->conexion_db->query($sql);
			$verificar=$resultado->rowCount();
			$resultado->closeCursor();
			if($verificar==0){
				$encriptado=password_hash($password, PASSWORD_DEFAULT);
				$sql="call agregar_usuario('$user','$encriptado','$rol')";
				$resultado=$this->conexion_db->query($sql);
				if ($resultado) {
					echo 1;
					exit();
				}else{
					echo 0;
					exit();
				}
			}else{
				echo 2;
				exit();
			}
			
		}
		function paginacion_usuario($buscar=''){
			$sql="call paginacion_usuario('$buscar')";
			$resultado=$this->conexion_db->query($sql);
			$verificar=$resultado->rowCount();
			echo json_encode($verificar);
			exit();	
		}
		function disponible_usuario($user=''){
			$sql="SELECT id FROM usuarios WHERE user='$user'";
			$resultado=$this->conexion_db->query($sql);
			$verificar=$resultado->rowCount();
			if($verificar==0){
				echo 1;
				exit();
			}else{
				echo 0;
				exit();
			}
		
		}
		function actualizar_usuario($id,$tipo,$texto){
			if($texto!=''){	
				$tipo=seguridad($tipo);
				if($tipo=='password'){
					$texto = password_hash($texto, PASSWORD_DEFAULT);
				}						
					$sql=("UPDATE usuarios SET $tipo=:texto WHERE id = :id");
					$resultado=$this->conexion_db->prepare($sql);
					$resultado->execute(array(':texto'=>$texto,':id'=>$id));
					if ($resultado) {
						echo 1;
						exit();
					}else{
						echo "0";
						exit();
					}			
			}else{
				echo 2;
				exit();
			}
		}*/
	}