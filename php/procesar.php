<?php

//Es para importar los elementos de otro archivo .php
include("conexion.php");
include("DataConnection.class.php");


$nombre = $_POST['name'];
$proveedor = $_POST['provider'];
$cantidad = $_POST['cantidad'];
$precio = $_POST['precio'];
$fecha_Ll = $_POST['from'];
$fecha_Ca = $_POST['to'];

$connection = new DataConnection();

$registro1 = $connection->executeQuery("SELECT * from proveedor p where Nombre = '$proveedor'");

while($reg1 = mysql_fetch_array($registro1))
{
	
	$idProveedor = $reg1['RFC'];
	
}

//Crea la consulta a realizar
$connection->executeQuery("INSERT into materia_prima(Nombre, Unidad, Fecha_Llegada, Fecha_Caducidad) VALUES('$nombre', $cantidad, '$fecha_Ll', '$fecha_Ca')");



$registro2 = $connection->executeQuery("SELECT m.idMateria from materia_prima m where m.Nombre = '$nombre'");

while($reg2 = mysql_fetch_array($registro2))
{
	
	$idMateria = $reg2['idMateria'];
	
}

$connection->executeQuery("INSERT into materia_proveedor(Precio_lote, idMateria, Proveedor_RFC) VALUES($precio, $idMateria, '$idProveedor');", $con);

header("Location: http://localhost:8000/seproject/inventarios/ingresar_ma.htm");


exit;

?>

