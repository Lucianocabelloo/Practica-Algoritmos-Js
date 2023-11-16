// Producto - Dificultad:  🟢🟡

// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

const Products = []

class Productos{
    constructor(codigo,nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
    }
    imprimirDatos(){
        document.write(`<h2>Producto</h2>
        <h3>El codigo de este producto es: ${this.codigo}</h3>
        <h3>Nombre del Producto: ${this.nombre}</h3>
        <h3>Precio del producto: ${this.precio}</h3>
        `)
    }
}

const Producto1 = new Productos(24545,"Leche condensada", 200)
const Producto2 = new Productos(24546,"Leche Deslactosada", 300)
const Producto3 = new Productos(24546,"Leche Entera", 500)

Products.push(Producto1)
Products.push(Producto2)
Products.push(Producto3)

Producto1.imprimirDatos()
Producto2.imprimirDatos()
Producto3.imprimirDatos()

console.log(Products)