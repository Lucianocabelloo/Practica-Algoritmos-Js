// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 let sumaTotal = 0;
 while(true){
     let finalizarBucle = confirm("Desea continuar con el bucle?")

     if(finalizarBucle === false){
         break
     }

     let ingresarNumero = parseInt(prompt("Ingresa un numero"))

     if (!isNaN(ingresarNumero)){
         sumaTotal += ingresarNumero
     }
     else{
         alert("Numeros no validos, intente nuevamente.")
     }
 }

 document.write(`<p>La suma total de los números ingresados es: + ${sumaTotal}</p>`);