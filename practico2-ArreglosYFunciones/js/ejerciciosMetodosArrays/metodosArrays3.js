// Catálogo de biblioteca: Tienes un array que almacena títulos de libros en una biblioteca. Debes crear funciones que permitan a los usuarios buscar libros por título, verificar si un libro específico está disponible para préstamo y llevar un registro de la disponibilidad de los libros.

const nombresLibros = ['El señor de los anillos', 'Cien años de soledad', '1984', 'Orgullo y prejuicio', 'Don Quijote de la Mancha'];
const disponibilidadLibros = [true, false, true, true, false];

function mostrarLibros() {
    document.write(`<ul><h3> Los libros disponibles son </h3>`)

    
    nombresLibros.forEach(book => {
        document.write(`<li> ${book} </li>`)
    })

    document.write(`<ul>`)
}

mostrarLibros()

function buscarLibros(nombreLibro) {
    const libroEncontrado = nombresLibros.find(libro => libro.toLowerCase().includes(nombreLibro.toLowerCase()));

    if (libroEncontrado) {
        const indiceLibro = nombresLibros.indexOf(libroEncontrado);

        if (disponibilidadLibros[indiceLibro]) {
            document.write(`<h3>${libroEncontrado} está disponible para préstamo</h3>`);
        } else {
            document.write(`<h2>${libroEncontrado} no está disponible actualmente</h2>`);
        }
    } else {
        document.write(`<h2>El libro "${nombreLibro}" no se encuentra en el catálogo</h2>`);
    }
}

const solicitarLibro = prompt("Ingresa el nombre de un libro")

buscarLibros(solicitarLibro);

