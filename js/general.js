 function elimina() 
            {
                if (confirm("¿Desea eliminar la notificación")) 
                {
                    alert("La notificación ha sido eliminada exitosamente")
                }
                
            }
			
function sendit() {
		        alert("Se ha enviado la notificación");
		        document.formulario.mensaje.value = "";

		    }


function valida()
{
		alert("El producto ha sido registrado exitosamente")
		window.location='GestiónProducto.htm'
}
function validaE() {
    alert("El empleado ha sido registrado exitosamente")
    window.location = 'GestionEmpleado.htm'
}
function validaModificar()
{
		alert("El producto ha sido modificado exitosamente")
		window.location='GestiónProducto.htm'
}
function validarReporte()
{

	if(document.SolicitarRepo.tipo_reporte.selectedIndex==0)
	{
		alert("El tipo de reporte es un campo obligatorio")
		document.SolicitarRepo.tipo_reporte.focus()
		return 0;
	}
	else
	{
		if(document.SolicitarRepo.tipo_reporte.selectedIndex==1)
		{
			window.location='ReporteVentas.htm'
		}
		
	}
	
	
}

function cancelar(){
	
	window.location='GestiónProducto.htm'
}
function cancelarE() {

    window.location = 'GestionEmpleado.htm'
}


function cancelarGeneral(){
	
	window.location='Administrador.htm'
}


function eli(){	
	resp=confirm("¿Desea eliminar el producto?")
	if(resp==true)
	{
		alert("El producto ha sido eliminado exitosamente")
	}
}
function eliEmp() {
    resp = confirm("¿Desea eliminar el empleado?")
    if (resp == true) {
        alert("El empleado ha sido eliminado exitosamente")
    }
}

//funciones de ventas

function validaVentas()
{
		window.location='SolicitarReporte.htm'
}
function cancelarVentas(){
	
	window.location='SolicitarReporte.htm'
}

function aparece(){
	if (document.Rvalida.filtro[0].checked){ 
	  document.Rvalida.pedidos.disabled=false;
	  document.Rvalida.ventas.disabled=true;
	  document.Rvalida.ventas.value=0
	  document.Rvalida.pedidos.selectedIndex=0
	  	 
	}
	else{
	if(document.Rvalida.filtro[1].checked ){
	document.Rvalida.ventas.disabled=false;
	document.Rvalida.pedidos.disabled=true;
	document.Rvalida.pedidos.value=0
	document.Rvalida.ventas.selectedIndex=0
	
	
		 }
	}
	
	
}

//funciones de inventarios
function aceptInventario()
{
	alert("El ingredient ha sido registrado exitosamente")
	window.location='AltasProducto.htm'
}

function cancelarIngrediente()
{
	window.location='AltasProducto.htm'
}

