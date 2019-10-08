function anadirElemento() {

	let ul = document.getElementById("lista");
	let li = document.createElement("li");
	let valorTexto = document.getElementById("anadir").value;
	let valorPosicion = document.getElementById("indicar").value;
	li.appendChild(document.createTextNode(valorTexto));
  	ul.appendChild(li);
  	let anadirNodo = document.getElementsByTagName("li")[valorPosicion-1];
  	ul.insertBefore(li, anadirNodo);

}

function borrarElemento() {

	let ul = document.getElementById("lista");
	let obtenerPos = document.getElementById("indicar").value;
	let nodoBorrar = document.getElementsByTagName("li")[obtenerPos-1];
	ul.removeChild(nodoBorrar);
}

