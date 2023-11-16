// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor(tamano = 10) {
        this.contactos = [];
        this.tamanoMaximo = tamano;
    }

    añadirContacto(contacto) {
        if (this.agendaLlena()) {
            console.log('La agenda está llena. No se puede agregar más contactos.');
        } else {
            this.contactos.push(contacto);
            console.log(`Contacto ${contacto.nombre} añadido a la agenda.`);
        }
    }

    existeContacto(contacto) {
        return this.contactos.some(c => c.nombre === contacto.nombre);
    }

    listarContactos() {
        console.log('Lista de contactos:');
        this.contactos.forEach(contacto => {
            console.log(`${contacto.nombre}: ${contacto.telefono}`);
        });
    }

    buscarContacto(nombre) {
        const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
        if (contactoEncontrado) {
            console.log(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
        } else {
            console.log(`No se encontró un contacto con el nombre ${nombre}.`);
        }
    }

    eliminarContacto(contacto) {
        const indice = this.contactos.findIndex(c => c.nombre === contacto.nombre);
        if (indice !== -1) {
            const nombreEliminado = this.contactos[indice].nombre;
            this.contactos.splice(indice, 1);
            console.log(`Contacto ${nombreEliminado} eliminado de la agenda.`);
        } else {
            console.log(`No se encontró un contacto con el nombre ${contacto.nombre}.`);
        }
    }

    agendaLlena() {
        return this.contactos.length >= this.tamanoMaximo;
    }

    huecosLibres() {
        return this.tamanoMaximo - this.contactos.length;
    }
}

function mostrarMenu() {
    console.log('1. Añadir Contacto');
    console.log('2. Existe Contacto');
    console.log('3. Listar Contactos');
    console.log('4. Buscar Contacto');
    console.log('5. Eliminar Contacto');
    console.log('6. Agenda Llena');
    console.log('7. Huecos Libres');
    console.log('0. Salir');
}

function ejecutarAgenda() {
    const agenda = new Agenda();

    let opcion;
    do {
        mostrarMenu();
        opcion = prompt('Selecciona una opción (0-7):');
        switch (opcion) {
            case '1':
                const nombreNuevo = prompt('Ingrese el nombre del nuevo contacto:');
                const telefonoNuevo = prompt('Ingrese el teléfono del nuevo contacto:');
                const nuevoContacto = new Contacto(nombreNuevo, telefonoNuevo);
                agenda.añadirContacto(nuevoContacto);
                break;
            case '2':
                const nombreExiste = prompt('Ingrese el nombre del contacto a verificar:');
                const contactoExiste = new Contacto(nombreExiste, '');
                console.log(`El contacto ${nombreExiste} ${agenda.existeContacto(contactoExiste) ? 'sí' : 'no'} existe.`);
                break;
            case '3':
                agenda.listarContactos();
                break;
            case '4':
                const nombreBuscar = prompt('Ingrese el nombre del contacto a buscar:');
                agenda.buscarContacto(nombreBuscar);
                break;
            case '5':
                const nombreEliminar = prompt('Ingrese el nombre del contacto a eliminar:');
                const contactoEliminar = new Contacto(nombreEliminar, '');
                agenda.eliminarContacto(contactoEliminar);
                break;
            case '6':
                console.log(`La agenda ${agenda.agendaLlena() ? 'está' : 'no está'} llena.`);
                break;
            case '7':
                console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
                break;
            case '0':
                console.log('Saliendo del programa.');
                break;
            default:
                console.log('Opción no válida. Inténtalo de nuevo.');
        }
    } while (opcion !== '0');
}

ejecutarAgenda();