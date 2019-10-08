let dni = document.getElementById("dni").value;
let email = document.getElementById("email").value;
let iban = document.getElementById("iban").value;
let password = document.getElementById("pass").value;
let username = document.getElementById("username").value;
let url = document.getElementById("url").value;
let ip = document.getElementById("ip").value;
let tcredito = document.getElementById("tcredito").value;

const validateDni = (dni) => {
    const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET'
    const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i
    const nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i
    const str = dni.toString().toUpperCase()

    if(!nifRexp.test(str) && !nieRexp.test(str)) console.log('DNI incorrecto')

    const nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2')

    const letter = str.substr(-1)
    const charIndex = parseInt(nie.substr(0, 8)) % 23

    if(validChars.charAt(charIndex) === letter) console.log('DNI vÃ¡lido')
    else console.log('DNI incorrecto')
}

//Validamos el dni con el método que se nos proporciona
validateDni(dni);

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(email)) console.log('email vÃ¡lido')
    else console.log('email incorrecto')
}

//Validamos el email con el método que se nos proporciona
validateEmail(email);

const validateIban = (iban) => {
    const ibanRegex = /([A-Z]{2})\s*\t*(\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d)\s*\t*(\d\d\d\d\d\d\d\d\d\d)/g

    if(ibanRegex.test(iban)) console.log('iban vÃ¡lido')
    else console.log('iban incorrecto')
}

//Validamos el iban con el método que se nos proporciona
validateIban(iban);

const validatePasswordComplex = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    if(passwordRegex.test(password)) console.log('password vÃ¡lido')
    else console.log('password incorrecto')
}

//Validamos el password con el método que se nos proporciona
validatePasswordComplex(password);

const validatePasswordModerate = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
    if(passwordRegex.test(password)) console.log('password vÃ¡lido')
    else console.log('password incorrecto')
}

//Validamos el password con el método que se nos proporciona
validatePasswordModerate(password);

const validateUsername = (username) => {
    //Alphanumeric string that may include _ and â€“ having a length of 3 to 16 characters â€“
    const usernameRegex = /^[a-z0-9_-]{3,16}$/
    if(usernameRegex.test(username)) console.log('username vÃ¡lido')
    else console.log('username incorrecto')
}

//Validamos el username con el método que se nos proporciona
validateUsername(username);

const validateUrl = (url) => {
    const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/
    if(urlRegex.test(url)) console.log('url vÃ¡lida')
    else console.log('url incorrecta')
}

//Validamos la url con el método que se nos proporciona
validateUrl(url);

const validateIP = (ip) => {
    const ipRegex = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/g
    if(ipRegex.test(ip)) console.log('ip vÃ¡lida')
    else console.log('ip incorrecta')
}

//Validamos la ip con el método que se nos proporciona
validateIP(ip);

const validateHexadecimal = (hexadecimal) => {
    const hexadecimalRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/
    if(hexadecimalRegex.test(hexadecimal)) console.log('hexadecimal vÃ¡lido')
    else console.log('hexadecimal incorrecto')
}

const validateCreditCard = (card) => {
    const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    if(creditCardRegex.test(card)) console.log('card vÃ¡lido')
    else console.log('card incorrecto')
}

//Validamos la tarjeta de credito con el método que se nos proporciona
validateCreditCard(tcredito);

validateEmail('dorian@gmail.com')