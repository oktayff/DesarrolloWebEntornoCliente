function anadirEquipo() {
	
	//Creamos las filas y columnas necesarias
	let fila = document.createElement("tr");
	let col1 = document.createElement("td");
	let col2 = document.createElement("td");
	let col3 = document.createElement("td");

	//Recuperamos el valor de las columnas
	let valorPos = document.getElementById("posicion").value;
	let valorEquip = document.getElementById("equipo").value;
	let valorPunt = document.getElementById("puntos").value;

	//Creamos los nodos de texto en los que ira el valor de los campos antes mencionados
	let objetoPos = document.createTextNode(valorPos);
	let objetoEquip = document.createTextNode(valorEquip);
	let objetoPunt = document.createTextNode(valorPunt);
	let objetoFila = document.getElementsByTagName("tr")[valorPos];

	//Indicamos el nodo a agregar por debajo
	col1.appendChild(objetoPos);
	col2.appendChild(objetoEquip);
	col3.appendChild(objetoPunt);
	fila.appendChild(col1);
	fila.appendChild(col2);
	fila.appendChild(col3);
	objetoFila.parentNode.replaceChild(fila, objetoFila);

}
