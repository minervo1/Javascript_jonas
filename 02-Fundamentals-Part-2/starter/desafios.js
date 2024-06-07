'use strict';
console.log('desafio 1');
/*
//¡Volvemos a los dos equipos de gimnasia, los Delfines y los Koalas! Hay un nuevo disciplina de gimnasia, que funciona de manera diferente.Cada equipo compite 3 veces y luego se calcula el promedio de las 3 puntuaciones (por lo que una puntuación media por equipo). Un equipo sólo gana si tiene al menos el doble de la puntuación media del otro equipo. De lo contrario, ¡ningún equipo gana!

//Datos de prueba:
//§ Dato 1: Los delfines obtienen 44, 23 y 71. Los koalas obtienen 65, 54 y 49
//§ Datos 2: Los delfines obtienen 85, 54 y 41. Los koalas obtienen 23, 34 y 27
//Consejos:
//§ Para calcular el promedio de 3 valores, súmalos todos y divídelos por 3
//§ Para verificar si el número A es al menos el doble del número B, verifique A >= 2 * B.
// Aplicar esto a las puntuaciones promedio del equipo.

//1. Cree una función de flecha 'calcAverage' para calcular el promedio de 3 puntuaciones
const calcAverage = (pt1, pt2, pt3) => (pt1 + pt2 + pt3) / 3;
//2. Utilice la función para calcular el promedio de ambos equipos.
let koalasAverage = calcAverage(23, 34, 27);
let delfinesAverage = calcAverage(85, 54, 41);
console.log(koalasAverage, delfinesAverage);
//3. Crea una función 'checkWinner' que tome la puntuación media de cada equipo. como parámetros ('avgDolhins' y 'avgKoalas') y luego registra el ganador a la consola, junto con los puntos de victoria, según la regla anterior. Ejemplo: "Los koalas ganan (30 vs. 13)"
const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    return `ganan los deslfines ${avgDolhins} vs ${avgKoalas} `;
  } else if (avgKoalas >= 2 * avgDolhins) {
    return `ganan los Koalas ${avgKoalas} vs ${avgDolhins} `;
  } else {
    return `ninguno de los 2 equipos ha ganado`;
  }
};
console.log(checkWinner(delfinesAverage, koalasAverage));
*/
console.log('desafio 2');
//Steven todavía está construyendo su calculadora de propinas, usando las mismas reglas que antes: Propina del 15% de el billete si el valor del billete está entre 50 y 300, y si el valor es diferente, la propina es 20%.

//1.Escriba una función 'calcTip' que tome cualquier valor de factura como entrada y devuelva la propina correspondiente, calculada según las reglas anteriores (puede consultar el código del primer desafío de calculadora de propinas si es necesario). Utilice el tipo de función que más le guste. Pruebe la función usando un billete con valor de 100
// const calcTip = function (boleta) {
//   if (boleta >= 50 && boleta <= 300) {
//     return boleta * (15 / 100);
//   } else {
//     return boleta * (20 / 100);
//   }
// };

const calcTip1 = boleta =>
  boleta >= 50 && boleta <= 300 ? boleta * (15 / 100) : boleta * (20 / 100);

//2. ¡Y ahora usemos matrices! Así que cree una matriz 'facturas' que contenga los datos de prueba a continuación
const facturas = [125, 555, 44];

//3. Cree una matriz de 'propinas' que contenga el valor de la propina para cada factura, calculado a partir de la función que creó antes
const propinas = [calcTip1(facturas[0]), calcTip1(facturas[1]), calcTip1(facturas[2])];
console.log(propinas);
//4. Bonificación: cree una matriz 'total' que contenga los valores totales, de modo que la factura + la propina
const total = [facturas[0] + propinas[0], facturas[1] + propinas[1], facturas[2] + propinas[2]];
console.log(total);

//Test data: 125, 555 and 44
//Sugerencia: recuerde que una matriz necesita un valor en cada posición, ¡y ese valor puede ser en realidad el valor devuelto de una función! Por lo tanto, puede simplemente llamar a una función como valores de matriz (así que no almacene primero los valores de sugerencia en variables separadas, sino directamente en la nueva matriz)
