/*
let js = 'amazing';
console.log(40 + 20 + 10 - 1);
console.log('nelson');
console.log(23);

//LA CONVENCION DE CAMELCASE ES CASI OBLIGATORIA
let firstName = 'Nelson';
let last_name = 'rodriguez';
//podemos usar las variables las veces que queramos
console.log(firstName);
console.log(firstName);
console.log(firstName, last_name);

//Por convencion tampoco deberiamos escribir la primera letra de una palabra sola, con mayuscula ya que estas estan reservadas para POO
let Name = 'maria';
console.log(Name);

// el uso de mayusculas en toda la palabra no esta permitido, ya que esta forma de escribir esta reservada para palabras especificas (constantes)
PI = 3.1415;
*/

console.log('tipos de datos');

/*
//booleano
let booleano = true;
console.log(booleano);

console.log(typeof true);
console.log(typeof 'strting');
console.log(typeof 23);

//reasignasion de una variable (tipado dinamico)
booleano = '!string!';
console.log(booleano);

//indefined valor vacio que no ha sido definido
let year;
console.log(year);
console.log(typeof year);

//reasignando la variable year
year = 1222;
console.log(typeof year);

//ERROR EN LA VARIABLE typeOf, como se observa en la consola este indica que NULL es de tipo objeto, pero este es un error de javascript que no se corrige por razones de herencia.
//debemos saber que null tambien indica un valor vacio, pero no es lo mismo que indefined (DESPUES)
console.log(typeof null);
*/

console.log('let', 'const', 'var');

/*
//reasignar una variable tambien se le conoce como MUTAR y let es perfecta para esto
let age = 30;
age = 32;

//por otro lado CONST la usaremos para declarar variables que no cambiaran su valor nunca (inmutables)
const birthYear = 1999;

//mutar esta variable declarada con const nos dara un error y lo podemos apreciar en consola
//birthYear = 2000;

//otra cosa que nos dara error es declarar una variable declarada con CONST vacia
//const job;

// la tercera forma de declarar una variable es con VAR aunque este no debe usarse ya que esta descontinuada lo veremos DESPUES, pero basicamente funciona casi igual que let a simple vista.

var trabajo = 'programador';
trabajo = 'profesor';

//tambien veremos DESPUES que las variables pueden escribirse sin usar estas palabras y funcionaran igual, pero por detras no se esta creando el 'scope'. solo creara esta variable en el globo objet y eso puede traer problemas.

apellido = 'rodriguez';
console.log(apellido);
*/

console.log('operadores');

/*
const ageJonas = 3000 - 1990;
console.log(ageJonas);

const ageMonica = 3000 - 2018;
console.log(ageMonica);

// mejoresmos el codigo ya que tenemos 2 variables quer se repiten y eso no es una buena practica.
//NOTA A PESAR DE QUE EL AÑO ACTUAL SI PUEDE CAMBIAR NO USO LET, PORQUE SE QUE ESTA VARIABLE NO LA CAMBIARE NUNCA
const añoActual = 3000;
const edadMonica = añoActual - 2018;
const edadJonas = añoActual - 1990;
console.log(edadMonica, edadJonas);

console.log(ageJonas * 2, ageJonas / 2, ageJonas ** 3);

//otro uso que se le da al operador +
const firtName = 'nelson';
const lastName = 'rodriguez';
console.log(firtName + ' ' + lastName);

//OPERADORES DE ASIGNASION (=, +=, -=, *=, /=, ++, --)

let x = 10 + 5;
console.log(x);

x += 10; // x = x + 10;
console.log(x);

x *= 4; // x = x * 4;
console.log(x);

x /= 2; // x = x /2
console.log(x);

x++; // x = x + 1
console.log(x);

x--; //x = x -1
console.log(x);

//OPERA,DORES DE COMPARACION -> su ejecusion terminara en un valor booleano (true, false)
console.log(ageJonas > ageMonica);
console.log(ageJonas < ageMonica);
console.log(ageJonas >= ageMonica);
console.log(ageJonas <= ageMonica);

//por lo general vamos a querer guardar el valor resultante de alguna ooperacion para usarlo luego
const isBoolean = ageMonica >= 18;
console.log(isBoolean);

//esto es lo mismo que esta en las lineas 90 y 91 y ademas es lo mismo que esta en la linea 122. en otras palabras podemos reducir considerablemente las lineas de codigo si sabemos usar bien los operadores.
console.log(añoActual - 1990 > añoActual - 1018);
*/

console.log('precedencia de operadores');

//¿como sabe javascript que operador debe ejecutar primero y cual no?.
//esto es gracias a un par de reglas definidas conocidas como precedencia de operadores
const añoActual = 3000;
const edadMonica = añoActual - 2018;
const edadJonas = añoActual - 1990;

//en este linea se ejecutan primero los (-) y al final de ejecuta el (>) porque la precedencia de - es mayor que >
console.log(añoActual - 1990 > añoActual - 1018);

// en este otro ejemplo la precedencia es la misma, pero como este signo se ejecuta de izquierda a derecha el valor es 10
console.log(25 - 10 - 5);

//en este otro ejemplo tenemos una operaccionn de derecha a izquierda (=) y otra de izquierda a derecha.
//*si no fuera de esta manera esta lectura no tendria resultado ya que si se leyera de izquierda a dercha x seria igual a y, pero y a un no esta definido
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

//por ultimo veamos el operador de mayor precedencia ()
const averageAge = (edadJonas + edadMonica) / 2;
console.log(edadJonas, edadMonica, averageAge);
