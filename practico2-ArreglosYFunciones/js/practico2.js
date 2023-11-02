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



// Dificultad:  🟢🟡
// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function analizarCadena(cadena) {

    let soloMinisculas = true
    let soloMayusculas = true

    for(let i = 0; i < cadena.length; i++){
        
        let caracteres = cadena.charAt(i)

        if (caracteres == caracteres.toLowerCase()){
            soloMayusculas = false
        }
        else if (caracteres == caracteres.toUpperCase()){
            soloMinisculas = false
        }
        if (!soloMayusculas && !soloMinisculas){
            return "Hay un mix de mayusculas y minusculas"
        }

        
    }
    
    if (soloMayusculas){
        return "Hay solo mayuscululas"
    }
    else if(soloMinisculas){
        return "Hay solo minuscukas"
    }
}

const resultado1 = analizarCadena("SOLOMAYUSCULAS");
console.log(resultado1);

const resultado2 = analizarCadena("solominusculas");
console.log(resultado2);

const resultado3 = analizarCadena("MixTuraDeMayusYMinus");
console.log(resultado3);

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


