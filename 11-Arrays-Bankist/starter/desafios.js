'use strict';
console.log('DESAFIO NUMERO N° 1');
/*
//Julia y Kate están haciendo un estudio sobre perros. Entonces cada uno de ellos preguntó a 5 dueños de perros. sobre la edad de su perro y almacenó los datos en una matriz (una matriz para cada uno). Para ahora solo les interesa saber si un perro es adulto o cachorro. Un perro es adulto si tiene al menos 3 años y es cachorro si tiene menos de 3 años.

//Test data:
//Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// 1- Cree una función 'checkDogs', que acepte 2 matrices de edades de perros('dogsJulia' y 'dogsKate') y hace lo siguiente:
//1. Julia descubrió que los dueños del primer y del último perro en realidad tenían gatos, no perros! Así que crea una copia superficial de la matriz de Julia y elimina el gato. edades de esa matriz copiada (porque es una mala práctica mutar la función parámetros)
//2. Cree una matriz con los datos de Julia (corregidos) y Kate.
//3. Para cada perro restante, inicie sesión en la consola si es un adulto ("Perro número 1 es adulto y tiene 5 años") o un cachorro ("El perro número 2 todavía es un cachorro 🐶")
//4. Ejecute la función para ambos conjuntos de datos de prueba.

const checkDogs = function (dogsJulia, dogsKate) {
  //* creamos  una copia y quitamos los gatos
  const dogsJuliaCopy = dogsJulia.slice(1, dogsJulia.length - 1);
  //esta es otra forma de crear una copia superficial y quitar el primer y ultimo elemento
  //const dogsJuliaCopy = dogsJulia.slice();
  //dogsJuliaCopy.splice(0, 1);
  //dogsJuliaCopy.splice(-1);

  //* unimos las 2 matrizes
  const dogs = dogsJuliaCopy.concat(dogsKate);
  console.log(dogs);
  //* creamos el texto pedido
  dogs.forEach(function (perro, indice) {
    //* con el operador ternario determinamos si es adulto o cachorro
    const edad = perro >= 3 ? 'adulto 🐶' : 'cachorro 🐶';
    console.log(
      `el perro numero ${indice + 1} es un ${edad} tiene ${perro} años`
    );
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/
console.log('DESAFIO N° 2');
/*
//Volvamos al estudio de Julia y Kate sobre los perros. Esta vez quieren convertir edades de perros a edades humanas y calcular la edad promedio de los perros en su estudio

const arra1 = [5, 2, 4, 1, 15, 8, 3];
const arra2 = [16, 6, 10, 5, 6, 1, 4];

//Cree una función 'calcAverageHumanAge', que acepte matrices de perros envejece ('edades') y hace las siguientes cosas en orden:
//1. Calcula la edad del perro en años humanos usando la siguiente fórmula: si el perro es <= 2 años, edad humana = 2 * edad del perro. Si el perro tiene > 2 años, Edad humana = 16 + Edad del perro * 4
//2. Excluir a todos los perros que tengan menos de 18 años humanos (que es lo mismo que tener perros que tengan al menos 18 años)
//3. Calcula la edad humana promedio de todos los perros adultos (ya deberías saberlo) de otros desafíos cómo calculamos promedios 😉)
//4. Ejecute la función para ambos conjuntos de datos de prueba.

const calcAverageHumanAge = function (array) {
  const edadHumana = array
    .map(function (ele) {
      if (ele <= 2) {
        return 2 * ele;
      } else if (ele > 2) {
        return 16 + ele * 4;
      }
    })
    .filter(function (ele) {
      return ele >= 18;
    })
    .reduce(function (acu, valor, _, array) {
      return acu + valor / array.length;
    }, 0);
  return edadHumana;
};
const final = calcAverageHumanAge(arra1);
console.log(final);

// este mismo codigo podemos hacerlo de otras formas
const calcAverageHumanAge1 = function (arr) {
  const edadHumana1 = arr.map(ele => (ele <= 2 ? 2 * ele : 16 + ele * 4));
  const perrosAdutos = edadHumana1.filter(ele => ele >= 18);
  const promedio =
    perrosAdutos.reduce((acu, ele, _, array) => acu + ele, 0) /
    perrosAdutos.length;

  return promedio;
};
const promedio1 = calcAverageHumanAge1(arra1);
console.log(promedio1);

// esta es ogra forma de hacerlo
const calcAverageHumanAge2 = function (array) {
  const edadHumana2 = array
    .map(ele => (ele <= 2 ? 2 * ele : 16 + ele * 4))
    .filter(ele => ele >= 18)
    .reduce((acu, ele, _, array) => acu + ele / array.length, 0);
  return edadHumana2;
};
const final2 = calcAverageHumanAge2(arra1);
console.log(final2);
*/
console.log('DESAFIO N° 3');
// ESTE DESAFIO ES CREAR EL MISMO CODIGO DEL DESAFIO 2 , PERO AHOARA USANDO EL ENCADENAMIENTO DE METODOS. COSA QUE YA REALIZE EN EL DESAFIO NUMERO 2.
