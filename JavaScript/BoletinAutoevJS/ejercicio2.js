function insertar() {

	let tabla = (document.getElementById("miTabla").rows.length)-1;

	let num = prompt("Introduzca el numero de empleado");
	let nombre = prompt("Introduzca el nombre del empleado");
	let apellidos = prompt("Introduzca los apellidos del empleado");

	let dnis = [];

	for(let i=1; i<=tabla; i++){

		dnis[i-1] = document.getElementsByTagName("td")[(i*4)-3].textContent;
	}

	console.log(dnis);

	let insertado;

	do {
		insertado = false;

		let dni = prompt("Introduzca el dni del empleado");

		for(let i=0; i<=dnis.length; i++){
			if(dnis[i].includes(dni)){
				alert("El dni introducido existe");
				insertado = false;
			}else{
				insertado = true;
			}

		}

	let fila = tabla.insertRow(0);
	let col1 = fila.insertCell(0);
	let col2 = fila.insertCell(1);
	let col3 = fila.insertCell(2);
	let col4 = fila.insertCell(3);

	document.getElementById("numemp").innerHTML = num;
	document.getElementById("dniemp").innerHTML = dni;
	document.getElementById("nomemp").innerHTML = nombre;
	document.getElementById("apemp").innerHTML = apellidos;

	}while(insertado === false);
}

function borrar() {

	let tabla = document.getElementById("miTabla");

}

function modificar() {


}