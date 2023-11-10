// Gestión de proyectos en una empresa: Tienes dos arrays, uno para los nombres de proyectos y otro para los estados de los proyectos. Debes crear funciones que permitan agregar nuevos proyectos, cambiar el estado de un proyecto, asignar un responsable y generar un resumen de proyectos en curso.

const nombresProyectos = ['Proyecto A', 'Proyecto B', 'Proyecto C', 'Proyecto D', 'Proyecto E'];
const estadosProyectos = ['En Progreso', 'Completado', 'En Espera', 'En Progreso', 'Completado'];
const encargadosProyectos = []

function mostrarProyectos() {
    document.write(`<ul><h3> Los proyectos disponibles son </h3>`)

    for (let i = 0; i < nombresProyectos.length; i++) {
        document.write(`<li>${nombresProyectos[i]} - Estado: ${estadosProyectos[i]}</li>`);
    }

    document.write(`</ul>`);
}

mostrarProyectos();



function agregarProyecto(proyectoAñadido, estadoDeProyecto) {
     if (proyectoAñadido !== undefined && estadoDeProyecto !== undefined) {
        nombresProyectos.push(proyectoAñadido);
        document.write(`<p> Se añadira ${proyectoAñadido} a la lista de proyectos</p>`)
        estadosProyectos.push(estadoDeProyecto);
       document.write(`<p> El estado de ${proyectoAñadido} sera ${estadoDeProyecto}</p>`)

  } else {
     document.write(
        `<p>Por favor añada los productos y su precio correspondiente</p>`
       );
     }
  }

  agregarProyecto("Proyecto X", "Completado")
  mostrarProyectos();

  function  modificarEstadoDeProyecto(nombreDeProyecto, nuevoEstado) {
    let index = nombresProyectos.indexOf(nombreDeProyecto)

    if( index !== -1){
        estadosProyectos[index] = nuevoEstado;
        
    }
    else{
        document.write('<p>No se encontró el proyecto</p>')
    }
    
    document.write(`Se cambiara el estado de ${nombreDeProyecto} a ${nuevoEstado}`);
}

console.log(estadosProyectos)
    
  modificarEstadoDeProyecto("Proyecto C", "Completado")
  mostrarProyectos();

  function agregarEncargado(nombreProyecto, encargadoNombre) {
    let index = nombresProyectos.indexOf(nombreProyecto);

    if (index !== -1) {
        encargadosProyectos[index] = encargadoNombre;
        document.write(`<p>${encargadoNombre} se ha asignado como encargado del proyecto ${nombreProyecto}</p>`);
    } else {
        document.write('<p>No se encontró el proyecto para asignar un encargado</p>');
    }
}

agregarEncargado('Proyecto C', 'Nombre del Encargado');
agregarEncargado('Proyecto X', 'Juan domingo');
agregarEncargado('Proyecto A', 'Juan Peron');
agregarEncargado('Proyecto KJ', 'Juan Peron');

console.log(encargadosProyectos, estadosProyectos, nombresProyectos)