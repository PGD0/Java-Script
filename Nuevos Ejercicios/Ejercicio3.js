/*
Ejercicio 3
En el siguiente ejercicio vamos a practicar la concatenación de strings y el bucle do while

Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -
*/
let cadena = "";
let agree = true;
do{
  let palabra = prompt('Digite una palabra');
  if (!palabra){
    agree = false;
  }
  cadena= cadena+'-'+ palabra
} while (agree)

console.log(cadena)