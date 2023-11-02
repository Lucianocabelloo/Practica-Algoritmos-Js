// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
document.write(`<p>Los meses del año son:</p>`)
document.write(`<ul>`)
meses.forEach(mes => {
    document.write(`<li>${mes}</li>`)
})
document.write('</ul>')