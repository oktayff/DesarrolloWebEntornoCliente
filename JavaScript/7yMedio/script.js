//Funcion que reinicia la partida
const restart = document.getElementById("restart");

restart.addEventListener('click', (e) => {window.location.reload();

});

//Baraja
let miCarta = new Array(11);
let tipoCarta = ['Bastos', 'Copas', 'Espadas', 'Oros'];
let puntosJugador = 0;
let puntosBanca = 0;
let puntosTotal = 0;
let cartasRepetidas = [];

for(i=1; i<=10; i++) {
    miCarta[i] = tipoCarta;
}

const cartaJug = document.getElementById("cartaJug");
const cartaBanca = document.getElementById("cartaBan");







