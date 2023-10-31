// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
// Dificultad:  🟢🟡

 let edad = parseInt(prompt("Ingrese su edad"))
 if(isNaN(edad)){
     alert("No se ingreso un numero valido, reintente por favor.")
 }

 else if (edad >= 18 ){
     alert("Ya puede conducir")
 }
 else{
     alert("No tiene edad suficiente para conducir")
 }
