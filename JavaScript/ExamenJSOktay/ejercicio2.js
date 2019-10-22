const select = document.getElementById('select');
const consulta = document.getElementById('consulta');
const tabla = document.getElementById('tabla');
const idUser = document.getElementById('idUsuario');

//Creamos un evento
consulta.addEventListener('click', (e) => {

    //Le decimos al evento que no ejecute la accion por defecto de click
    e.preventDefault();

   obtenerDatos(select.value);

});


obtenerDatos = (id) => {

    //Si el id es igual a 0 entramos
    if (id == 0) {

        //Pasamos la URL a la funcion fetch que es como vamos a cargar los datos del link
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) 
            .then(res => res.json())
            .then(res => {

                //Recorremos los datos obtenidos en res como respuesta
                for(registro of res) {

                    //Creamos un elemento option por cada nombre 
                    let option = document.createElement('option');

                    //Creamos un nodo de texto que contendra el nombre
                    let datos = document.createTextNode(registro.name);

                    //Cargamos la variable option con el nombre
                    option.appendChild(datos);

                    //Adjuntamos option a nuestro select
                    select.appendChild(option);

                }
        });

    }else{

        //Cargamos la constante con el valor del select que ya no esta vacio
        const name = select.value;

        //Cargamos la constante con el valor del campo
        const id = idUser.value;

        //Pasamos la URL a la funcion fetch que es como vamos a cargar los datos del link
        fetch('https://jsonplaceholder.typicode.com/users?id='+id+'&&name'+name)
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .then(res => {

                //Recorremos los datos obtenidos en res como respuesta
                for(elemento of res) {

                    //Creamos una variable por cada campo que queremos utilizar
                    let idd = document.createTextNode(elemento.id);
                    let namee = document.createTextNode(elemento.name);
                    let usernamee = document.createTextNode(elemento.username);
                    let emaill = document.createTextNode(elemento.email);
                    let addresss = document.createTextNode(elemento.address);
                    let phonee = document.createTextNode(elemento.phone);

                    //Creamos un tr y 6 tds
                    tr = document.createElement('tr');
                    td1 = document.createElement('td');
                    td2 = document.createElement('td');
                    td3 = document.createElement('td');
                    td4 = document.createElement('td');
                    td5 = document.createElement('td');
                    td6 = document.createElement('td');

                    //Adjuntamos el valor de las variables a su td correspondiente
                    td1.appendChild(idd);
                    td2.appendChild(namee);
                    td3.appendChild(usernamee);
                    td4.appendChild(emaill);
                    td5.appendChild(addresss);
                    td6.appendChild(phonee);
                    
                    //Adjuntamos los tds al tr que tenemos
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tr.appendChild(td6);

                    //Adjuntamos el tr a nuestra tabla
                    tabla.appendChild(tr);

                }
            })
    }
}
