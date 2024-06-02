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

/*
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
*/
console.log('plantillas literales');
/*

//de la forma tradicional
const firtName = 'nelson';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const nelson = ' soy ' + firtName + ' un ' + job + ' de ' + (year - birthYear) + ' años ' + '☝️';
console.log(nelson);

//utilizandom una plantilla literal
const nuevoNelson = ` soy ${firtName} un ${job} de ${year - birthYear} años`;
console.log(nuevoNelson);

//otra cosa que viene a solucionar es cuando necesitamos saltos de linea
console.log(
  'esta es una \n\
    oracion con \n\
    saltos de linea'
);

//pero ahora con las plantillas es tan facil como hacer enter
console.log(`esta es una
oracion con
saltos de linea`);
*/

console.log('tomando desiciones');

/*
const age = 18;
const esApta = age >= 18;

//esta es una estructura de control
if (esApta) {
  console.log('es apta para conducir 😊');
} else {
  console.log('no es apta para conducir 😢');
}

//veamos otro ejemplo, para saber si la persona nacio en el siglo 20 o en el siglo 21
const birthYear = 2012;
//la variable century debemos declararla fuera ya que si no lo hacemos esta no sera leida DESPUES
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
console.log('conversion y coersion de datos');
/*
//CONVERSION (le indicamos explicitamente que haga el cambio)
const inputYear = '1991';
//tener en cuenta que esta funcion 'Number' solo nos convertira nuestro string en donde esta este presente, en otras palabras la variable original sigue y seguira siendo string.
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(typeof inputYear);

//a menos que le digamos explicitamente(conversion) que queremos cambiarla. y para eso devemos hacerlo en el lugar en donde se declara

const inputYear1 = Number('1991');
// observamos que ya no es necesario declararla en todas partes, solo dende esta de define y ya
console.log(inputYear1, inputYear1);
console.log(inputYear1 + 18);
console.log(typeof inputYear1);

//hay ocasiones en que jv no podra convertir a un numero aunque se lo indiquemos explicitamente, en este caso nelson no puede ser un numero por lo  que nos arrojara NAN
console.log(Number('nelson'));

//pero si lo hacemos al revez si funcionara, (un texto no puede ser un numero, pero un numero si puede ser un string)
console.log(String(23), 23);

//COERSION(es jv el que hara el cambio automaticamente y detras de escena)
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
//*siempre jv intentara cambiar el tipo de dato de uno o varios datos basicamente para que la operacion que se intenta hacer se haga
console.log('23' * '23');

//veamos otros ejemplos para analizar el comportamiento de jv
let n = '1' + 1; //como el operador es (+) convertira el numero a string por lo que obtendrmos un (11 string)
//como el operador es (-) sera el string es que sera convertido a numero
n = n - 1;
console.log(n); //por lo que es resultado de n sera 10.

//ultimo ejemplo
console.log(2 + 2 + 2 + 2 + '2'); //obtenfremos un 8 string el que se concatenara con un 2 string
*/

console.log('valores de falsedad y verdad');
/*
//tenemos 5 valores que no son considerados booleanos hasta que los usamos, estos valores son
//=> 0, undefined, ' ', null, NaN

//este ejemplo es solo una demostracion ya que en la practica la transformacion es inplicita(COERSION)
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); //false
console.log(Boolean('jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean(' ')); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false

//veamos un ejemopllo practico a la hora de usar estos valores, IMPORTANTE devemos saber que en un bloque de codigo de una dondicional como es este caso, jv siempre intentara convertir la condicion a un booleano, como nuestro valor es 0 y ya sabemos que este valor se transformara a un valor false. es por esto el resultado que nos da.
const money = 0;
if (money) {
  console.log('hay dinero');
} else {
  console.log('no hay dinero');
}

//veamos otro ejemplo a tener en cuenta, como la variable peso no esta definida esta se convertira en un valor false, por lo tanto el resultado que nos da
let peso;
if (peso) {
  console.log('buen peso choro');
} else {
  console.log('el peso es indefinido');
}

//el conportamiento que hemos visto de estos valores podria traer errores esto lo veremos DESPUES
*/
console.log('Equality Operators');

/*
//NOTA se recomienda usar siempre el operador de igualdad estricto y realizar los cambios de tipo de dato manualmente
const age = '18';
//este operador stricto NO realiza coersion, significa que no cambiara el tipo de dato
if (age === 18) console.log('you just became an adult (Strict)');
//este operador SI realiza corsion significa que convertira el '18' y lo cambiara a number
if (age == 18) console.log('you just becamme an adult (loose)');

//pasemos ahora a como obtener un valor desde una pagina web
const favorite = prompt("what' s your favorite number");
console.log(favorite);
console.log(typeof favorite);

//*notar el valor que estamos pidiendo es de tipo number ,pero debemos saber que la funcion PROMT simpre nos devolvera cadenas(string) y si usamos el operador de igualdad que no es estricto commo en este ejemplo nos arrojara el resultado como si estuviera bien
if (favorite == 23) {
  console.log('esta operacion parece correcta, pero no lo es');
}

//es por casos como este que es sencillo que se recomienda usar siempre el estricto y realizar el cambio de tipo manualmente
const favorite1 = Number(prompt("what' s your favorite number"));

//tambien podemos seguir preguntando otras condiciones
if (favorite1 === 23) {
  console.log('cool ! este numero 23 si es el real y es amazing');
} else if (favorite === 7) {
  console.log('cool ! este numero 7 si es el real y es amazing');
} else if (favorite === 9) {
  console.log('cool ! este numero 9 si es el real y es amazing');
} else {
  console.log('el numero ingresado no es 23, 7 o 9');
}

//por ultimo veamos un ejemplo de del operador de DESIGUALDAD ya que hasta ahora solo hemos visto operadores de igualdad, //¿pero y si queremos comparar, prefuntar si son diferentes?
if (favorite1 !== 23) console.log('correcto es diferente');
else {
  console.log('no, el numero inggresado es igual a 23');
}
*/

console.log('Logica Bolleana');
/*

const tieneLicencia = true;
const tieneBuenaVision = true;

//todas deven ser true para que el resultado final sea true de lo contrario sera false
console.log(tieneLicencia && tieneBuenaVision);
//todas deben ser false para que el resultado final sea false de lo contrario sera true
console.log(tieneLicencia || tieneBuenaVision);
//invertira el valor el valor
console.log(!tieneLicencia);

//ejemplo usando el bloque if
if (tieneLicencia && tieneBuenaVision) {
  console.log('nelson is a able to driver');
} else {
  console.log('someone else shold  drive');
}

//agregamos una tercera variable
const estaCansada = false;
console.log(tieneLicencia && tieneBuenaVision && estaCansada);

//ahora con esta tercera variable mejoremos nuestra condicion, como la variable (estaCansada) esta en true podemos usar el operador de negacion para invertir y que nos arroja que si puede manejar
if (tieneLicencia && tieneBuenaVision && !estaCansada) {
  console.log('nelson is a able to driver');
} else {
  console.log('someone else shold  drive');
}
*/
console.log('The switch Statement-->DECLARACION DE CAMBIO');
/*
//cuando tenemos una sentencia if que tiene muchas opciones, tenemos la opcion de usar o reemplazarla por esta declaracion (switch), anque esta se utiliza poco aun la podremos encontrar por hay.
//*debemos saber que esta declaracion compara de manera ESTRICTA.
//*los breack son importantes ya que sin ellos todas las lineas de codigo se ejecutarian, en otras palabras no realizaria la comparacion y simplemente ejecutara todo.

const day = 'wednesday';
switch (day) {
  case 'monday':
    console.log('planificar la esctructura del curso');
    break;
  case 'tuesday':
    console.log('preparar los videos');
    break;
  //podemos especificar 2 o mas valores para comparar
  case 'wednesday':
  case 'thursday':
    console.log('codificar ejemplos');
    break;
  case 'friday':
    console.log('editar videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('descansar');
    break;
  default:
    console.log('dia ingresado incorrecto');
}

//realizamos el mismo ejercicio con la declaracion de if
if (day === 'monday') {
  console.log('planificar la estructura de la clase');
} else if (day === 'tuesday') {
  console.log('preparar los videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('codificar ejemplos');
} else if (day === friday) {
  console.log('editar videos');
} else if (day === 'saturday' || day === 'sanday') {
  console.log('descansar');
} else {
  console.log('el dia es invalido');
}
*/
console.log('OPERADOR TERNARIO');

//este operador, nos servira en ocasiones para reemplazar la declaracion if, pero debemos saber que no es un reemplazo ya que este operador solo permite 1 comparacion para operaciones mas grandes siempre deberemos usar if o switch
const age = 23;
age >= 18 ? console.log('puedo beber vino🍷') : console.log('solo bebo agua💧');

//como sabemos este operador es una expresion , porque todo operador en si tambien es una expresion(+, -, *. /, etc). osea que producira un valor en javascript, por lo tanto lo podemos almacenar en una variable
const bebida = age >= 18 ? 'vino🍷' : 'agua💧';

// y como toda expresion ahora la podemos utilizar en una plantilla literal, a diferencia de if y switch que son declaraciones y las plantillas esperan expresiones y no declaraciones.

console.log(`me gusta beber ${bebida}`); //podemois poner toda la expresion completa tambien

//veamos como seria esto en una sentencion if. RECORDAR que debemos declarar las variables fuera del bloque para que puedan ser leidas por esta sentencia esto lo veremos DESPUES
let bebida2;
if (age >= 18) {
  bebida2 = 'vino';
} else {
  bebida2 = 'agua';
}
console.log(bebida);
