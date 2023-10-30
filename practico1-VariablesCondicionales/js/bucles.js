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
// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// let filas = parseInt(prompt("Ingrese la cantidad de filas"))
// let columnas = parseInt(prompt("Ingrese la cantidad de columnas"))
// let celdas = filas * columnas
// document.write(`<table> <tbody>`)

// for(let indiceFilas = 1; indiceFilas <= filas; indiceFilas++){

//     document.write(`<tr>`);
//     for(let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++){
//         document.write(`<td>${celdas--}</td>`);
//     }
//     document.write(`</tr>`);
// }
// document.write(`</tbody></table>`)

// Dificultad:  🟢🟡
// Ejercicios con Math
// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// let nombre1 = prompt("Ingrese el primer nombre");
// let edad1 = parseInt(prompt("Ingrese la primera edad"));
// let nombre2 = prompt("Ingrese el segundo nombre");
// let edad2 = parseInt(prompt("Ingrese la segunda edad"));
// let nombre3 = prompt("Ingrese el tercer nombre");
// let edad3 = parseInt(prompt("Ingrese la tercera edad"));

// let edadMayor = Math.max(edad1, edad2, edad3);
// let edadAUsar = Math.floor(edadMayor)

// if (!isNaN(edadMayor)) {
//   if (edadMayor == edad1) {
//     document.write(`El nombre del mayor es ${nombre1} y tiene ${edadAUsar}`);
//   } else if (edadMayor == edad2) {
//     document.write(`El nombre del mayor es ${nombre2} y tiene ${edadAUsar}`);
//   } else {
//     document.write(`El nombre del mayor es ${nombre3} y tiene ${edadAUsar}`);
//   }
// } else {
//   document.write("En una de las edades no se ingresaron numeros validos");
// }



// let edadMayor = "";
// let nombreMayor = "";

// for (let indiceEdad = 1; indiceEdad <= 3; indiceEdad++) {
//   let edadActual = prompt(`Ingresa la ${indiceEdad}° edad`);
//   let nombreActual = prompt(`Ingresa el ${indiceEdad}° nombre`);

//   if (isNaN(edadMayor)) {
//     alert("Por favor ingrese numeros validos");
//     break;
//   } else {
//     if (edadActual > edadMayor) {
//       edadMayor = edadActual;
//       nombreMayor = nombreActual;
//     }
//   }

//   console.log(edadMayor);
//   console.log(nombreMayor);
// }
// if (!isNaN(edadMayor)) {
//   document.write(`<p>El mayor es ${nombreMayor} y su edad es ${edadMayor}</p>`);
// } else {
//   document.write(
//     `<p>No se puede realizar la comparacion, hay numeros invalidos en los datos</p>`
//   );
// }

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
