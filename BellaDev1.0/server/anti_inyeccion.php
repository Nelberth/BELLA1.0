<?php
	function seguridad($hola){	
	$hola=htmlentities(addslashes($hola), ENT_QUOTES);
	return $hola;
}