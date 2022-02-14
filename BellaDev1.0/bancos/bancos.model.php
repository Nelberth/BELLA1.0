<?php
	header('Content-Type: application/json');
	include_once("../server/conexion.php");
	include_once("../server/anti_inyeccion.php");

	class bancos extends conexion{
		public function __construct(){
			parent::__construct();
		}

		function ver_bancos($empezar=0, $buscar=''){
				$sql="call ver_bancos($empezar,'$buscar', 10)";              			
                $resultado=$this->conexion_db->query($sql);
	   			$verificar=$resultado->fetchAll(PDO::FETCH_ASSOC);
				echo json_encode($verificar);
				exit();
		}
		function eliminar_bancos($id){
			$sql="call eliminar_bancos($id)";
			$resultado=$this->conexion_db->query($sql);
			if ($resultado) {
				echo 1;
				exit();
			}else{
				echo 'error';
				exit();
			}
		}
		function actualizar_bancos($id,$tipo,$texto){
			if($texto!=''){	
					$tipo=seguridad($tipo);
					$sql=("UPDATE banco SET $tipo=:texto WHERE id = :id");
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
		}
		function agregar_bancos($nombre_banco,$numero_banco,$dinero_banco, $id_moneda){	
			$sql="call agregar_bancos('$nombre_banco','$numero_banco','$dinero_banco', $id_moneda)";
			$resultado=$this->conexion_db->query($sql);
			if ($resultado) {
				echo 1;
				exit();
			}else{
				echo 0;
				exit();
			}		
		}
		function paginacion_bancos($buscar=''){
			$sql="call paginacion_bancos('$buscar')";
			$resultado=$this->conexion_db->query($sql);
			$verificar=$resultado->rowCount();
			echo json_encode($verificar);
			exit();	
		}

	}