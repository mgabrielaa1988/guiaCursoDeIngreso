function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var nota
nota = Math.floor (Math.random() * (11 - 1)) + 1;

if (nota >= "9")
{
	alert (nota + " : Excelente");
}
else
{
	if (nota >= "4")
	{
		alert (nota + " : Aprobo");
	}
	else
	{
		alert (nota + " : Vamos, la próxima se puede");
	}
}

}//FIN DE LA FUNCIÓN