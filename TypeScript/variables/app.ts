
// Uso de Let y Const
const nombre = 'Ricardo Tapia';
const edad = 23;

let PERSONAJE = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto

interface SuperHeroe{
  nombre:string,
  artesMarciales: Array<string>
}

let batman:SuperHeroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha


let resultadoDoble = ( a: number, b:number) =>  a + b;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"

let getAvenger = (nombre:string, poder?:boolean, arma:string= "arco") => {
  let mensaje:string;

  (poder)?mensaje=nombre + " tiene el poder de: " + poder + " y un arma: " + arma:mensaje = nombre + " tiene un " + poder;
}

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

export class Rectangulo {
  base:number;
  altura:number;

  constructor(base:number, altura:number){
    this.base=base;
    this.altura=altura;
  }

  getArea = ():number => {return this.base*this.altura};
}
