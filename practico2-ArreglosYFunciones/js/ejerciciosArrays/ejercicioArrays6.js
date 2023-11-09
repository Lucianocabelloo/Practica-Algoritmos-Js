// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

 const base = parseInt(prompt("Ingrese el tamaño de la base"))
 const altura = parseInt(prompt("Ingrese la altura"))

 function calcularPerimetro(base,altura) {
     const perimetro = 2 * (altura + base)
     return perimetro
 }

 document.write(`<p>${calcularPerimetro(base, altura)}</p>`)