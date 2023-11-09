// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const numeroTabla = parseInt(prompt("Ingrese el numero de la que quieres saber su tabla"))

function tablaMultiplicar(numeroTabla) {
    for(let indiceTabla = 1; indiceTabla <= 10; indiceTabla++){
        const calcularTabla = numeroTabla * indiceTabla  
        document.write(`<p>${indiceTabla} x ${numeroTabla} = ${calcularTabla}</p>`)
    }

}

tablaMultiplicar(numeroTabla)