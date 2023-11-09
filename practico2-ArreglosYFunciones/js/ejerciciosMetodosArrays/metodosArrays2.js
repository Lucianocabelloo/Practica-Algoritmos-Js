// Registro de notas de estudiantes: Tienes dos arrays, uno con nombres de estudiantes y otro con sus respectivas notas en un curso. Debes crear funciones que calculen el promedio de notas por estudiante y muestren un resumen con los nombres de los estudiantes que aprobaron y reprobaron el curso.

const nombresEstudiantes = ["Juan", "María", "Carlos", "Laura", "Pedro"];
const notasEstudiantes = [
  [8, 7, 6],
  [9, 8, 7],
  [3, 4, 5],
  [7, 6, 8],
  [4, 5, 6],
];

const promedioFinal = [];

function promedio() {
  for (let i = 0; i < nombresEstudiantes.length; i++) {
    let valorInicial = 0;
    let sumatoriaDeNotas = notasEstudiantes[i].reduce(
      (acc, valorActual) => acc + valorActual,
      valorInicial
    );
    const promedios = sumatoriaDeNotas / notasEstudiantes[i].length;
    promedioFinal.push(promedios);
  }
}

document.write("</ul>");
promedio();
document.write("<ul><h2> Promedios de alumnos</h2>");

for (let i = 0; i < nombresEstudiantes.length; i++) {
  document.write(
    `<li>El nombre del alumno es ${nombresEstudiantes[i]} y Su nota final es: ${promedioFinal[i]}</li>`
  );
}
document.write("</ul>");

console.log(promedioFinal);
function aprobadosODesaprobados() {
  document.write(`<ul><h2> Listado de alumnos</h2>`);
  for (let i = 0; i < nombresEstudiantes.length; i++) {
    const promedio = promedioFinal[i];

    if (promedio >= 6) {
      document.write(`<li>${nombresEstudiantes[i]} - Aprobado</li>`);
    } else {
      document.write(`<li>${nombresEstudiantes[i]} - Desaprobado</li>`);
    }
  }
  document.write(`</ul>`);
}

aprobadosODesaprobados();
