// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

const ciudades = [];

do {
    const nombreDeCiudades = prompt("Ingrese nombre de ciudades");
    if (nombreDeCiudades !== null) {
        ciudades.push(nombreDeCiudades);
    }
} while (confirm("Quiere continuar ingresando ciudades?"));

document.write(`<p>${ciudades} </p>`);
let longitudDelArray = ciudades.length;
document.write(`<p>Longitud del arreglo: ${longitudDelArray}</p>`);

if (ciudades.length > 0) {
    document.write(`<p>Primera Ciudad: ${ciudades[0]}</p>`);
    if (ciudades.length >= 3) {
        document.write(`<p>Tercera ciudad: ${ciudades[2]}</p>`);
    }
    document.write(`<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`);
} else {
    document.write('<p>No hay ciudades</p>');
}

ciudades.push("París");
document.write(`<p>Ciudad en segunda posición: ${ciudades[1]}</p>`);

ciudades.splice(1, 1, "Barcelona");
document.write(`<p>Arreglo con Barcelona en la segunda posición: ${ciudades}</p>`);
