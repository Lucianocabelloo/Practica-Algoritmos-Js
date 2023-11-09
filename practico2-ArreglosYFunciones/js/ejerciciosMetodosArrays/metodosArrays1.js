// Gestión de inventario en una tienda: Tienes dos arrays, uno que representa los productos en stock y otro que almacena los precios de los productos. Debes crear funciones que permitan agregar nuevos productos al inventario, eliminar productos agotados y calcular el valor total del inventario.

const productosEnStock = [
  "Camiseta",
  "Pantalón",
  "Zapatos",
  "Sombrero",
  "Bufanda",
  "Campera",
];
const preciosProductos = [15.99, 29.99, 49.99, 9.99, 12.5, "Sin Stock"];
console.log(productosEnStock);



function agregarProducto(productoAñadido, precioProductoAñadido) {
  if (productoAñadido !== undefined && precioProductoAñadido !== undefined) {
    productosEnStock.push(productoAñadido);
    preciosProductos.push(precioProductoAñadido);
    console.log(productosEnStock, preciosProductos);
  } else {
    document.write(
      `<p>Por favor añada los productos y su precio correspondiente</p>`
    );
  }
}



function eliminarProducto() {
  const indicesProductosSinStock = [];

  for (let i = 0; i < preciosProductos.length; i++) {
    if (preciosProductos[i] === "Sin Stock") {
      indicesProductosSinStock.push(i);
    }
  }

  for (let i = indicesProductosSinStock.length - 1; i >= 0; i--) {
    const indice = indicesProductosSinStock[i];
    productosEnStock.splice(indice, 1);
    preciosProductos.splice(indice, 1);
  }
}

document.write("<ul><h2> Listado de productos original</h2>");

for (let i = 0; i < productosEnStock.length; i++) {
  document.write(
    `<li>${productosEnStock[i]} - Precio: ${preciosProductos[i]}</li>`
  );
}
document.write("</ul>");


agregarProducto("Guantes", 5.99);


document.write("<ul><h2> Listado de productos con agregado</h2>");

for (let i = 0; i < productosEnStock.length; i++) {
  document.write(
    `<li>${productosEnStock[i]} - Precio: ${preciosProductos[i]}</li>`
  );
}
document.write("</ul>");


eliminarProducto();

document.write("<ul><h2> Listado de productos sin stock eliminado</h2>");

for (let i = 0; i < productosEnStock.length; i++) {
  document.write(
    `<li>${productosEnStock[i]} - Precio: ${preciosProductos[i]}</li>`
  );
}
document.write("</ul>");



function calcularValorTotal() {
    const valorInicial = 0
    const sumatoriaDePrecios = preciosProductos.reduce((acc, valorActual) => acc + valorActual, valorInicial)
    const sumatoriaRedondeada = Math.round(sumatoriaDePrecios)
    document.write(`<h3> La sumatoria del precio de todos los productos es : ${sumatoriaRedondeada} </h3>`)
}


calcularValorTotal()