// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
let solicitarTexto = prompt("Ingrese un texto para mostrar su primera vocal")
 let vocales = "aeiou"
 let primeraVocal = ""
 let textoMinuscula = solicitarTexto.toLocaleLowerCase()

 for(let indiceVocales = 0; indiceVocales < solicitarTexto.length; indiceVocales++){


     if(vocales.includes(textoMinuscula[indiceVocales])){
         primeraVocal = `${textoMinuscula[indiceVocales]}`
         break

     }
 }

 document.write(`<p>La primera vocal es: ${primeraVocal} </p>`)