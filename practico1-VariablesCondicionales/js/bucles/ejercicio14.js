// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
let solicitarTexto = prompt("Ingrese un texto para mostrarlo en mayusculas")
let textoSeparado = solicitarTexto.split("").join("-")

 document.write(`<p>${textoSeparado}</p>`)