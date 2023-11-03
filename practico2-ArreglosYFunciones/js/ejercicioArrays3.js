// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

const apariciones = [];


for (let i = 0; i <= 12; i++) {
    apariciones.push(0);

}

for (let indiceDeAparicion = 0; indiceDeAparicion < 50; indiceDeAparicion++) {
    let numeroRandom1 = Math.floor(Math.random() * 6) + 1; 
    let numeroRandom2 = Math.floor(Math.random() * 6) + 1; 
    let sumaNumerosRandom = numeroRandom1 + numeroRandom2; 

    apariciones[sumaNumerosRandom]++; 
}
document.write('<table>');
document.write('<thead> <tr> <th> Número </th> <th> Apariciones </th> </tr> </thead>');
document.write('<tbody>');

for (let i = 2; i <= 12; i++) {
    document.write(`<tr><td>${i}</td><td>${apariciones[i]}</td></tr>`);
}

document.write('</tbody>');
document.write('</table>');