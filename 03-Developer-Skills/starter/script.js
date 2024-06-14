// Remember, we're gonna use strict mode in all scripts now!
'use strict';
console.log('instalando herramientas para el desarrollo');
// el uso de prettier, todu  y otras herramientas nos ayudan a trabajar de manera mas comoda a codificar y tener un codigo congruente, esto es lo se vera en esta seccion,
// la instalacion de herramientas como Node.js que nos permite ejecutar codigo de javascript fuera del navegador

//probando haver si funciona Node.js, podemos ver que al escribir live-server en la consola se nos abre un navegador nuevo con este buscamos la carpeta que queremos ejecutar y con esto solo al momento de guardar los cambios o codigo a ejecutar se realizara de forma automatica(sin tener que recargar el navegador).
const calculoEdad = añoNacimiento => 2024 - añoNacimiento;
console.log(1990);

console.log('apreder a codificar');

//basicamente debemos codificar y codificar , crearse metas y tratar de cumplirlas sin importar el codigo si el limpio o si estamos utilizando el codigo mas funcional, debemos equivocarnos para continuir aprendiendo.

console.log('¿como resolver un problema?');
/*
//devemos investigar, debemos hacernos preguntas , debemos dividir este problema yen otros mas pequeños y volver a hacernos preguntas, solo asi podremos comprender y dar solucion al gran problema que tenemos.

// EJEMPLO;
//TRABAJAMOS para una empresa que construye un termómetro doméstico inteligente. Nuestra tarea más reciente es la siguiente: dada una serie de temperaturas de un día, calcule la amplitud de la temperatura. Tenga en cuenta que a veces puede haber un error en el sensor.

const temperaturas = [3, -2, -6, -1, 'error', 9, 13, 17, 14, 9, 5];

//PRIMERO. DEBEMOS ENTER EL PROBLEMA para esto debemos hacernos preguntas
//¿que es la amplitud de la temperatura?
//es la diferencia entre la temperatura mas alta y la mas baja
//¿como calculamos esta amplitud desde un array?
//debemos restarle el valor minimo al valor maximo
//¿como se deve ver un error de sensor y que hacer si ocurre uno?
// bueno en este ejemplo ya sabemos como se ve un error, y en este caso solo podemos ignorar el error

//SEGUNDO. DEBEMOS SUBDIVIDIR EL PROBLEMA EN OTROS MAS PEQUEÑOS
//¿como ignoramos un error?
//pódemos usar una condicional en donde si el tipo de valor no es un numero y aplicamos la sentencia CONTINUE PARA QUE LO SALTE
//¿como encontramos el maximo valor y minimo deltro del array?

//siempre es recomendable crear una funcion para realizar alguna operacion
const calcTemAmplitude = function (tems) {
  //primero asumimos que el primer elemento es el valor maximo y como eñ minimo
  let max = tems[0];
  let min = tems[0];

  //preguntamos si el valor actual es mayor o  menor al valor maximo o minimo y si es asi ese valor se transformara en el valor maximo o minimo
  for (let i = 0; i < tems.length; i++) {
    if (typeof tems[i] !== 'number') {
      continue;
    }
    if (tems[i] > max) max = tems[i];
    if (tems[i] < min) min = tems[i];
  }
  console.log(max, min);
  //retornamos el valor max menos el valor min (amplitud)
  return max - min;
};
let amplitud = calcTemAmplitude(temperaturas);
console.log(amplitud);

//EJEMPLO 2
//LA FUNCION AHORA DEBERA RECIBIR 2 ARRAY CON TEMPERATURAS
//¿debemos implementar la misma funcionalidad 2 veces?
// claramente no , lo que debemos hacer es fusionar las 2 array desde el comienzo, pra trabajar solo con 1 array
//¿como fusionamos 2 arrays?
//al buscar encontramos que existe un metyodo CONCAT que fusiona 2 o mas arrays

const calcTemAmplitudeNew = function (tems1, tems2) {
  const arraysFusionados = tems1.concat(tems2);
  console.log(arraysFusionados);

  let max = arraysFusionados[0];
  let min = arraysFusionados[0];
  for (let i = 0; i < arraysFusionados.length; i++) {
    if (typeof arraysFusionados[i] !== 'number') {
      continue;
    }
    if (arraysFusionados[i] > max) max = arraysFusionados[i];
    if (arraysFusionados[i] < min) min = arraysFusionados[i];
  }
  console.log(max, min);
  return max - min;
};
let amplitudNew = calcTemAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudNew);
*/
console.log('depurando errores con la consola y puntos de interrupcion');
/*
//intentaremos buscar y dar solucion a un pequeño error atravez del la consola del desarrollador
//EJEMPLO: tenemos nuestro termometro inteligente y tenemos que convertir las temperaturas actuales(celsius) a KALVIN
const medicionKalvin = function () {
  const medicion = {
    tipo: 'temperatura',
    unidad: 'celsius',
    //solucionamos el problema convirtiendo el valor de 'PROMT' A NUMBER
    // valor: Number(prompt('Grados celsius: ')),
    valor: 10,
  };
  //intentamos encontrar el error inspeccionando el objeto a si como el valor que pedimos al usuario. nos damos cuenta que el valor retornado del metodo 'PROMPT' nos devuelve un string
  console.log(medicion);
  console.log(medicion.valor);

  const kelvin = medicion.valor + 273;
  return kelvin;
};
//* al ejecutar la funcion identificamos el error
console.log(medicionKalvin());

//veamos otro ejemplo de como encontrar(depurar) un error usando la consola
const calcTemAmplitudeError = function (tems1, tems2) {
  const arraysFusionados = tems1.concat(tems2);
  console.log(arraysFusionados);
  // el error es basicamente que el valor minimo establecido en 0 ya es el valor mas bajo de todo el array, si tuvieramos un array con un valor mas bajo que cero si funcionaria, pero la idea es que todo sea dinamico para evitar estos erroes
  let max = 0;
  let min = 0;
  for (let i = 0; i < arraysFusionados.length; i++) {
    if (typeof arraysFusionados[i] !== 'number') {
      continue;
    }
    if (arraysFusionados[i] > max) max = arraysFusionados[i];
    if (arraysFusionados[i] < min) min = arraysFusionados[i];
  }
  console.log(max, min);
  return max - min;
};
//al ejecutar la funcion nos damos cuenta del error(IDENTIFICAR)
let amplitudError = calcTemAmplitudeError([3, 5, 1], [9, 4, 5]);
console.log(amplitudError);
*/
