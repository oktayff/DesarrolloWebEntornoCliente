//EJERCICIO 1

let box = document.getElementById('box');

//Cambia el color de la caja a verde cuando el puntero está dentro
box.addEventListener('mouseenter', () => {box.style.background = 'green';
});


//Cambia el color de la caja a rojo cuando el puntero sale de la caja
box.addEventListener('mouseleave', () => {box.style.background = 'red';
});

//box.classList.replace('red','green);

//Cuando pulsamos botón izquierdo estando en la caja aparecerá el mensaje "Has pulsado la caja"
box.addEventListener('mousedown', () => {console.log("Has pulsado la caja");
});

//Cuando soltemos el botón izquierdo aparecerá el mensaje "Has soltado el botón	izquierdo dentro de	la caja"
box.addEventListener('mouseup', () => {console.log("Has soltado el botón izquierdo	dentro de la caja");
});

//EJERCICIO 2

let input = document.getElementById('texto');

//Al pulsar una tecla aparecerá el mensaje "Has pulsado una tecla" y la tecla que hemos pulsado
input.addEventListener('keydown', () => {console.log("Has pulsado una tecla " + event.key);    
});

//Al soltar una tecla aparecerá el mensaje "Has soltado una tecla" y la tecla que hemos soltado
input.addEventListener('keyup', () => {console.log("Has soltado una tecla");
});

//EJERCICIO 3

let info = [];
let boton = document.getElementById('boton');
let texto = document.getElementById('ejer2');

boton.addEventListener('click', () => {
    texto.addEventListener('keydown', () => {
        info.push(event.key)
        console.log(info);
    });
});

//EJERCICIO 4

const gallery = document.getElementById('gallery');

gallery.addEventListener('click', (e) => {e.target.classList.toggle('rojo');
    console.log("Has pulsado el numero " + e.target.textContent);//Saca el numero que hemos pulsado

});


