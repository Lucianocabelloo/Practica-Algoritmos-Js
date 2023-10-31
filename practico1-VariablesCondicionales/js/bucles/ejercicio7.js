// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let userNumber = parseInt(prompt("Ingresa un numero no mayor a 50"))

 if(userNumber > 50){
     alert("El numero no esta dentro de los permitidos")
 }
 else {     for (let i = userNumber; i >= 1 ; i--){
         let line = '';
         for(let k = 1; k <= i; k++){
             line += i
         }
         document.write(line + "<br>")
     }
 }