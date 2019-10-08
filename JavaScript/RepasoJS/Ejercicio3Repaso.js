function mostrarTabla() {

	let ciudades = ["Sevilla", "Cadiz", "Huelva", "Malaga", "Granada", "Almeria", "Jaen", "Cordoba"];

	ciudades.sort();

	let body = document.getElementsByTagName("body")[0];
	let tabla = document.createElement("table");
	let tbody = document.createElement("tbody");


		for(let j=0; j<ciudades.length; j++) {

			let fila = document.createElement("tr");
			let columna = document.createElement("td");
			let texto = document.createTextNode(ciudades[j]);
			columna.appendChild(texto);
			fila.appendChild(columna);
			tabla.appendChild(fila);
		}

		tabla.appendChild(tbody);
		body.appendChild(tabla);
		tabla.setAttribute("border", 1);
}
