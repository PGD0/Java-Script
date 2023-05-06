/*
Ejercicio 1
Vamos a empezar con un sencillo ejercicio para practicar con el método prompt para pedir datos por teclado el condicional if

Pide la edad y si es mayor de 18 años indica que ya puede conducir.
*/

let edad;
edad = prompt("ingrese su edad");

if (edad >= 18) {
  alert('es apto para conducir');
} else {
  alert('no es apto para conducir');
}