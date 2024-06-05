//*el modo estricto es una herramienta que nos ayudara a evitar errores y a tener un codigo mas limpio, esto gracias a que nos prohibira realizar ciertas cosas y tambien nos advertira de errores. todo esto se debe a algunos comportamientos extraños de este lenguaje y que no se pueden corregir por herencia, y que podrian llevar a errores en nuestro codigo.
'use strict';

//veamos un ejemplo sencillo de commo este modo stricto nos ayudara a encontrar o saber de un error que sin el tendriamos que buscarlo
let hasDriverLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriverLicence) console.log('I can drive');

//otro ejemplo de esta ayuda que nos brinda el modo estricto es por ejemplo que nos advierte de posibles palabras que son propias del lenguaje y que no podemos usar y de palabras que podrian ser utilizadas en el futuro.
//const interface = 'Audio'; //nos advierte que este palabra podria ser usada por el lemguaje y que no podemos usarla
//const private = 232; //lo mmismo para con el nombre de esta variable

console.log('FUNCIONES');
/*
//las funciones son una de las piezas fundamentales del lenguaje, esta pnos permite poder reutilizar algun trozo de codigo, pasarle datos , que nos devuelva datos etc.
function logger() {
  console.log('my name is nelson');
}

//la llamamos, invocamos o ejecutamos las veces que deseemos, tambien podemos observar que cuando no le pasamos argumentos el valor que devuelve es undefined, pero esto en este caso es irelevante y tampoco provacara un error.
console.log(typeof logger());
logger();
logger();

//veamos un ejemplo donde le pasamos datos(parametros) y esta nos devuelve otros datos
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
//al momento de llamarla es cuando le pasamos los valores(argumentos) que tomaran los parametros vacios(apples, oranges)
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//no es obligacion capturar el valor, simplemente podemos imprimir el valor directamente
console.log(fruitProcessor(5, 0));

const orangeJuice = fruitProcessor(2, 8);
console.log(orangeJuice);
*/
console.log('function expression vs declarations');
/*
//*tenemos 2 tipos o formas de escriir una funcion, por un lado tenemos las funciones declarativas donde usamos expresamente la palabra function seguido del nombre de la misma. y las funciones expresivas en donde declaramos la palabras funcion, pero no le damos un nombre si no que la almacenamos en una variable.
//# la gran diferencia entre las 2 es que las funciones declarativas podemos llamarlas antes de que sean declaradas,  esto es debido al hoisting que lo veremos mas adelante

//veamos otro ejemplo de una funcion declarativa, esta vez para calcular la edad
function calcAge(birthYear) {
  return 2024 - birthYear;
}
const edad1 = calcAge(1999);
console.log(edad1);

//ahora veamos como seria con una  funcion de expresion o tambien conocida como funcion anonima, como vemos esta esta almacenada en una variable y esto es asi porque la funcion en si, es una expresion osea que produce un valor, es por eso que se puede almacenar en una variable.
const calcAge1 = function (birthYear) {
  return 2024 - birthYear;
};
const age1 = calcAge1(1999);
console.log(age1);
*/
console.log('Arrow functions');
/*
//de hecho esta es una tercera forma de declarar una funcion, basicamente es otra manera de crear una FUNCION DE EXPRESION, es mas corta y rapida de la que ya conocemos ya que no necesitamos los corchetes,ni la palabra return por lo menos cuando solo tenemos 1 linea de codigo
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(2020);
console.log(age3);

//veamos un ejemplo algo mas complejo, al tener mas de 1 linea de codigo si hay que usar los corchetes y la palabra return explicita y si tenemos mas de un parametro debemos usar parentesis
const añosHastaJubilacion = (birthYear, name) => {
  const age = 2024 - birthYear;
  const jubilacion = 65 - age;
  return `a ${name} le quedan ${jubilacion} años para jubilarse`;
};
const años = añosHastaJubilacion(2000, 'pablo');
console.log(años);

//debemos saber que esta funcion flecha NO posee la palabra THIS. esto hace que tengamos mucho cuidado en donde y cuando usamos esta funcion, de todas maneras esto lo veremos DESPUES
*/
console.log('Functions Calling other Functions');
/*

//funcion que corta la fruta
function cortadoraFrutas(fruta) {
  return fruta * 4;
}

//funcion que prepara el jugo con los trozos de fruta cortados
function maquinaJugo(manzanas, naranjas) {
  const trozosMazana = cortadoraFrutas(manzanas);
  const troszosNaranja = cortadoraFrutas(naranjas);

  const jugo = `jugo hecho con ${trozosMazana} trozos de manzana y ${troszosNaranja} trozos de naranja`;
  return jugo;
}
console.log(maquinaJugo(2, 4));
*/
console.log('resumen de las funciones');

//debemos entender el flujo que tienen los parametros y argumentos, primero llamamos a la funcion añosHataJubilacion le pasamos los 2 argumentos que esta necesita, el añoNacimiento recibira el 2000 y sera el utilizado en la funcion calculoEdad en donde el argumento sera esta mismo parametro, por lo tanto el parametro que espera la funcion calculoEdad sera el mismo que el de la funcion añosHastaJubilacion(no es necesario que lleven los mismos nombres).

//algo que tambien debemos saber sobre las funciones especificamente la palabra 'return' es que esta al momento de ejecutarse se ira, en otras palabras solo se ejecutara una vez. si hay codigo abajo este no sera retornado.
const calculoEdad = function (añoNacimiento) {
  return 2024 - añoNacimiento;
};
const añosHastaJubilacion = function (añoNacimiento, name) {
  const age = calculoEdad(añoNacimiento);
  const jubilacion = 65 - age;
  if (jubilacion > 0) {
    return `a ${name} le quedan ${jubilacion} años para jubilarse`;
  } else {
    //tambien se suele usar el numero(-1) que suele ser para numeros que no tienen sentido o que no significan nada, como en este caso que los años para jubilarse seria un numero negativo
    return ` ya estas jubilado felicidades`;
  }
};
console.log(añosHastaJubilacion(1950, 'juan'));
