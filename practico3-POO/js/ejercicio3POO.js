// Rectángulos
// Dificultad:  🟢
// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulos{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }

    get alto(){
        return this._alto;
    }
    set alto(nuevoAlto){
        this._alto = nuevoAlto
    }
    get ancho(){
        return this._ancho
    }
    set ancho(nuevoAncho){
        this._ancho = nuevoAncho
    }

    calcularArea(){
        return this._ancho * this._alto;
    }
    calcularPerimetro(){
        return 2*(this._ancho + this._alto);
    }
}


const triangulo1 = new Rectangulos(25,10)


console.log(triangulo1.calcularArea())
console.log(triangulo1.calcularPerimetro())