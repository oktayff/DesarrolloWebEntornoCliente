let fecha1;
let hora;
let minutos;
let segundos;
let intervalo;

const time = () => {

    fecha1 = new Date();
    hora = fecha1.getHours();
    minutos = fecha1.getMinutes();
    segundos = fecha1.getSeconds();
    document.getElementById("input").innerHTML = "Son las " +hora +":" +minutos +":" +segundos +" horas";

};

intervalo = setInterval(time, 1000);

const activar = document.getElementById("activar");

    activar.addEventListener('click', (e) => {

        let intervalo = setInterval(() => {

            let horaa = document.getElementById('horaa').value;
            let minutoss = document.getElementById('minutoss').value;

            if(hora == horaa && minutos == minutoss) {
                let confirmacion = confirm("RINGGGGGGGGGGG");
                if(confirmacion == true) {
                    setTimeout(() => {  
                    }, 120000);
                    clearInterval(intervalo);
                }else{
                    clearInterval(intervalo);
                }
            }

    }, 0);

});