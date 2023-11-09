let productos = [
    "Hidratante facial",
    "Tonico exfoliante",
    "Protector solar factor 50",
    "Protector solar factor 50",
    "Protector solar factor 50",
    "Protector solar toque seco factor 50",
    "Protector solar con color factor 50",
    "Gel de limpieza facial",
    "Tonico hidratante",
    "Sérum hidratante",
    "Exfoliante de azúcar cherry",
    "Pads de hidrogel para contorno de ojos",
    "Mascarilla facial",
    "Sérum facial con PHA",
    "Agua micellar",
    "Mascara de hidratación y reparación",
    "Protector solar en barra",
    "Crema contorno de ojos",
    "Bálsamo labial",
  ];



  const protectoresSolares = productos.filter(products => products == "Protector solar factor 50")
  const todosLosProtectoresSolares = productos.filter(products => products.includes("Protector"))
console.log(todosLosProtectoresSolares)

const buscarProducto2 = productos.find(products => products.includes("Hidratante")) 

document.write(`<p>El producto buscado ${buscarProducto2 !== undefined ? buscarProducto2 : "No se encontro el producto buscado"}`)