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

// const calcTip1 = boleta =>
//   boleta >= 50 && boleta <= 300 ? boleta * (15 / 100) : boleta * (20 / 100);

// //2. ¡Y ahora usemos matrices! Así que cree una matriz 'facturas' que contenga los datos de prueba a continuación
// const facturas = [125, 555, 44];

// //3. Cree una matriz de 'propinas' que contenga el valor de la propina para cada factura, calculado a partir de la función que creó antes
// const propinas = [calcTip1(facturas[0]), calcTip1(facturas[1]), calcTip1(facturas[2])];
// console.log(propinas);
// //4. Bonificación: cree una matriz 'total' que contenga los valores totales, de modo que la factura + la propina
// const total = [facturas[0] + propinas[0], facturas[1] + propinas[1], facturas[2] + propinas[2]];
// console.log(total);

//Test data: 125, 555 and 44
//Sugerencia: recuerde que una matriz necesita un valor en cada posición, ¡y ese valor puede ser en realidad el valor devuelto de una función! Por lo tanto, puede simplemente llamar a una función como valores de matriz (así que no almacene primero los valores de sugerencia en variables separadas, sino directamente en la nueva matriz)

console.log('desafio 3');
//¡Volvamos a Mark y John comparando sus IMC! Esta vez, usemos objetos para implementar los cálculos! Recuerde: IMC = masa / altura ** 2 = masa / (altura * altura) (masa en kg y altura en metros)

//Datos de prueba: Marks pesa 78 kg y mide 1,69 m. Juan pesa 92 kg y mide 1,95 m. de alto.

//1. Para cada uno de ellos, cree un objeto con propiedades para su nombre completo, masa y altura (Mark Miller y John Smith)
//2. Cree un método 'calcBMI' en cada objeto para calcular el IMC (el mismo método en ambos objetos). Almacene el valor del IMC en una propiedad y también devuélvalo del método
// const mark = {
//   firstName: 'mark',
//   lastName: 'miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.imc = this.mass / this.height ** 2;
//     return this.imc;
//   },
// };
// const john = {
//   firstName: 'john',
//   lastName: 'smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.imc = this.mass / this.height ** 2;
//     return this.imc;
//   },
// };

// //3. Inicie sesión en la consola quién tiene el IMC más alto, junto con el nombre completo y el respectivo IMC. Ejemplo: "¡El IMC de John (28,3) es mayor que el de Mark (23,9)!"
// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// console.log(
//   `el IMC de mark (${mark.imc}) es ${mark.imc >= john.imc ? 'mayor' : 'menor'} al indice de john (${
//     john.imc
//   })`
// );

console.log('desafio  4');
/*
//¡Mejoremos aún más la calculadora de propinas de Steven, esta vez usando bucles!
const calcTip1 = boleta =>
  boleta >= 50 && boleta <= 300 ? boleta * (15 / 100) : boleta * (20 / 100);

//1. Cree una matriz 'facturas' que contenga los 10 valores de factura de prueba
const facturas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//2. Cree matrices vacías para las propinas y los totales ("propinas" y "totales")
let propinas = [];
let totales = [];
//3. Utilice la función 'calcTip' que escribimos antes (no es necesario repetirla) para calcular propinas y valores totales (factura + propina) para cada valor de factura en la matriz de facturas. Utilice un bucle para realizar los 10 cálculos!
for (let i = 0; i < facturas.length; i++) {
  propinas.push(calcTip1(facturas[i]));
  totales.push(propinas[i] + facturas[i]);
}
console.log(propinas);
console.log(totales);
//Datos de prueba: 22, 295, 176, 440, 37, 105, 10, 1100, 86 y 52
//Sugerencias: llame a 'calcTip' en el bucle y use el método push para agregar valores al consejos y matrices de totales

//4. Bonificación: escriba una función 'calcAverage' que tome una matriz llamada 'arr' com un argumento. Esta función calcula el promedio de todos los números en el dado formación. ¡Este es un desafío difícil (no lo hemos hecho antes)! Aquí se explica cómo resuélvelo:
//4.1. Primero, deberá sumar todos los valores de la matriz. Para hacer la suma, comience creando una variable 'suma' que comience en 0. Luego recorra el matriz usando un bucle for. En cada iteración, agregue el valor actual al variable 'suma'. De esta manera, al final del ciclo, tendrás todos los valores. agregado junto
//4.2. Para calcular el promedio, divide la suma que calculaste antes por la longitud de la matriz (porque esa es la cantidad de elementos)
//4.3. Llame a la función con la matriz 'totales'

const calcAverage = function (arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    //suma = suma + arr[i];
    suma += arr[i];
  }
  console.log(suma);
  return suma / arr.length;
};

console.log(calcAverage(totales));
*/
