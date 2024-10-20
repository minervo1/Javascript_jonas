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

console.log('DESAFIO NUMERO 4');

//Julia y Kate todavía están estudiando perros, y esta vez están estudiando si los perros comen demasiado o muy poco. Comer demasiado significa que la porción actual de comida del perro es mayor que la porción recomendada, y comer muy poco es todo lo contrario. Comer una cantidad adecuada significa que la porción actual de comida del perro está dentro del rango del 10%. por encima y 10% por debajo de la porción recomendada (ver sugerencia).

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//Consejos:
//Utilice muchas herramientas diferentes para resolver estos desafíos, puede utilizar el resumen conferencia para elegir entre ellos 😉
//Estar dentro de un rango de 10% por encima y por debajo de la porción recomendada significa: actual > (recomendado * 0.90) && actual < (recomendado * 1.10). Básicamente, la porción actual debería estar entre el 90% y el 110% del porción recomendada.

//1. Recorra la matriz 'perros' que contiene objetos de perro y, para cada perro, calcule la porción de comida recomendada y agréguela al objeto como una nueva propiedad. No cree una nueva matriz, simplemente recorra la matriz. Foro: alimento recomendado = peso ** 0,75 * 28. (El resultado está en gramos de comida, y el peso debe estar en kg)
dogs.forEach(function (perro) {
  console.log((perro.comidaRecomend = Math.trunc(perro.weight ** 0.75 * 28)));
});
console.log(dogs);
//2. Encuentra el perro de Sarah e inicia sesión en la consola, ya sea que esté comiendo demasiado o demasiado poco. Pista: algunos perros tienen varios dueños, por lo que primero debes encontrar a Sarah en la matriz de propietarios, por lo que este es un poco complicado (a propósito) 🤓

//NOTA dogs.find(valor => valor.owners esto hasta ahora es un array por lo  tando debemos usar este metodo de array (include)
const saraDogs = dogs.find(valor => valor.owners.includes('Sarah'));
console.log(
  ` el perro de sarah come ${
    saraDogs.curFood > saraDogs.comidaRecomend ? 'mucho' : 'poco'
  }`
);

//3. Cree una matriz que contenga todos los dueños de perros que comen demasiado. ('ownersEatTooMuch') y una array con todos los dueños de perros que comen muy poco ('ownersEatTooLitle').
const ownersEatTooMuch = [];
const ownersEatTooLitle = [];

dogs.forEach(perro =>
  perro.curFood > perro.comidaRecomend
    ? ownersEatTooMuch.push(perro.owners)
    : ownersEatTooLitle.push(perro.owners)
);

console.log(ownersEatTooMuch.flat());
console.log(ownersEatTooLitle.flat());

//# esta es otra forma de realizar el mismo ejercicio
const ownersEatTooMuch1 = dogs
  .filter(perro => perro.curFood > perro.comidaRecomend)
  .map(perro => perro.owners)
  .flat();
const ownersEatTooLitle1 = dogs
  .filter(perro => perro.curFood < perro.comidaRecomend)
  .map(perro => perro.owners)
  .flat();
console.log(ownersEatTooMuch1);
console.log(ownersEatTooLitle1);

//4. Registre una cadena en la consola para cada matriz creada en 3., como esta: "Matilda y ¡Los perros de Alice y Bob comen demasiado!" y "Los perros de Sarah, John y Michael comen ¡Muy poco!".
console.log(
  `los perros de ${ownersEatTooLitle1} comen mucho y los perros de ${ownersEatTooLitle1} comen poco`
);

//# otra forma de realizarlo
console.log(
  `los perros de ${ownersEatTooLitle1.join(
    ' y '
  )} comen muy poco, y los perros de ${ownersEatTooMuch1.join(
    ' y '
  )} comen muy poco`
);

//5. Registre en la consola si hay algún perro comiendo exactamente la cantidad de comida eso se recomienda (solo verdadero o falso)
console.log(dogs.includes(dogs.comidaRecomend === dogs.curFood));
console.log(dogs.some(perro => perro.comidaRecomend === perro.curFood));

//6. Inicie sesión en la consola si hay algún perro comiendo una cantidad adecuada de comida. (solo verdadero o falso)
console.log(
  dogs.some(
    perro =>
      perro.curFood > perro.comidaRecomend * 0.9 &&
      perro.curFood < perro.comidaRecomend * 1.1
  )
);

//7. Cree una matriz que contenga los perros que comen una buena cantidad de comida (pruebe reutilizar la condición utilizada en 6.)

//guardamos la funcion en una variable para que sea mas facil
const perrosComenBien = dogs =>
  dogs.curFood > dogs.comidaRecomend * 0.9 &&
  dogs.curFood < dogs.comidaRecomend * 1.1;

//filter creara una funcion con los valores que cumplan la condicion osea los valores que sean 'true' en este caso solo hay un elemento true es por eso que solo nos arroja solo 1 objeto
console.log(dogs.filter(perrosComenBien));

//8. Cree una copia superficial de la matriz 'perros' y ordénela por alimento recomendado. porción en orden ascendente (tenga en cuenta que las porciones están dentro del objetos de la matriz 😉).
const ordenado = dogs
  .slice()
  .sort((actual, siguiente) =>
    actual.comidaRecomend > siguiente.comidaRecomend ? 1 : -1
  );
console.log(ordenado);

//# esta es otra forma de realizar el ejercicio
//RECORDAR el metodo 'sord' comparara el elemento actual(a) con el siguiente (b). tambien recordar que si a > b  entonces a - b siempre dara un numero positivo y si a < b entonces a - b siempre dara un valor negativo. si seguimos esta logica podemos hacer lo siguiente.
const perrosOrdenados = dogs
  .slice()
  .sort((a, b) => a.comidaRecomend - b.comidaRecomend);
console.log(perrosOrdenados);
