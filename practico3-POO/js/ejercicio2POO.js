// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (cantidadAIngresar) {
    this.saldo += cantidadAIngresar;
    console.log("se agrego", cantidadAIngresar);
  },
  extraer: function (cantidadaExtraer) {
    if (this.saldo !== 0 && cantidadaExtraer <= this.saldo) {
      this.saldo -= cantidadaExtraer;
      console.log("Se extrajeron $" + cantidadaExtraer);
    } else {
      console.log("No hay suficiente saldo para extraer $" + cantidadaExtraer);
    }
  },
  informar: function () {
    return `Titular: ${this.titular}, Saldo actual: $${this.saldo}`;
  },
};

cuenta.ingresar(2400);
cuenta.extraer(500);
console.log(cuenta.informar());
