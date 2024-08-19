'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //con este metodo estamos devolviendo un array, solo como ejemplo para ver como podemos destructurar este array desde una funcion
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`su plato contiene:  ${ing1}, ${ing2},  ${ing3}`);
  },
  orderPizza: function (ingrePrincipal, ...ingreOpcionales) {
    console.log(ingrePrincipal);
    console.log(ingreOpcionales);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
console.log('DESTRUCTURACION DE ARRAYS(MATRICES)');
/*
//esta destructuracion de arrays es basicamente descomprimir un array u objeto en variables individuales o separadas.

const arr = [2, 3, 4];

//esta seria la forma en la que recuperariamos estos valores del array
const a = arr[0];
const b = arr[1];
const c = arr[2];

//pero con la destructuracion podemos recuperarlos todos al mismo tiempo tambien de manera separada, ademas observamos que el array original no se ve afectado.
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//en este ejemplo vemos que tampoco es necesario que saquemos todos los valores podemos obtener los valores que queramos estos seran en el orden en el que estan
const [primero, segundo] = restaurant.categories;
console.log(primero, segundo);

//pero tambien podemos obtener los elementos que queramos sin importar en el lugar en donde esten, solo debemos dejar el espacio vacio
const [primer, , tercero] = restaurant.categories;
console.log(primer, tercero);

//en este ejemplo vemos como podemos cambiar el orden en el que obtenemos los valores. osea en este ejemplo queremos que 'italian' sea el segundo elemento y que 'vegetarian' sea el primero. basicamente intercambiarlos

//* sin la destructuracion lo hariamos asi
let [principal, , secundario] = restaurant.categories;
console.log(principal, secundario);

// const tempo = principal;
// principal = secundario;
// secundario = tempo;
// console.log(principal, secundario);

//* con destructuracion, vemos que es mucho mas simple hacerlo de este forma, debemos recordar que estamos obteniendo los elementos de la destructuracion que esta con let. entender que por el lado de la desctructuracion(izquierdo) obtenemos los elementos segun su indice y los elementos del array (lado derecho) escrribimos los elementos propiamente tal.
[principal, secundario] = [secundario, principal];
console.log(principal, secundario);

//usamos el metodo 'order' para destructurar el array y obtener los valores por separado
//restaurant.order(2, 0); //esto nos traera un array con 2 valores dentro(Garlic Bread y pizza);

//pero usando la destructuracion podemos obtener estos valores por separado. osea los valores correspondientes a la posicion 2 y a la posicion 0
const [primerEle, segundoEle] = restaurant.order(2, 0);
console.log(primerEle, segundoEle);

//*vayamos un paso mas lejos, que pasa si tenemos un array anidado osea un array dentro de otro array
const anidado = [2, 4, [5, 6]];
const [i, , j] = anidado;
//vemos que efectivamente obtenemos el valor cero, nos saltamos el primer valor y obtenemos el segundo valor que es el segundo array
console.log(i, j);

//pero si ¿quesiera este segundo array anidado con sus valores individuales tambien?, simple tendriamos que hacer  otra destructucturacion dentro de la otra
const [p, , [q, r]] = anidado;
console.log(p, q, r);

//* veamos el ultimo ejemplo en el cual No sabemos cual es el largo del array lo cual podria provocar esto: obtener un indefinido porque tenemos 2 elementos y estamos destructurando 3, el tercero claro sera un 'undefined'
const [s, d, f] = [5, 9];
console.log(s, d, f);

// pero para solucionar esto podemos dejar valores predeterminados para cada elemento, por lo que los elementos que queden vacios que seran undefined estos tomaran estos valores , pero los elementos que si esten se quedaran con sus valores y no tomaran los predeterminados
const [ñ = 1, m = 1, w = 1] = [8, 9];
console.log(ñ, m, w);
*/
console.log('DESTRUCTURACION DE OBJETOS');
/*
const restaurant1 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //con este metodo estamos devolviendo un array, solo como ejemplo para ver como podemos destructurar este array desde una funcion
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //como podemos  observar no solamente podemos pasar un objeto (obj) como argumento, si no que lo podemos destructurar inmediatamente, de esta manera esta funcion obtendra 4 argumentos, pero en realidad solo le pasamos 1 objeto solo que fue destructurado. y como ya sasbemos podemos cambiarle los nombres o dejar algunos valores establecidos como predeterminados en caso de que estos datos no vengan.
  orderDelibery: function ({
    starterIndex,
    mainIndex,
    time: entrega = '11:00',
    address,
  }) {
    //console.log(obj);
    console.log(
      `Orden recibida! : ${this.starterMenu[starterIndex]} y ${this.mainMenu[mainIndex]}, despachar a :${address}, a mas tardar a las ${entrega} PM`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//llamamos al metodo 'orderDelivery'
restaurant1.orderDelibery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//* al igual que con los array, la destructuracion de objetos nos servira para obtener sus propiedades de manera individual. y al igual que con los array con los objetos podemos hacer lo mismo. solo debemos tener en cuenta que para los objetos el orden no importa y esto es basicamente porque debemos escribir los mismos nombres que las propiedades.
//# vemos que la sintaxis es la misma solamente cambiamos los corchetes pór las llaves y como el orden no importa solo escribimos los mismos nombres de las propiedades y estas nuevas variables tomaran el valor que corresponda y con esto tambien ya no es necesario estar saltando o dejando espacios vacios para obtener otro valor. todas estas caracteristicas de los objetos a la hora de destructuralos lo hacen especialmente utiles a la hora de tratar con datos de terceros
const { name, openingHours, categories } = restaurant1;
console.log(name, openingHours, categories);

// tambienn podemos darles a estas variables otros nombres, diferentes a los de sus propiedades, solo debemos seguir esta sintaxis
const {
  name: nombreRestorant,
  openingHours: horas,
  categories: categorias,
} = restaurant1;
console.log(nombreRestorant, horas, categorias);

//* otra cosa que podemos hacer es darle a estas variables valores predeterminados en el caso de que el objeto no tenga propiedades, especialmente utililes cuando obtenemos datos de terceros que por lo general suelen venir como objetos. RECORDAR que si tenemos determinada variable , pero no hay valores para esta esta tomara el valor de 'UNDEFINED' lo cual debemos evitar.
//este este ejemplo incluso vemos que podemos combinar, al cambiar de nombre y asignarle un valor predeterminado
const { menu = [], starterMenu: principal = [] } = restaurant1;
//menu no existe por lo que esta variable tomara el valor de un array vacio, pero principal si existe a si no ignorara el valor predeterminado y tomara el que le corresponde.
console.log(menu, principal);

//* veamos el tema de la mutasion de variables
let a = 11;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//queremos que a y b tomen los valores que posee el objeto, es importante seguir esta sixtansis ya que de otra forma no servira u arrojara error.
({ a, b } = obj);
console.log(a, b);

//* Veamos como es el caso para los objetos anidados
//podemos observar que como el objeto 'fri' esta dentro del objeto 'openigHours', pero a su vez este esta dentro del objeto 'restorant1' tuvimos que destructurar dentro de la destructuracion para obtener los valores individuales. y como  se observa tambien podemos cambiarle los nombres.
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);
*/
console.log('OPERADOR DE PROPAGACION => SPREAD OPERATOR');
/*
//* este operador nos permite sacar todos los elementos de un array se forma separada (individualmente) para poder usarlos en todos los elementos iterables, osea en todos los elementos que necesiten o acepten elementos separador por coma. (arrays,mapas,string, sets) NOTA los objetos no son iterables, pero con javascript moderno tambien podemos usar este operador en los objetos.
// una de las cosas que podemos hacer es crear copias superficiles de un array
const arr = [7, 8, 9];
const copyArr = [1, 2, ...arr];
//podemos observar que sacamos todos los elementos y los pusimos en este nuevo array
console.log(copyArr);

// si este operador esto lo tendriamos que realizar de la siguiente forma
const otraCopia = [1, 2, arr[0], arr[1], arr[2]];
console.log(otraCopia);

//si queremos los elementos simplemente fuera de cualquuer otro literal
console.log(...copyArr);

//veamos un ejemplo con nuestro restaurante, lo que hacemos aca es crear un nuevo 'menu' agregando un nuevo plato al final del array. NOTA tener en cuenta que no estamos manipulante el objeto restaurant para nada, solo estamos creando un nuevo array.
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//# INPORTANTE este operador se parece algo a la destructuracion porque tambien me permite sacar los elementos de manera individual, pero en la destructuracion estos elementos los samos asociados a una nueva variable, en cambio con el operador de propagacion simplemente los obtenemos todos y solos sin crear nuevas variables. y es por este motivo que solo podemos usarlos en lugares donde acepten elementos individuales separados por comas 'iterables' (arrays, mapas, string, sets) y tambien desde javascript moderno en los objetos. OSEA PODEMOS USAR ESTE OPERADOR EN CASI TODO JAVASCRIPT. NOTA todo en javascript es considerado un iterable execto los objetos.

//ya vimos que podemos hacer copias superficiales de array, pero tambien podemos fusionar 2 array creando uno completamente nuevo
const nuevoMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(nuevoMenu);

//tal como se menciono podemos usar este operador en las cadenas, INPORTANTE, pero tener en cuenta que solamente podemos hacer esto cuando usamos un array o cuando pasamos valores a una funcion
const str = 'jonas';
const letters = [...str];
//observamos que efectivcamente obtenemos los elementos separados por comas de la cadena
console.log(letters);

//esto es algo que por ejemplo no podemnos hacer, porque no es un iterable, la plantilla literal no es un lugar donde se esperen valores separados por comas
//console.log(`${...srt}`);

// veamos ahora un ejemplo mas real, con una funcion que es uno de los casos en que mas se utiliza este operador (proppagar los argumentos sobre todo cuando son muchos)y obteniendo los datos desde el usuario
const ingredients = [
  // prompt('Ingredientes para la pasta n° 1:'),
  // prompt('Ingrediente n° 2:'),
  // prompt('Ingrediente m° 3:'),
];
console.log(ingredients);

//sin el operador de propagacion lo hariamos asi
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//pero con el operaador de propagacion lo hacemos asi
restaurant.orderPasta(...ingredients);

//* tal como se menciono anteriormente este operedor de propagacion desde el 2018 se puede usar en los objetos
//asi como realizamos una copia superficial de un array al comienzo. tambien podemos crear una copia superficial de un objeto
const newRestaurante = { fundadoEn: 1888, ...restaurant, fundador: 'nelson' };
//como se pude observar tenemos un completamente nuevo restaurant que basicamente tiene una copia y 2 propiedades mas
console.log(newRestaurante);

//esta copia la podemos comprabar, observamos que le cambiamos el nombre al nuevo restaurante, pero el antiguo sigue conservando su nombre esto indica que es realmente una copia o mejor dicho un objeto nuevo.
newRestaurante.name = 'Ristorante Roma';
console.log(newRestaurante.name);
console.log(restaurant.name);
*/
console.log('OPERADOR DE RESTO');
/*
//* el operador de resto tiene la misma sintaxis que el operador de propogacion, pero realiza lo contrario osea envuelbe los elementos restantes en un array, solo que dependiendo del lugar donde se utilize realizara una accion u otra. este operador tiene 2 usos en la destructuracion de array u objetos y en las funciones a la hora de pasar los parametros.

// este es el operador de propagacion, porque esta del lado derecho de la destructuracion
const arr = [1, 2, ...[3, 4, 5]];

//este es el operador de resto, porque esta del lado izquierdo de la destructuracion, INPORTANTE es importante mencionar que este paremetro debe ser el ultimo tal como se muestra en el ejemplo ya que como su nombre lo dice este tomara todo el resto de valores despues de haber llenado la ultima variable que en este caso es b. y no toma en cuenta los valores saltados.
const [a, b, ...otros] = [1, 2, 3, 4, 5];
console.log(a, b, otros);

//veamos otro ejemplo ahora utilizando los array de nuestro restorant, supongamos que queremos solo 2 comidas principales (pizza y risotto) todo el resto estara en un array
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
//vemos que las dos variables fueron llenadas con los 2 primeros elementos y todo el resto fue colocado dentro de un array
console.log(pizza, risotto, otherFood);

//con los objetos funciona de la misma manera , solo que alamcenara los valores restantes en un nuevo objeto. supongamos que queremos obtener solo el dia sabado y el resto de dias en un objeto separado
const { sat, ...otrosDias } = restaurant.openingHours;
//vemos que obtenemos el objeto sabado con sus propiedades y todo el resto en otro objeto separado
console.log(sat, otrosDias);

//* veamos como se usa con las funciones

const add = function (...numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  console.log(suma);
};
//vemos que si tenemos valores sueltos podemos inmediatamenmte usar este patron y ponerlos en un array, de esta manera es mas facil trabajar con ellos
add(2, 3);
add(2, 3, 4, 5);
add(4, 5, 6, 7, 8, 9);

// de hecho tambien podemos combinar los 2 parametros(propagacion y resto)
const x = [2, 3, 4];
//al llamar a esta funcion como argumentos le estamos pasando el array x , el cual con el operador de propagacion lo desenpaquetamos y dejamos como elementos individuales y luego en la funcion con el de resto lo volvemos a meter dentro ded un array.
add(...x);

//veamos un ejemplo con nuestro metodo de pedir pizza
restaurant.orderPizza('tomates', 'cebolla', 'esparragos', 'queso');

// tambien podemos observar que si no hay mas elementos el array se creara igual , pero vacio
restaurant.orderPizza('tomates');
*/
console.log('SHORT CIRCUTING (&& AND ||)');
/*
// debemos saber que los operadores && y || no solo pueden trabajar con valores booleanos si no que pueden trabajar con cualquier tipo de valor y claro devolver cualquier tipo de valor, pero ademas pueden realizar lo que se denomina 'corto circuito'.

//* el cortocircuito para el operador OR DEVOLVERA EL PRIMER VALOR VERDADERO QUE ENCUENTRE Y NO SEGUIRA EVALUANDO SI ES QUE HUBIERAN MAS VALORES, en este caso los 2 valores son positivos, pero el 3 esta primero.
console.log(3 || 'jonas');
//en este otro ejemplo el primer valor es falso porque lo que seguira evaluando y como 'jonas' es verdadero este sera el resultado
console.log('' || 'jonas');
console.log(true || 'jonas'); //true
console.log(undefined || 0 || '' || 'hola' || 23 || null); // 'hola' es el primer valor verdadero
//* el resultado de esta puede ser confuso ya que a pesar de que los 2 son falsos el resultado el 'NULL', en estos casos cuando no hay un valor positivo devolvera el ultimo valor sea este positivo o no.
console.log(undefined || null);

restaurant.numInvitados = 12;
// el siguiente ejempolo dice que si la propiedad numInvitados existe la deje como esta, pero si no el numero de invitados sera 10. ahora esta sintaxis la podemos acortar bastante gracias al 'cortocicuito'
const invitados = restaurant.numInvitados ? restaurant.numInvitados : 10;
console.log(invitados);

//como en este momento 'restaurante.numInvitados' no existe esta es false por lo tanto el resultado tomara el valor de 10
const invitados1 = restaurant.numInvitados || 10;
console.log(invitados1);

//INPORTANTE debemos tener mucho cuidado con el 'numInvitados' ya que si este es 0 (ningun invitado)nuestro resultado sera 10 y esto es porque 0 es un valor false. pero existe una gran solucion que veremos mas adelante.

//* veamos como funciona el 'cortocircuito' para el operador &&, este realizara lo opuesto osea devolvera el primer valor falso que encuentre.
console.log(0 && 'jonas'); // el resultado es 0
// al igual que con el moperador || si no hay un valor falso en este caso devolvera el ultimo
console.log(7 && 'jonas');
console.log('hola' && 23 && null && 'nelson'); // el resultado es 'null'

//veamos este ejemplo nos dice que si restaurant.ordenPizza existe llama a ese metodo y pide una orden con camarones y espinacas, pero so no, pues no hara nada. PERO PODEMOS MEJORAR ESTE CON NUESTRO CORTOCIRCUITO
if (restaurant.orderPizza) {
  restaurant.orderPizza('camarones', 'espinacas');
}
// al usar elmoperador && nos devolvera el primer valor falso, pero si no hay devolvera el ultimo valor que en este caso es la llamada a la funcion.
restaurant.orderPizza && restaurant.orderPizza('camarones', 'espinacas');

//# en resumen podemos usar el operador OR(||) para establecer valores predeterminados y el operador  AND(&&) para ejecutar codigo en el segundo operando si el primero es verdadero como en este ultimo ejemplo.
*/

console.log(' OPERADOR DE FUSION NULO');
/*
// para explicar este operador, resolveremos el problema que se nos presento cuando el numero de invitados era 0, al ver el cortocircuito.

//RECORDAR que si los invitados son 0 el resultado no puede ser 10, y esto pasaba porque '0' es un valor falso por lo tanto el cortocircuito como la sintaxis tradicional nos arroja el valor de 10.
restaurant.numInvitados = 0;

const invitados = restaurant.numInvitados || 10;
console.log(invitados);

//* afortunadamente la solucion es gracias este operador (??) que funciona como el operador (||) al realizar el cortocircuito cuando encuentra el primer valor true, pero bajo el concepto de 'valores nulos' osea que solo realizara o permitira el cortocircuito con los valores que no sean nulos (0, '', nan) todos los demas valores (NULL, UNDEFINED) seran considerados falsos. en otras palabras 0, '' , son considerados para este operador como verdaderos.
const invitadosCorrectos = restaurant.numInvitados ?? 10;
console.log(invitadosCorrectos);
*/
console.log('OPERADORES DE ASIGNASION LOGICA');
/*
//*desde 2021 tenemos 2 operadores mas de asignasion logica que se suman a los que ya conocemos (&&, ||, !) estos son el operador de asdignasion logica OR(||) Y AND(&&)

//creamos 2 objetos para demostrar como funcionan estos operadores
const rest1 = {
  name: 'capri',
  numGuests: 20,
};
const rest2 = {
  namke: 'la piazza',
  owner: 'Giovani Rossi',
};
//basicamente lo que estamos haciendo es crear la propiedad numGuest para el objeto que no la tiene y el que la tiene tomara su valor. RECORDAR que esto funciona por el corteCircuito y que esta sintaxis ya esta simplificada porque nos ahorramos escribir una sentensia IF.

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//pero aca es donde podemos simplificar aun mas esta sintaxis gracias al primer 'operador de asignasion logica OR'.
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

//RECORDAR que se nos presentaba el problema cuando el valor es 'cero', pero ya sabemos cual es la solucion para este caso, el operador de 'fusion nula' recordar que este funciona igual que el operador (||) solo que los valores (null y undefined) seran falsos y todos los demas seran verdaderos ('', 0, etc)

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

//* veamos ahora el caso para el operador de asignasion logica AND (&&=)
// recordar que este operador (and) devolvera el primer valor falso que encuentre, por ende en este ejemplo el valor devuelto sera 'undenined' porque el rest1 no posee esta propiedad, por ende sera undefined (falso).
rest1.owner = rest1.owner && '<anonimo>';
console.log(rest1);

//pero para el rest2, el resultado es digerente porque no hay ningun valor falso, por ende devolvera el ultimo. esm por eso que como se explico anteriormente este operador sirve para asignar un valor cuando no hay valores falsos
rest2.owner = rest2.owner && '<anonimo>';
console.log(rest2);

//ahora el segundo nuevo operador logico and (&&)opera de la misma manera que con or(11)
rest1.owner &&= '<anonimo>';
rest2.owner &&= '<anonimo>';
console.log(rest1);
console.log(rest2);
*/
