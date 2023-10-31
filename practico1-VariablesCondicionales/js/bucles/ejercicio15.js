// 15- Realiza un script que cuente el número de vocales que tiene un texto.
let solicitarTexto = prompt("Ingrese un texto para mostrarlo en mayusculas")
 let vocales = "aeiou"
 let cantidadDeVocales = 0
 let textoMinuscula = solicitarTexto.toLocaleLowerCase()

 for(let indiceVocales = 0; indiceVocales < solicitarTexto.length; indiceVocales++){


     if(vocales.includes(textoMinuscula[indiceVocales])){
         cantidadDeVocales++
     } }

 document.write(`<p>${cantidadDeVocales}</p>`)