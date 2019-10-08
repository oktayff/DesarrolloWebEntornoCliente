let usuarios = [];

const user1 = {

    nombre: 'Oktay',
    id: 1
}

const user2 = {

    nombre: 'Juan',
    id: 2
}

const user3 = {

    nombre : 'Carmen',
    id: 3
}

usuarios.push(user1, user2, user3);

const getUsuario = (id, cb) => {
    const usuario = usuarios.find(usuario => usuario.id == id) 
        if (!usuario) cb('Not exist a user with id ' + id)
        else cb(null, usuario);
}

const boton = document.getElementById("Enviar");
boton.addEventListener('click', () => {
    let idUsuario = document.getElementById("id").value;
    getUsuario (idUsuario, (err, usuario) => {
        if (err) return console.log(err);
        console.log('El nombre buscado es ' +usuario.nombre);
    });
});
