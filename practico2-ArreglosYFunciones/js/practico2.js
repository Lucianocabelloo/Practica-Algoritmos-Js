// Ejercicios javascript
// Prácticas con arreglos y funciones


// Arrays
// Dificultad:  🟢

// Output:

// Dificultad:  🟢🟡


// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// Ejemplo:
// Input:
// [‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

// Output:


// Dificultad:  🟢🟡🔴





// Funciones
// Dificultad:  🟢
// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function numeroParoImpar(numero) {
    
    if(numero % 2 === 0){
        return "El número es par";
    }
    else{
        return "El número es impar";
        }
}

document.write(`<p> ${numeroParoImpar(23)} </p>`)

// Dificultad:  🟢🟡
// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
// Dificultad:  🟢🟡
// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// Ejemplo:




// Input:
// lado A = 24
// lado B = 5

// Output: 58

// Dificultad:  🟢🟡
// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.


