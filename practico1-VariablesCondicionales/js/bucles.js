// Ejercicios javascript - Bucles
// Dificultad:  🟢


// 

// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido

// Dificultad:  🟢🟡



// Dificultad:  🟢🟡


// Dificultad:  🟢🟡🔴


// Input:  40773821
// Output: ‘L’

// Dificultad:  🟢🟡


// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

// Dificultad:  🟢🟡


// Dificultad:  🟢🟡


// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……
// Dificultad:  🟢🟡🔴


// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

// Dificultad:  🟢🟡🔴


// Dificultad:  🟢🟡
// Ejercicios con Math


// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

// Dificultad:  🟢🟡
// 12- Realiza un script que genere un número aleatorio entre 1 y 99

// let numeroAleatorio = Math.random() * (1, 99)
// let numeroEnteroAleatorio = Math.round(Math.random() * (1, 99))
// document.write(`<p>${numeroAleatorio}</p>`)
// document.write(`<p>${numeroEnteroAleatorio}</p>`)


// Ejercicios con String

// Dificultad:  🟢🟡
// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

// let solicitarTexto = prompt("Ingrese un texto para mostrarlo en mayusculas")
// let textoEnMayusculas = solicitarTexto.toUpperCase()
// document.write(`<p>${textoEnMayusculas}</p>`)


// Dificultad:  🟢🟡
// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
// let nombre = "luciano"
// let textoSeparado = solicitarTexto.split("").join("-")

// document.write(`${textoSeparado}`)
// console.log(textoSeparado)



// Dificultad:  🟢🟡
// 15- Realiza un script que cuente el número de vocales que tiene un texto.

    // let vocales = "aeiou"
    // let cantidadDeVocales = 0
    // let textoMinuscula = solicitarTexto.toLocaleLowerCase()

    // for(let indiceVocales = 0; indiceVocales < solicitarTexto.length; indiceVocales++){


    //     if(vocales.includes(textoMinuscula[indiceVocales])){
    //         cantidadDeVocales++
    //     }
    // }
    
    // document.write(`<p>${cantidadDeVocales}</p>`)
// Dificultad:  🟢🟡
// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

    // let textoInvertido = solicitarTexto.split("").reverse().join("")
    // document.write(`<p>Tu texto invertido sera: ${textoInvertido}</p>`)

// Dificultad:  🟢
// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
// let vocales = "aeiou"
// let primeraVocal = ""
// let textoMinuscula = solicitarTexto.toLocaleLowerCase()

// for(let indiceVocales = 0; indiceVocales < solicitarTexto.length; indiceVocales++){


//     if(vocales.includes(textoMinuscula[indiceVocales])){
//         primeraVocal = `${textoMinuscula[indiceVocales]}`
//         break

//     }
// }

// document.write(`<p>La primera vocal es: ${primeraVocal} </p>`)

// Ejemplo:

// Input: Hola mundo

// Output: la vocal ‘o’ está en la posición 1
