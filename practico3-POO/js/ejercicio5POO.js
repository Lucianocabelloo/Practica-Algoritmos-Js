// Generaciones - Dificultad:  🟢🟡🔴

// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona{
    constructor(nombre, apellido, añoDeNacimiento, edad,DNI,sexo,peso,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.añoDeNacimiento = añoDeNacimiento
        this.edad = edad
        this.DNI = DNI
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }
    mostrarGeneracion(){
        if(this.edad >= 18){
            return document.write(`<h2>Es mayor de edad</h2>`) 
        }
        else {
            return document.write(`<h2>No es mayor de edad</h2>`) 
            }

    }
    mostrarDatos(){
        document.write(`<h2> Datos Personales</h2>
        <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Apellido: ${this.apellido}</li>
            <li>Año de Nacimiento: ${this.añoDeNacimiento}</li>
            <li>Edad: ${this.edad} Años</li>
            <li>DNI: ${this.DNI}</li>
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso} KG</li>
            <li>altura: ${this.altura} CM</li>
        </ul>`)
    }
    generarDNI(){
        this.DNI = Math.floor(Math.random() * 90000000) + 10000000;
        console.log("Se genero nuevo dni")
    }
}

const persona1 = new Persona("Luciano","Cabello",1998,25,41300038,"H",81,170)

persona1.mostrarDatos()
persona1.mostrarGeneracion()
persona1.generarDNI()
persona1.mostrarDatos()