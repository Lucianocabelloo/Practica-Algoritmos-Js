// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

 for (let indiceGeneral = 1; indiceGeneral <= 500; indiceGeneral++) {
     if (indiceGeneral % 4 === 0 && indiceGeneral % 9 === 0) {
         document.write(`<p>${indiceGeneral} es múltiplo de ambos</p>`);
     } else if (indiceGeneral % 4 === 0) {
         document.write(`<p>${indiceGeneral} es múltiplo de 4</p>`);
     } else if (indiceGeneral % 9 === 0) {
         document.write(`<p>${indiceGeneral} es múltiplo de 9</p>`);
     } else {
         document.write(`<p>${indiceGeneral}</p>`);
     }

     if (indiceGeneral % 5 === 0) {
         document.write('<hr>');
     }
 }