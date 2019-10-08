const button = document.getElementById('boton');
button.addEventListener('click', () => {

    let lista = document.getElementById('lista');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => { 
            for(registro of res) {
                let li = document.createElement('li');
                let texto = document.createTextNode(registro.id + " - " + registro.name);
                li.appendChild(texto);
                lista.appendChild(li);
            }
               
        }

        )})
