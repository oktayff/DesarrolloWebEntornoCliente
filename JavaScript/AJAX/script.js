const button = document.getElementById('boton');
button.addEventListener('click', () => {

    let xhr;
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject('Microsoft.XMLHTTP');

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => {
        const datos = JSON.parse(data.target.response);
        let lista = document.getElementById('lista');
            for(registro of datos) {
                let li = document.createElement('li');
                let texto = document.createTextNode(registro.id + " - " + registro.name);
                li.appendChild(texto);
                lista.appendChild(li);
                
            }
    
    });

    xhr.send();

});