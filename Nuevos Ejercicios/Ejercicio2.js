/*
Ejercicio 2
En el siguiente ejercicio vamos a practicar con el bucle do while para que el código se ejecute una y otra vez hasta que el usuario decida parar

Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/

let nota;
do {
  nota = (prompt('ingrese su nota, para parar ingrese p'));
  if (nota > 0 && nota <= 3 ) {
    alert('muy deficiente')
  } else if(nota > 3 && nota <= 5) {
    alert('insuficiente')
  }else if(nota >= 6 && nota <= 7) {
    alert('suficiente')
  }else if (nota > 7 && nota <= 9) {
    alert('bien')
  }else if (nota > 9 && nota <= 10) {
    alert('sobresaliente')
  }
} while (nota != 'p')