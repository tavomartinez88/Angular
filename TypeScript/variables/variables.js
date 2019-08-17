var numero = 15;
var booleano = false;
var nombreApellido = "Peter";
var hoy = new Date();
hoy = new Date('2020-10-07');
var cualquiera;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
var spiderman = {
    nombre: nombreApellido,
    edad: numero
};
spiderman = {
    nombre: nombreApellido,
    edad: 34
};
var date1 = new Date("2019-7-24 23:49:00");
var date2 = new Date("2019-7-24 23:50:00");
var diferencia = Math.abs(date1.getTime() - date2.getTime());
console.log("valor de la diferencia es : " + diferencia);
