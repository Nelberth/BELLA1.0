<?php
	header('Content-Type: application/json');
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Request-Method: *");
	header("Access-Control-Request-Headers: *");
	include_once("./perfil.model.php");
	require_once '../server/respuestas.model.php';
	session_start();
	$datos = json_decode(file_get_contents('php://input'));
	$respuestas= new respuestas;
	if($datos != NULL){
		if(isset($_SESSION["token"]) && isset($datos->token)){
			if(($datos->token)==$_SESSION["token"]){
				$hola = new perfil();
				$opcion= $datos->opcion;
				if($opcion==1){
					$hola->ver_nombre_perfil();
				}
			}else{
				echo $respuestas->error_401();
			}
		}else{
			echo $respuestas->error_401();
		}	
	}else{
		echo $respuestas->error_401();
	}