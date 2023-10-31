// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

 if (userNumber > 50){
     alert("El numero no esta dentro de los permitidos")
 }
 else{
     for(let i = 1; i <= userNumber; i++){
         let line = '';
         for(let j = 1; j <= i; j++){
             line += j
         }
         document.write(line + '<br>');
     }
 }