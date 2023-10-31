// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
let solicitarTexto = prompt("Ingrese un texto para invertirlo");
let textoInvertido = solicitarTexto.split("").reverse().join("");
document.write(`<p>Tu texto invertido sera: ${textoInvertido}</p>`);
