<?php
if ( !defined("__WEBSESSION__") ){
	define("__WEBSESSION__","");
	include("Empleado.class.php");

	class WebSession{

		private $empleado;
		private $sesion_activa;
		private $errors = array();
		
		public function __construct()
		{
			session_start();
			//if (isset($_POST["login"])){
				$login = Empleado::iniciarSesion("PEAJ910921HDFRLN08","juan");
				if ( $login != false ){
					$this->empleado = $login;
					$this->sesion_activa = true;
				}else{
					$this->empleado = NULL;
					$this->sesion_activa = false;
				}	
			//}
			$_SESSION["websession"] = serialize($this);
		}
		
		public function isSesionActiva(){
			return $this->sesion_activa;
		}
		
		public function getEmpleado()
		{
			return $this->empleado;
		}
	}
}
?>