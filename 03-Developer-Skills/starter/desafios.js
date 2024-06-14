'use strict';

console.log('desafio 1');
//Dada una serie de temperaturas máximas pronosticadas, el termómetro muestra un string con las temperaturas dadas. Ejemplo: [17, 21, 23] imprimirá "... 17ºC en 1 días...21ºC en 2 días...23ºC en 3 días..."

//Test data:
//§ Data 1: [17, 21, 23]
//§ Data 2: [12, 5, -5, 0, 4]

//1. Cree una función 'printForecast' que tome una matriz 'arr' y registre un cadena como la anterior a la consola. Pruébelo con ambos conjuntos de datos de prueba.
//2. Utilice el marco de resolución de problemas: comprenda el problema y divídalo en subproblemas!
//# si debo realizar algo con cada una de las temperaturas lo mejor aca es usar un ciclo for y usar el indice (i) para determinar los dias, y para convertir el array devulto y tranformarlo en una cadena podemos usar el metodo toString.

function printForecast(arr) {
  let resultado = [];
  //let suma = 1;
  for (let i = 0; i < arr.length; i++) {
    `...${arr[i]} °C en ${i + 1} dias... `;
    resultado.push(`...${arr[i]} °C en ${i + 1} dias... `);
  }
  return resultado.toString();
}
//console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 1]));

//#si realizamos lo mismo , pero solo con los conocimientos que tenemos hasta ahora seria algo asi(basicamente sin usar el metodo toString)
function printForecast1(arr) {
  let suma = '';
  for (let i = 0; i < arr.length; i++) {
    suma += `${arr[i]} °C en ${i + 1} dias... `;
  }
  console.log('... ' + suma);
}
//console.log(printForecast([17, 21, 23]));
console.log(printForecast1([12, 5, -5, 0, 1]));
