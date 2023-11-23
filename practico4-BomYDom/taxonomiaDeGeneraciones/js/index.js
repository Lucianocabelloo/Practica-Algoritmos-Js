

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
    reiniciarPagina(){
        console.log("boton funciona")
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

document.getElementById("btnEnviar").addEventListener("click", function() {

    const nombreUsuario = document.getElementById("inputNombre").value
    const ApellidoUsuario = document.getElementById("inputApellido").value
    const añoDeNacimientoUsuario = document.getElementById("inputAñoNacimiento").value
    const edadUsuario = document.getElementById("inputEdad").value
    const DNIUsuario = document.getElementById("inputDNI").value
    const sexoUsuario = document.getElementById("inputSexo").value
    const alturaUsuario = document.getElementById("inputAltura").value
    const pesoUsuario = document.getElementById("inputPeso").value
    
    const persona2 = new Persona(nombreUsuario,ApellidoUsuario,añoDeNacimientoUsuario,edadUsuario,DNIUsuario,sexoUsuario,alturaUsuario,pesoUsuario)
    persona2.mostrarGeneracion()
    persona2.mostrarDatos()
  })



