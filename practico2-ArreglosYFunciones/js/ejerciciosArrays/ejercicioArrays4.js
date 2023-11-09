// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.


function numeroParoImpar(numero) {
    
    if(numero % 2 === 0){
        return " par";
    }
    else{
        return " impar";
        }
}

let numeroElegido = Math.floor( Math.random() * 100)
console.log(numeroElegido)

document.write(`<p> El numero elegido es ${numeroElegido} y es${numeroParoImpar(numeroElegido)} </p>`)
