const registrarUsuario = document.getElementById('registrar');
const borrarDatos = document.getElementById('borrar');
const consultarUser = document.getElementById('consultarUsuario');
const consultarLogin = document.getElementById('consultarLogin');
const tabla = document.getElementById('tabla');

//Evento para almacenar los datos de un usuario
registrarUsuario.addEventListener('click', (e) => {

    const nickname = document.getElementById('nickname').value;
    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;
    const dni = document.getElementById('dni').value;
    const edad = document.getElementById('edad').value;

    //Funcion que valida el DNI introducido
    const validatePasswordModerate = (password) => {
        //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
        const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
        if(passwordRegex.test(password)) console.log('password vÃ¡lido')
        else console.log('password incorrecto')
    }

    let fecha = new Date();
    fecha.getDate();

        let Usuario = {

            name: nombre,
            pass: password,
            dni: dni,
            age: edad,
            date: fecha
        }

        //Almacenamos solo el nickname
        localStorage.setItem("nickname", nickname);

        //Almacenamos el objeto Usuario
        localStorage.setItem("usuario", JSON.stringify(Usuario));

        //Ejecutamos la funcion que valida la contraseña
        validatePasswordModerate(password);

        e.preventDefault();
})

//Evento para limpiar los datos almacenados
borrarDatos.addEventListener('click', (e) => {

    localStorage.clear();

    e.preventDefault();
})

//Evento que introduce los datos del usuario buscado en una tabla
consultarUser.addEventListener('click', (e) => {

    if(nickname === "nickname".value) {

        let persona = JSON.parse(localStorage.getItem('persona'));

        let nombree = persona[0];
        let dnii = persona[1];
        let edadd = persona[2];

        tr = document.createElement('tr');
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        td3 = document.createElement('td');

        td1.appendChild(nombree);
        td2.appendChild(dnii);
        td3.appendChild(edadd);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tabla.appendChild(tr);

        e.preventDefault();

    }else{

        alert('El usuario no existe');
    }
})








