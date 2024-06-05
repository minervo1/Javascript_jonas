'use strict';
console.log('desafio 1');
//¡Volvemos a los dos equipos de gimnasia, los Delfines y los Koalas! Hay un nuevo disciplina de gimnasia, que funciona de manera diferente.Cada equipo compite 3 veces y luego se calcula el promedio de las 3 puntuaciones (por lo que una puntuación media por equipo). Un equipo sólo gana si tiene al menos el doble de la puntuación media del otro equipo. De lo contrario, ¡ningún equipo gana!

//Datos de prueba:
//§ Dato 1: Los delfines obtienen 44, 23 y 71. Los koalas obtienen 65, 54 y 49
//§ Datos 2: Los delfines obtienen 85, 54 y 41. Los koalas obtienen 23, 34 y 27
//Consejos:
//§ Para calcular el promedio de 3 valores, súmalos todos y divídelos por 3
//§ Para verificar si el número A es al menos el doble del número B, verifique A >= 2 * B.
// Aplicar esto a las puntuaciones promedio del equipo.

//1. Cree una función de flecha 'calcAverage' para calcular el promedio de 3 puntuaciones
//2. Utilice la función para calcular el promedio de ambos equipos.
//3. Crea una función 'checkWinner' que tome la puntuación media de cada equipo. como parámetros ('avgDolhins' y 'avgKoalas') y luego registra el ganador a la consola, junto con los puntos de victoria, según la regla anterior. Ejemplo: "Los koalas ganan (30 vs. 13)"
//4. Utilice la función 'checkWinner' para determinar el ganador tanto para los Datos 1 como para los Datos 2
//5. Ignora los sorteos esta vez.
