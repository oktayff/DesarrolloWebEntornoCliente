//Crea una página que muestre por pantalla un cronómetro y la fecha actual. 
//El formato que deberá aparecer es lo siguiente.
let fecha1 = new Date();
let dia = fecha1.getDate();
let mes = fecha1.getMonth()+1;
let ano = fecha1.getFullYear();
let intervalo;


const time = () => {

    let fecha2 = new Date();
    let hora = fecha2.toLocaleTimeString();
    document.getElementById("input").innerHTML = "Hoy es " +dia + "-" +mes + "-" +ano + " y son las " +hora + " horas";

};

intervalo = setInterval(time, 1000);



