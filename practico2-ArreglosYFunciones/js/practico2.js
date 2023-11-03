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




// Dificultad:  🟢🟡



// Dificultad:  🟢🟡


// Ejemplo:




// Input:
// lado A = 24
// lado B = 5

// Output: 58

// Dificultad:  🟢🟡
// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const numeroTabla = parseInt(prompt("Ingrese el numero de la que quieres saber su tabla"))

function tablaMultiplicar(numeroTabla) {
    for(let indiceTabla = 1; indiceTabla <= 10; indiceTabla++){
        const calcularTabla = numeroTabla * indiceTabla  
        document.write(`<p>${indiceTabla} x ${numeroTabla} = ${calcularTabla}</p>`)
    }

}

tablaMultiplicar(numeroTabla)