/**
 * Repite varias Veces

Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir "Hola Mundo" 5 veces:

```markdown
Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
```
 */


var frase = prompt("Ingrese una frase: ")
var numero = prompt("Ingrese un numero: ")

numero = parseInt(numero)

for (let i = 0; i < numero; i++) {
    
    console.log(frase)
    
}


/**
 * # Rango de Números II

Escribe un programa para la consola que le pida al usuario dos números.

Si el primer número es menor que el segundo imprime los números en el rango de forma ascendente.  Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

```markdown
5
6
7
8
9
10
```

Si el primer número es mayor que el segundo imprime los números en el rango de forma descendente. Por ejemplo, si el usuario ingresa 10 como primer número y 5 como segundo número, el programa debe imprimir:

```markdown
10
9
8
7
6
5
```

Nota: Fíjate que se imprimen también los números en los límites, en el ejemplo el 10 y el 5.
*/

var num_1 = prompt("Ingrese primer numero: ")
var num_2 = prompt("Ingrese segundo numero: ")

num_1 = parseInt(num_1)
num_2 = parseInt(num_2)

if(num_1 < num_2){

    for (num_1; num_1 <=  num_2; num_1++) {
        console.log(num_1)    
    }
}else if(num_1 > num_2){

    for (num_1; num_1 >= num_2 ; num_1--) {
        console.log(num_1)    
    }

}


/**
 * # Números Pares

Escribe un programa que imprima los números pares del 0 al 100:

```markdown
0
2
4
6
...
96
98
100
```

Nota 1: cada número debe ir en una nueva línea.
Nota 2: utiliza un ciclo para solucionar este ejercicio

*/

for (let i = 0; i <= 100; i++) {
    
    if (i % 2 == 0) {
     
        console.log(i)
    }
    
}

/**
 * 
Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
Ana, Oswaldo, Raúl, Celia, María, Antonio
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)

1- Imprime la clasificación inicial
2- El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

  - Celia adelanta a Raúl
  - Antonio es descalificado y se elimina del concurso
  - Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
  - Hay una nueva participante que pasa a encabezar la clasificación: Marta

Imprime la clasificación actualizada usando una lista ordenada, si el nombre del concursante es Roberto imrpime ademas "en revision del jurado"

[Ana, Oswaldo, Raúl, Celia, María, Antonio]

[Ana, Oswaldo, Celia, Raúl, María, -]
 */

var calificaciones = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio']

console.log(calificaciones)