<?php
class conexion{  
		public $conexion_db;
      public function __construct(){
         try{
            $this->conexion_db=new PDO("mysql:host=localhost; dbname=bella", "root", "");
            $this->conexion_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conexion_db->exec("SET CHARACTER SET utf8");
            return $this->conexion_db;
         }catch(Exeption $e){
            echo "La linea del error es ". $e->getLine();
         }
      }
}
$hola= new conexion();
$hola->conexion_db->query("SELECT * FROM usuarios");