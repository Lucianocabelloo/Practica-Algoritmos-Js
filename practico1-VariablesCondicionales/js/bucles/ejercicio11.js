// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

 let nombre1 = prompt("Ingrese el primer nombre");
 let edad1 = parseInt(prompt("Ingrese la primera edad"));
 let nombre2 = prompt("Ingrese el segundo nombre");
 let edad2 = parseInt(prompt("Ingrese la segunda edad"));
 let nombre3 = prompt("Ingrese el tercer nombre");
 let edad3 = parseInt(prompt("Ingrese la tercera edad"));

 let edadMayor = Math.max(edad1, edad2, edad3);
 let edadAUsar = Math.floor(edadMayor)

 if (!isNaN(edadMayor)) {
   if (edadMayor == edad1) {
     document.write(`El nombre del mayor es ${nombre1} y tiene ${edadAUsar}`);
   } else if (edadMayor == edad2) {
     document.write(`El nombre del mayor es ${nombre2} y tiene ${edadAUsar}`);
   } else {
     document.write(`El nombre del mayor es ${nombre3} y tiene ${edadAUsar}`);
   }
 } else {
   document.write("En una de las edades no se ingresaron numeros validos");
 }


