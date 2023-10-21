// Ejercicios javascript
// Prácticas con variables


// Dificultad:  🟢
// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert("Un mensaje")

// Dificultad:  🟢
// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("<p> Ejercicio 2: </p>" + "Hello World ");

// Dificultad:  🟢
// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write("<p> Ejercicio 3: </p>")
document.write(3+5)
// Dificultad:  🟢

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// let nombreUsuario = prompt("Ingrese nombre de usuario")
// document.write("<p> Ejercicio 4: </p>" + "Hola" + " " + nombreUsuario)
// Ejemplo: 

// input: Coder 
// Output: Hola Coder

// Dificultad:  🟢
// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
document.write("<p> Ejercicio 5: </p>")
// let numero1 = parseInt(prompt("Ingrese un numero"))
// let numero2 = parseInt(prompt("Ingrese otro numero"))
// document.write( parseInt(numero1) +  parseInt( numero2))



// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
// Dificultad:  🟢
// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// let numero3 = parseInt(prompt("Por favor, ingresa el primer número:"));
// let numero4 = parseInt(prompt("Por favor, ingresa el segundo número:"));
// document.write("<p> Ejercicio 6: </p>")
// if (numero3 > numero4) {
//     document.write("El número " + numero3 + " es mayor que " + numero4 );
// } else if (numero4 > numero3) {
//     document.write("El número " + numero4 + " es mayor que " + numero3);
// } else {
//     document.write("Los números son iguales.");
// }
// Ejemplo: 

// input: 15 , 3


// Output: El 15 es el número más grande

// Dificultad:  🟢
// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 
// let numero5 = parseInt(prompt("Por favor, ingresa el primer número:"));
// let numero6 = parseInt(prompt("Por favor, ingresa el segundo número:"));
// let numero7 = parseInt(prompt("Por favor, ingresa el tercer número:"));
// document.write("<p> Ejercicio 7: </p>")
// if(numero5 > 6 && numero5 > numero7){
//     document.write("Numero mas alto es "+numero5 + " Los otros son " + numero6 + " y " + numero7);
// } else if (numero6 > numero5 && numero6 > numero7) {
//     document.write("Numero mas alto es "+ numero6 + " Los otros son " + numero5 + " y " + numero7);
// } else if (numero7 > numero5 && numero7 > numero6) {
//     document.write("Numero mas alto es "+numero7 + " Los otros son " + numero5 + " y " + numero6);
// } else{
//     document.write("Todos los numeros son iguales");
// }



// input: 15 , 3, 9


// Output: El 15 es el número más grande

// Dificultad:  🟢
// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo: 
// let numero8 = parseInt(prompt("Por favor, ingresa el numero para saber si es par"));
// document.write("<p> Ejercicio 8: </p>")
// if ( (numero8 % 2) == 0 ){
//     document.write("El número " + numero8 + " es divisible entre 2");
// } else{
//     document.write("El número " + numero8 + " no es divisible entre 2");
// }


// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.



// Dificultad:  🟢🟡 
// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
let frase = prompt("Ingrese una frase");
frase = frase.toLowerCase();

let vocales = "";

if (frase.includes("a")) {
    vocales += "a";
}
if (frase.includes("e")) {
    vocales += "e";
}
if (frase.includes("i")) {
    vocales += "i";
}
if (frase.includes("o")) {
    vocales += "o";
}
if (frase.includes("u")) {
    vocales += "u";
}

document.write("Las vocales que aparecen en la frase son: " + vocales);
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:



// input: Hola mundo
// Output: oauo






// Dificultad:  🟢🟡
// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo: 

// input: 20


// Output: El 20 es divisible por 2.



// Dificultad:  🟢🟡
// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 

// input: 20
// input: 210




// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.



