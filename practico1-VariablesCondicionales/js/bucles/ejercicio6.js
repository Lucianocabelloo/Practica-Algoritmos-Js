// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
 for (let i = 1; i <= 30; i++){
     let linea = "";
     for (let k = 1; k <= i; k++){
         linea += i;
     }
     document.write(linea + "<br>")
 }