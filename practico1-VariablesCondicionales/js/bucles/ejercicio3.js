// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

// CORREGIR

let continuarBucle = true

while (true) {
    let cadenaDeTexto = prompt("Ingresa una cadena de texto");

    if (cadenaDeTexto) {
        document.write(`${cadenaDeTexto}-`);
    } else {
        if (confirm("Quieres continuar el bucle?") === true){
            continue;
        }
        else{
            document.write("<br>Fin del bucle.");
            break
        }
    }
    
}