function Mostrar()
{

	var numero; 
	numero = prompt ("Ingrese un número entre 0 y 9 inclusive.");
	numero = parseInt (numero);
	
	while (numero < 0 || numero > 9)
	{
		numero = prompt ("Ingrese SÓLO un número entre 0 y 9 inclusive");
	}

	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN