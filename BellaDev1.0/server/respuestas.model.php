<?php
header('Content-Type: application/json');
class respuestas{
         
        public $response = [ 'estado' => '',
        'codigo' => '',
        'resultado' => ""];
 
 
    public function error_200($mensaje='Datos incorrectos'){
        $this->response['estado'] = 'ok';
        $this->response['codigo'] = '200';
        $this->response['resultado'] = $mensaje;
        return json_encode($this->response);
    }
    public function error_400($mensaje="Datos enviados incompletos o con formato incorrecto"){
        $this->response['estado'] = 'error';
        $this->response['codigo'] = '400';
        $this->response['resultado'] = $mensaje;
        return json_encode($this->response);
    }
    public function error_401($mensaje='Faltan los datos de autentificacion'){
        $this->response['estado'] = 'error';
        $this->response['codigo'] = '401';
        $this->response['resultado'] = $mensaje;
        return json_encode($this->response);
    }
    public function error_405($mensaje="Metodo no permitido"){
        $this->response['estado'] = 'error';
        $this->response['codigo'] = '405';
        $this->response['resultado'] = $mensaje;
        return json_encode($this->response);
    }
    public function error_500($mensaje='Error interno del servidor'){
        $this->response['estado'] = 'error';
        $this->response['codigo'] = '500';
        $this->response['resultado'] = $mensaje;
        return json_encode($this->response);
    }
  
}
?>