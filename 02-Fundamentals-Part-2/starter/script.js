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
/*

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
*/
console.log('Introduccion a los arrays');
/*

//los array (matrices en español) es como una gran variable donde podemos tener al mismo tiempo varios datos a los cuales podemos acceder de forma facil y ordenada tanto por los programadores como para el mismo sofware

//EJEMPLO en vez de crear varias variables para varios amigos, los array nos permite ahorrar lineas de codigo y listas todos nuestro amigos dentro de el
const amigo1 = 'nelson';
const amigo2 = 'juan';
const amigo3 = 'pepe';

const friends = ['nelson', 'juan', 'pepe'];
console.log(friends);

//esta es otra manera de escribir un array, aunque la sintaxis literal es la mas usada. y como se observa los arrays pueden recibir cualquier tipo de dato
const years = new Array(1991, 1984, 2008, 2020);

//atravez de su indice podremos sacar los datos desde el array a que los array estan basados en indices comenzando con el cero
console.log(friends[0]);
console.log(friends[2]);

//con esta propiedad podremos sacar la cantidad de datos que hay en el array
console.log(friends.length);

//#si queremos obtener el ultimo elemento del array lo podemos hacer de esta manera , especialmente cuando no sabemos cuantos elementos tiene el array
console.log(friends[friends.length - 1]);

//atravez del indice tambien podemos agregar elementos al array
friends[2] = 'melisa';
//si observamos la consola este elemento en la posicion 2, fue reemplazado por mi nueva amiga, y a pesar de que declaramos este array con CONST igual pudimos cambiar un valor del array  y esto es asi ya que los array no es un valor primitivo(los valores primitivos son inmutables)
console.log(friends);

//ahora lo que NO podeos hacer es reemplazar el array completo
//const friends = ['juan', 'camilo', 'maria'];

//los array esperan expresiones por lo que podemos calcular datos dentro del mismo, incluso podemos tener array dentro de otros array de forma anidada.
const firsName = 'nelson';
const nelson = [firsName, 'rodriguez', 2024 - 1985, 'programador', friends];
console.log(nelson);

//ejercicio practico con funciones y arrays
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
//array que contiene algunos años en los que la funcion calcAge podria resibir como parametros
const years2 = [1990, 1967, 2002, 2010, 2018];

//llamamos a la funcion y le pasamos algunas de estas edades
const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);
//aun mejor como los array esperan expresiones, le podemos sasar directamente la llamada a la funcion
const edades = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(edades);
*/
console.log('operaciones basicas con array(METODOS)');
/*
//javascript posee muchas funcion integradas llamadas METODOS ahora veremos algunos metodos que podemos usar en los arrays
const amigos = ['matias', 'juan', 'pepe', 'anastasia'];

//* PUSH, este agregara un elemento al final del array y nos devolvera como resultado la nueva longitud(length) del array
let nuevaLongitud = amigos.push('carol');
console.log(amigos);
console.log(nuevaLongitud);

//* UNSHIFT este agregara el alemento al comienzo del array, y tambien podremos obtener la nueva longitud
let nuevaLongitud2 = amigos.unshift('pablo');
console.log(nuevaLongitud2);
console.log(amigos);

//* POP este metodo eliminara el ultimo elemento del array, y nos devolvera en este caso el elemento que fue eliminado
let elementos = amigos.pop();
console.log(amigos);
console.log(elementos);

//* SHITF este metodo eliminara el primer elemento del array, y si queremos podemos almacenar el elemento que fue eliminado
amigos.shift();
console.log(amigos);

//* INDEXOF este metodo nos permite saber el indice se cierto elemento, de esta manera sabremos donde esta
console.log(amigos.indexOf('anastasia'));

//* si intentamos obtener un elemento que no esta en el array no obtendremos un error en si , nos arrojara el valor -1
console.log(amigos.indexOf('jose'));

//* INCLUDES este metodo es parecido a indexOf, pero que en en vez de devolvernos el indice nos devolvera un booleano osea si esta o no el elemento, importante saber que este metodo usa IGUALDAD ESTRICTA, (NO REALIZA COERSION DE TIPO) por lo que debemos tener mucho cuidado al escribir el elemento.

console.log(amigos.includes('juan'));
amigos.push(23);
// vemos que nos arroja falso, No realizo el cambio de tipo implicitamente
console.log(amigos.includes('23'));

//ejemplo practico
//sabemos que la declaracion if acepta solo valores booleanos, por lo que podriamos incluir ese metodo (includes)dentro de una declaracion if.
if (amigos.includes('pepe')) {
  console.log('pepe es parte de la lista de amigos de nelson ');
} else {
  console.log('la persona mencionada no es amigo');
}
*/
console.log('OBJETOS');
/*
//es la segunda estructura de datos y nos permite crear (clave-valor) esto significa que podremos hacer referencia a un elemento a travez de su clave, ademas podemos ingresar al igual que los array cualquier tipo de valor, tambien expresiones, funciones(son un tipo de valor) y otros objetos. otra cosa importante es que en esta estructura de datos el orden de los elementos no importa a diferencia de los arrays que es muy importante porque es la unica forma en la que podemos acceder a los elementos(indice)
//* se suele aconsejar usar arrays para datos mas ordenados y usar objetos para datos mas desordenados

//la manera mas comun y facil de crear un objeto es la forma literal y se componen de una propiedad y su valor
// const nelson = {
//   firstName: 'nelson',
//   lastName: 'jose',
//   añoNacimiento: 1991,
//   job: 'teacher',
//   friends: ['pepe', 'juan', 'pedro'],
//   hasDriverLicence: true,
//   //asi como tenemos csdenas, numeros, booleanos de valor tambien podemos tener funciones como valor. el tipo de funcion que podemos usar en un objeto es de tipo expresion, ademas a toda funcion atada a un objeto se le denomina metodo
//   calcAge: function (añoNacimiento) {
//     return 2024 - añoNacimiento;
//   },
// };

//podemos llamar a una funcion dentro de un objeto de 2 formas
// console.log(nelson.calcAge(1991));
// console.log(nelson['calcAge'](1991));

//# el ejemplo que acabamos de ver arriba no es lo ideal, porque estamos repitiendo codigo, ya que al llamar a la funcion le estamos pasando el año de nacimiento, pero este año de nacimiento ya esta definido en nuestro objeto.

//esta es la forma correcta si ya tenemos el dato que nesecitamos en el mismo objeto. la palabra reservada THIS DESPUES, pero lo que necesitamos saber ahora es que esta palabra se crea cuando creamos la funcion y que esta apuntara al objeto que llama a la funcion o al objeto que posee dentro de el la funcion(metodo) en este caso this apunta a montserrat por lo tanto.
// const montserrat = {
//   firstName: 'montserrat',
//   lastName: 'jose',
//   añoNacimiento: 2015,
//   job: 'teacher',
//   friends: ['pepe', 'juan', 'pedro'],
//   hasDriverLicence: true,
//   calcAge: function () {
//     return 2024 - this.añoNacimiento;
//   },
// };
// console.log(montserrat.calcAge());

//¿que pasa si necesitamos la edad en varias partes de mi aplicasion? bueno podriamos llamar a este metodo en todos esos lugares, pero pasa que cada vez que llamamos a esta funcion se realizara el calculo y eso no es una buena tecnica. lo ideal seria realizar el calculo solo 1 vez de esta manera podemos disminuir la carga en los procesos internos de la aplicasion.

//lo que hacemos es almacenar la edad en una nueva propiedad(asi creamos una) y al momento de utilizar la edad solo la llamamos
// const montserrat1 = {
//   firstName: 'montserrat',
//   lastName: 'jose',
//   añoNacimiento: 2015,
//   job: 'teacher',
//   friends: ['pepe', 'juan', 'pedro'],
//   hasDriverLicence: true,
//   calcAge: function () {
//     this.age = 2024 - this.añoNacimiento;
//     //no es necesario devolver la edad , pero una buena practica hacerlo
//     return this.age;
//   },
// };
// console.log(montserrat1.calcAge());
// console.log(montserrat1.age);
// console.log(montserrat1.age);
// console.log(montserrat1.age);

//DESAFIO, CREAR UN METODO QUE IMPRIMA POR PANTALLA TODOS LOS DATOS DE MONTSERRAT
const montserrat2 = {
  firstName: 'montserrat',
  lastName: 'comte',
  añoNacimiento: 2015,
  job: 'juguetona',
  friends: ['pepe', 'juan', 'pedro'],
  hasDriverLicence: false,
  calcAge: function () {
    this.age = 2024 - this.añoNacimiento;
    return this.age;
  },
  //llamamos a la funcion calcAge directamente ya que si esta funcion no es llamada luego, la edad sera indefinido.(podriamos haber usado montserrat2.age, pero dependeriamos de que esta funcion sea llamada luego tambien). hacerlo asi es una buena practica (//* this.calcAge es lo mismo que montserrat2.calcAge. ya que this apunta a montserrat2)
  datosMontse: function () {
    return `${this.firstName} ${
      this.lastName
    } es una niña de ${this.calcAge()} años y de profesion ${this.job} que ${
      this.hasDriverLicence ? 'tiene' : 'no tiene'
    } licencia de conducir.
    `;
  },
};

console.log(montserrat2.datosMontse());|
*/
console.log('the for loop');
/*
// los ciclos nos permitiran realizar una accion varias veces, en esta caso veremos el ciclo FOR
for (let contador = 1; contador <= 3; contador++) {
  console.log(`dominada numero ${contador}`);
}

const jonas = ['jonas', 'rodriguez', 30, 'programador', ['claudio', 'maria', 'pepe']];

//en este ejemplo mas practico, recorremos un array y imprimimos individualmente sus elementos. INPORTAMTE usar la longitud de esta forma(jonas.length) ya que si solo lo definimos por un numero (contador < 5) por ejemplo , si introdujeramos otro elemento al array este no seria imprimido.
for (let contador = 0; contador < jonas.length; contador++) {
  console.log(jonas[contador]);
}

//este ejemplo aun mas practico no solo leemos y imprimimos los valores si no que creamos un nuevo array basado en otro array y le agregamos algo que el original no tenia
const tipos = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  //esta forma de agregar elementos a un array NO es la mas limpia, RECORDAR que tenemos el metodo PUSH, que seria la forma recomendada
  tipos[i] = typeof jonas[i];
  //tipos.push(typeof jonas[i]);
}
console.log(tipos);

//este ejemplo aun masss practico vemos como calcular las edades basados en los años de nacimiento, algo que ya realizamos antes, pero ahora lo haremos dinamicamente usando el ciclo FOR
const añosNacimientos = [1991, 2007, 1969, 2020];
const edades = [];
for (let i = 0; i < añosNacimientos.length; i++) {
  edades.push(2024 - añosNacimientos[i]);
}
console.log(edades);

//* el ciclo for posee 2 declaraciones muy importante una de ellas ya la mencionamos antes. (break y continue) estas nos permitiran discriminar atravez de diferentes elementos. CONTINUE: podremos salir de la actual iteracion y contunuar con la siguiente en otras palanbras se saltara una iteracion.
//* BREAK: terminara completamente el ciclo
//tenemos un array con distintos elementos , pero solo imprimimos los elementos que son cadenas, de esta manera podremos dicriminar que elementos queremos usar
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}

//break nos podria servir por ejemplo para que luego de encontrar cierto elemento ya no siga buscando, en este ejemplo imprimira hasta que encuentre un numero luego no imprimira mas(terminara el ciclo)
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}
*/
console.log('bucles hacia atras y bucles dentro de otros bucles');
/*
const nelson = ['nelson', 'rodriguez', 23, 'ingeniero', ['pepe', 'carola', 'steven']];

//de esta manera leemos hacia tras, RECORDAR que el -1 es porque en los array se comienza desde el cero.
for (let i = nelson.length - 1; i >= 0; i--) {
  console.log(i, nelson[i]);
}
//bucle dentro de otro bucle
for (let ejercicio = 1; ejercicio < 4; ejercicio++) {
  console.log(`-------comenzando ejercicio ${ejercicio}`);

  for (let repet = 1; repet < 6; repet++) {
    console.log(`ejercicio ${ejercicio} levantamiento ${repet}`);
  }
}
*/
console.log('Bucle while Loop');
/*

for (let repe = 1; repe <= 4; repe++) {
  console.log(`Lifting weights repetition ${repe}🏋️‍♀️`);
}

//*el ciclo while tiene la misma logica que el for, PERO A DIFERENCIA DE FOR ESTE NO NESECITA DE UN CONTADOR Y LA CONDICION NO NECESARIAMENTE DEBE ESTAR RELACIONADA CON EL CONTADOR (PUEDE SER CUALQUIER CONDICION(BULEANO)) ESTO NOS PERMITE USAR ESTE CICLO UNA MAYOR VARIEDAD DE SITUASIONES.

//en este ejempplo si usamos un contador y este esta relacionado con la condicion, pero eso es por las caracteristicas del ejercicio en si. (como no nesecita un contador (no es parte de su sintaxis)este debemos ponerlo afuera)
let repe = 1;
while (repe <= 4) {
  console.log(`Lifting weights repetition ${repe}🏋️`);
  repe++;
}

//en este ejemplo lanzamos un dado y no nesecitamos de un contador ya que no sabemos cuantas veces debe ejecutarse el ciclo , lo hara x veces hasta que salga el numero 6
//EL METODO RANDOM NOS DEVUELVE UN NUMERO ENTRE (0 Y MENOR QUE UNO (INCLUYE AL O, PERO NO EL 1)) OSEA UN DECIMAL  (0,1 0,245, 0.987) ETC. ESE NUMERO LO MULTIPLICAMOS POR 6 YA QUE UN DADO VA DE 1 A 6, COMO NO INCLUYE AL 1 SIEMPRE FALTARA UN POCO PARA LLEGAR AL NUMERO 6 ES POR ESO QUE DEBEMOS SUMARLE 1 PARA QUE DE 6, PERO ESTE NUMERO NO SERA ENTERO SERA UN DECIMAL , ES POR ESO QUE USAMOS EL METODO 'TRUNC' QUE NOS DEVOLVERA LA PARTE ENTERA DE CUALQUIER DECIMAL.

//# conclusion cada vez que no sepamos las veces que se repetira el ciclo usamos WHILE, pero si de antemano sabemos cuantas veces debe repetirse usaremos FOR porque nesecitaremos un contador y que por lo general suelen ser ajercicios con arrays
let dado = Math.trunc(Math.random() * 6) + 1;

while (dado !== 6) {
  console.log(`you rolled dice ${dado}`);
  dado = Math.trunc(Math.random() * 6) + 1;
  if (dado === 6) console.log('salio el 6 termino el ciclo');
}
*/
