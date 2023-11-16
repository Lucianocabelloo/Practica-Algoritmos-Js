// Libros - Dificultad:  🟢🟡🔴
// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libros {
    constructor(ISBN, titulo, autor, numeroDePag) {
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroDePag = numeroDePag;
    }

    get ISBN() {
        return this._ISBN;
    }

    set ISBN(nuevoISBN) {
        this._ISBN = nuevoISBN;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    get autor() {
        return this._autor;
    }

    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    get numeroDePag() {
        return this._numeroDePag;
    }

    set numeroDePag(nuevoNumeroDePag) {
        this._numeroDePag = nuevoNumeroDePag;
    }
    mostrarLibro(){
        document.write(`<h5>El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.numeroDePag} </h5>`)
    }


}

    const libro1 = new Libros(9789500000000, "Armas de Guerra", "Federico Rodriguez", 500)
    const libro2 = new Libros(9789500450152, "Armas de Guerra 2", "Federico Rodriguez", 640)

    libro1.mostrarLibro()
    libro2.mostrarLibro()

    function mayorCantidadDePaginas() {
        if(libro1.numeroDePag > libro2.numeroDePag){
            document.write(`<h3> El libro ${libro1.titulo} tiene mas paginas`)
        }
        else if(libro2.numeroDePag > libro1.numeroDePag){
            document.write(`<h3> El libro ${libro2.titulo} tiene mas paginas`)
        }
        else{
            document.write('<h3>Los libros tienen la misma cantidad de paginas')
        }
    }

    mayorCantidadDePaginas()