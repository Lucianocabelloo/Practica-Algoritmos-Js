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
