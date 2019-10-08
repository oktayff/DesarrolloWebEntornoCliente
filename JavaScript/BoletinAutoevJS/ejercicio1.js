function inicializar() {

    let nombres = [];
    let x;

    while(nombres.length < 5) {
        x = prompt("Introduzca un nombre");
        x.toUpperCase();
        if(nombres.indexOf(x) > -1) {
            alert("El nombre introducido existe");
        }else{
            nombres.push(x);
        }
    }

    nombres.sort();

    for(i=0; i<nombres.length; i++){
        let nombre = nombres[i];
        console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1));
       
    }
}