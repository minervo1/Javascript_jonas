'use strict';

// Data needed for a later exercise

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
console.log('RECORRIENDO ARRAYS- (FOR-OF)');
/*
// este bucle fue introducido en 2015 (ecmasjs 6.0) y nos da un nivel mas de adstraccion con respecto a el ciclo for normal arronandonos codigo, otro punto importante es que aun podemos usar las sentencias breack y continue

//esta seria la forma tyradicional con nuestro ciclo FOR
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

//esta es la sintaxis con el ciclo FOR-OF, (//*)basicamente en cada iteracion el ciclo devolvera el elemento actual automaticamente
//recordar que no necesitamos brackets si solo tenemos una linea de codigo
for (const elemento of menu) console.log(elemento);

//pero que pasa cuando necesitamos el indice del elemento y no solo el elemento, debemos saber que este ciclo fue pensado para darnos el elemento actual, pero aun asi podemos obtenerlo recurriendo al metodo 'entries'
for (const elemento of menu.entries()) {
  //console.log(elemento);
  //podemos mejorar este codigo con este otro codigo para que se vea mas ordenado, basicamente le sumamos un 1 al elemento en la posicion 0 para que aparesca como numero 1
  console.log(`${elemento[0] + 1}: ${elemento[1]}`);
}
//veamos ahora que es este metodo entries, podemos observar que nos arroja un iterador de arrays que en su interior posee una array con el indice y el elemento
console.log([...menu.entries()]);

//entonces si sabemos que el elemento y su indice estan en un array que en esta caso es el elemento, podemos mejorar el codigo aun mas. destructuramos inmediatamente ese array en sus 2 elementos
for (const [i, ele] of menu.entries()) {
  console.log(`${i + 1}: ${ele}`);
}
*/
console.log('OBJETOS LITERALES MEJORADOS');
/*
//hemos visto a lo largo del curso que se han mejorado muchas cosas con cada actualizacion, pues es el caso de los objetos literales tambien. en es6 se introdujeron 3 mejoras a la hora de escribir un objeto literal

//-1 cuando tenemos un objeto fuera de otro objeto y queremos tener elmobjeto que esta afuara dentro de nuestro objeto tendriamos que escribir el nombre de la propiedad que va a tener ese objeto y luego igualarlo al objeto de afuera
//EJEMPLO supongamos que el objeto 'openingHours' es un objeto distinto, separado de nuestro objeto restaurante, pero lo necesitamos dentro para que funciona todo lo que hemos hecho hasta ahora.

//* la tercera mejora tiene que ver con que ahora no solo podemos calcular los valores si no que ahora tambien podemos hacerlo con las propiedades EJEMPLO
const semana = ['lun', 'mar', 'mier', 'juev', 'vier', 'sab', 'domi'];
const openingHours = {
  //*calculamos la propiedad en base al array semana
  [semana[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  //* de hecho podemos calcular su nombre de otras formas
  [`dia-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurante = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //*normalmente lo hariamos asi, el nombre que tomara la propiedad igualado al objeto externo
  //openingHours: openingHours,
  //*pero con la primera mejora solo lo hariamos asi, automaticamente la propiedad tomara el mismo nombre del objeto
  openingHours,
  //*la segunda mejora tienen que ver con los metodos, podemos observar que normalmente escribimos la palabra function, pero con esta mejora podemos hacerlo asi
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`su plato contiene:  ${ing1}, ${ing2},  ${ing3}`);
  },
  orderPizza: function (ingrePrincipal, ...ingreOpcionales) {
    console.log(ingrePrincipal);
    console.log(ingreOpcionales);
  },
};
*/
console.log('ENCADENAMIENTO OPCIONAL');
/*
//EJEMPLO supongamos que queremos saber a que hora el restaurante abre los dias lunes(monday), podemos observar que obtenemos un error, ya que la propiedad 'mon' no existe por lo que 'restaurant.openingHours.mon' sera undefined y undefined.open es un error.
//console.log(restaurant.openingHours.mon.open);

//para solucionar esto tendriamos que comprobar si la propiedad 'mon' existe, si existe imprimira ese dia y su valor si no no realiozara nada.
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//veamos el mismo ejemplo con unn dia que si existe
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//no es gran problema realizar esta comprobacion, pero a veces si tenemos objetos anidados puede volverse algo tedioso el comprobar 2 o mas propiedades y podria llevar a errores si no lo hacemos
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//* es aqui donde entra nuestro 'encadenamiento opcional' que nos permite evadir el error que nos dio al comienzo por esa propiedad que no existe, ya que todo lo que este justo antes de esta signo solo si existe(true) seguira avaluando, si no es true, es false y devolvera inmediatamente un undefined. INPORTANTE este operador tambien trabaja bajo el concepto de 'valores nulos' osea (null y undefined) son cosiderados valores falsos y todos los demas seran positivos(0 ,'')
//observamos que ya no nos aparece el error en cambio solo un indefinido.
console.log(restaurant.openingHours.mon?.open);
//podemos usarlo en mas de un lugar a la vez, en este ejemplo si la propiedad restarant.openingHours tambien existe, en este caso nos vuelbe a arrojar el error, porque 'restaurant.openingHours' si existe sigue evaluando y al seguir evaluando se toma con 'mon' que no existe y basicamente es lo mismo que con el primer ejemplo
//console.log(restaurant.openingHours?.mon.open);

//* pero veamos un ejemplo un poco mas practico de este 'encadenamiento opcional'
const dias = ['mon', 'tue', 'web', 'thu', 'fri', 'sat', 'sun'];
//lo que haremos es recorrer este array y mostrar en consola que dias abre
for (const dia of dias) {
  //console.log(dia);

  //IMPORTANTE basicamente aca estamos utilizando el elemento actual 'dia' como el nombre de una propiedad del objeto restaurant,pero esta propiedad no existe, pero la podemos usar utilizando los corchetes. de esta manera obtenemos los dias de la semana dinamicamente. y observamos que los dias en que no abre (no existe ese dia) en vez de arrojarnos un error nos muestra por pantalla 'undefined'.
  const open = restaurant.openingHours[dia]?.open;
  console.log(`los dias ${dia}, abrimos a las ${open} `);
}

//ahora  tener 'undefined' se ve extraño podemos reemplazar esta por un valor predeterminado, RECORDAR que este operador || y && nos permite evaluar todo tipo de valores (parecido a un operador ternario)
//* ERROR como usamos el operador || (or) este nos arrojara el el primer valor false que encuentre en este caso para el dia sabado el horario de apertura es 0, lo cual es un valor false por ende devolvera 'close'(valor false), pero el problema es que esta abierto los sabados no cerrado, bueno si recordamos tenemos este operador (??) 'FUSION NULO' que funciona igual que el operadoor or, pero que trabaja bajo el concepto de 'valores nulos' osea los valores 'undefined' y 'null' son considerados falsos y los valores (0 y '') son considerados valores verdaderos.
for (const dia of dias) {
  const open = restaurant.openingHours[dia]?.open ?? 'close';
  console.log(`los dias ${dia}, abrimos a las ${open} `);
}

//NOTA el encadenamiento opcional(?.) y el operador de fusion  nulo(??) se introdujeron en el mismo año porque se diseñaron para trabajar los 2 juntos.
//* veamos como funcioana este 'encadenamiento opcional con los metodos'

//1- podemmos comprobar si es que el metodo existe antes de llamarlo
console.log(restaurant.order?.(0, 1) ?? 'el metodo no existe');
// veamos si resulta con algun metodo que no exista
console.log(restaurant.orderNelson?.(0, 1) ?? 'el metodo no existe');

//* tambien podemos usar el 'encadenamiento opcional' en los arrays, basicamente podemos comprobar si un array esta vacio
const users = [{ nombre: 'nelson', email: 'nelson@hotmail.cl' }];

// en este caso no esta vacio
console.log(users[0]?.nombre ?? 'array users vacio');

// sin el encadenamiento y sin el operador de fusion nulo tendriamos que hacer algo asi
if (users.length > 0) {
  console.log(users[0].nombre);
} else {
  console.log('array usuarios esta vacio');
}
*/
console.log('RECORRIENDO OBJETOS-KEY-VALORES Y ENTRADAS');
/*
//* recordemos que en anteriormente dijimos que el ciclo FOR OF podia recorrer solo iterables, pero de manera exepcional tambien objetos, pues si se pueden recorrer, pero de forma indirecta, para esto deveremos usar el objeto OBJECT.KEYS, OBJECT.VALUES O OBJECT.ENTRIES segun queramos los nombres(llaves) o su valor o ambas.

//veamos primero que es este objeto para las llaves, podemos observar que este nos devuelve un array con las llaves o nombres de las propiedades del objeto referido
const propiedades = Object.keys(restaurant.openingHours);
console.log(propiedades);

//pues ahora recorramos este array
for (const dias of Object.keys(restaurant.openingHours)) {
  console.log(dias);
}

//podemos usar esto para crear un string
console.log(`estamos abiertos ${propiedades.length} dias a la semana`);

//un buen codigo usando lo aprendido seria:
let abierto = `Abrimos ${propiedades.length} dias a la semana: `;
for (const dias of propiedades) {
  abierto += `${dias} ,`;
}
console.log(abierto);

//* veamos ahora como podemos obtener los valores de las propiedades

//podemos observar que tambien nos devuelbe un array con los valores correspondientes y podemos manipularlos tal como lo hicimos con sus llaves
const valores = Object.values(restaurant.openingHours);
console.log(valores);

//* vaemos ahora lo mas interesante que es recorrer el objeto completo para eso utilizamos 'ENTRIES'

// esto nos devolvera un array con 3 valores cada uno de estos valores es un array que en su interior estan las claves y su valor
const entradas = Object.entries(restaurant.openingHours);
console.log(entradas);

//usemos esto para recorreel objeto con todo lo aprendido. (//# analizemos esto, sabemos que en cada iteracion nos devolvera el valor actual representada en una variable, ahora esta variable la podemos estructurar inmediatamente (llave-valor), la llave sera key, pero ahora el valor sabemos que es un objeto el cual tambien podemos destructurar (open y close))
for (const [key, { open, close }] of entradas) {
  console.log(`los ${key} abrimos a las ${open} y cerramos a las ${close}`);
}
*/
console.log('SETS');
/*
//los sets se introdujeron en ES6 al igual que los mapas, este se parece un poco a los array , pero con la diferencia que no toma en cuenta los valores duplicados en otras palabras sus elementos son unicos y el orden de sus elementos no es importante a diferencia de los array en que su orden si es importante.

//debemos pasarle un iterable a los set, el mas comun que se suele pasar es un array
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
//observamos que los elementos repetidos no los toma en cuenta
console.log(ordersSet);

//los string tambien son iterables
const letras = new Set('nelson');
console.log(letras);

//tambien podemos tener sets vacios, no arroja error
const vacio = new Set();
console.log(vacio);

//podemos saber el tamaño del set (recordar que no tomara en cuenta valores duplicados)
console.log(ordersSet.size);
//podemos saber si existe determinado elemento en el set(este metodo es como el include de los arrays), este metodo posee igualdad estricta
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('Bread'));

//podemos agregar por supuesto elementos al set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
//observamos que solo ser agrego 1, (simplemento no acepta valores duplicados)
console.log(ordersSet);

//podemos eliminar elementos de un set. (para los array no es tan sencillo eliminar un elemento)
ordersSet.delete('risotto');
console.log(ordersSet);

//¿ pero comom recuperamos los elementos de un set?
// no lo hacemos, si queremos valores ordenados y valores que podemos recuperar lo mejor es usar un array. no tiene sentido sacar valores de un set ya que sus valores son unicos y su orden no importa.

// se me olvidaba el ultimo metodo que nos permitira eliminar todos los elementos del set
//console.log(ordersSet.clear());

// y como es un iterable como cualquier otro podemos recorrerlo
for (const elemento of ordersSet) {
  console.log(elemento);
}

//# uno de los usos mas frecuentes que se les da a los sets es para eliminar valores duplicados de los array
//tenemos este array al cual queremos eliminar sus duplicados
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

const starffUnique = [...new Set(staff)];
console.log(starffUnique);

//ahora si solamente queremos saber la cantidad de elementos unicos que hay en el array podemos hacer lo siguiente
console.log(new Set(staff).size);

//podemos usar este logica por ejemplo para saber cuantas diferentes letras hay en una palabra
console.log(new Set('nelsonrodriguez'));

//# esta estructura de datos (set)no viene a remplazar a los array simplemente lo ayuda, ya que aun los array nos permiten manipular sus elementos de una manera que los sets no pueden.
*/
console.log('MAPS');
/*
//esta estructura de datos nos permiten almacenar elementos asociados a una clave como los objetos, pero a diferencia de los objetos la clave de los mapas puede ser cualquier cosa.

//se suelen crear los mapas vacios y despues llenarlos, pero no es obligatorio (el metodo set es como el 'add' para los sets y arrays )
const rest = new Map();
// el primer valor sera la clave  y el segundo sera el valor en si
rest.set('name', 'clasico italiano');
rest.set(1, 'firence, ytali');
rest.set(2, 'Liston, portugar');

console.log(rest);

//debemos saber que el llenar este map de esta manera con el metodo set, no solo actualiza el map si no que lo retorna y esto nos permite concatenar estas agregados.
rest
  .set('categorias', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 22)
  .set(true, 'we are open')
  .set(false, 'we are close');

//ahora para obtener los datos de un mapa usamos el metodo 'get' y le pasamos la llave del valor que queremos
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(2));

//veamos algo de logica inteligente utilizando la posibilidad de tener booleanos como llaves. como los booleanos pueden ser usamos como claves, entonces podemos utilizar cualquier expresion que nos devulva un booleano, en este ejemplo estamos preguntando 'si el tiempo es mayor a 11 y menor a 22' esto nos devolvera un bboleano(true, false) y esa sera nuestra clave devolviendonos el valor correspondiente.
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//ya vimos como llenar(set) y como obtener(get) ahora nos toca 'comprobar' si existe una determinada llave en el mapa
console.log(rest.has('categorias'));

// tambien podemos eliminar un valor atravez claro de su llave
rest.delete(2);
console.log(rest);

//tambien tenemos el metodo para obtener el tamaño del mapa
console.log(rest.size);

// y al igual que con los sets tambien podemos eliminar todos los elementos del mapa
//rest.clear();

//por ultimo veamos el poder de usar cualquier cosa como llaves

//* en este ejemplo vemos como nos arroja 'undefined' y eso es por la forma en que se almacenan los valores primitivos y objetos en memoria, aunque tengan el mismo nombre el objeto (rest.set([1,2])) es otro objeto diferente a (rest.get([1,2]))
rest.set([1, 2], 'test');
console.log(rest);
console.log(rest.get([1, 2]));

//vimos que con el metodo set podiamos agregar los elementos, pero hay otra manera sin tener que usar el metodo set que a veces se puede volverse algo engorroso cuando hay muchos elementos que introducir.

//podemos introducir elementos inmediatamente de la siguiente manera 'deveremos usar corchetes y dentro de estos crear nuestros elementos (llave-valor) cada uno en corchetes' //* esto es cuando lo creamos desde un principio claro que cuando necesitemos agregar elementos programaticamente deveremos usar el metodo set.
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct🎊'],
  [false, 'Try again'],
]);
console.log(question);

//* basicamente creamos un array de arrays para crear inmediatamente un nuevo mapa, ahora esta estructura es igual a la que nos arroja en metodo 'ENTRIES'un array de arrays.
console.log(Object.entries(restaurant.openingHours));

//*esto significa que podemos convertir objetos a mapas de una manera muy sencilla
const openigHoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(openigHoursMap);

//#los mapas tambien son iterables y como estan conpuestos por 2 valores(llave-valor) podemos usar la destructuracion. NOTA una diferencia que es importante recordar aca es que los mapas solo usamos la estructura a recorrer, pero, en los objetos debemso usar el objeto Object.entries ya que los objetos no son iterables.
for (const [key, valor] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${valor}`);
}
//transformamos el resultado dado por el usuario a un numero porque necesitamos compararlo con la llave
//const answer = Number(prompt('your answer'));
const answer = 3;
console.log(answer);

//ahora para comparar la respuesta con la llave, podemos usar el poder de los booleanos, sabemos que la respuesta correcta es TRUE entonces. aca comparamos la llave 'correct' que su valor es 3(respuesta correcta) con la respuesta del usuario si coinciden esta nos devolvera true, y como vemos true es la llave del valor que queremos desplegar cuando el usuario acerto.
question.get('correct') === answer;

//ahora si vemos como el poder de los booleanos nos puede ayudar1
console.log(question.get(question.get('correct') === answer));

//* por ultimo tambien podemos convertrir un mapa en un array usando el operador de propagacion
console.log([...question]);

//y como ya tenemos un array y no un mapa podemos usar algunos metodos de array
console.log([...question.keys()]); //todos las llaves
console.log([...question.values()]); //todos los valores
*/
console.log('TRABAJANDO CON STRINGS');

const airLine = 'Tap Air Portugal';
const plane = 'A320';

//podemos obtener el indice como ya lo sabemos
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
//podemos obtener la posicion de un string de la siguiente forma tambien
console.log('B732'[0]);

//obtenemso el largo
console.log(airLine.length);
// y de esta forma tambien
console.log('B434'.length);

//con el metodo 'indexOf' obtenemos la posicion de la primera letra indicada (la primera ocuurencia)
console.log(airLine.indexOf('r'));
//con el metodo 'lastIndexOf' obtenemos la ultima ocurrencia de dicha letra
console.log(airLine.lastIndexOf('r'));
//claramente podemos hacer lo mismo con una frase completa, me mostrara la posion de donde comienza la palabra
console.log(airLine.indexOf('Portugal'));
//el metodo 'slice' me devolvera el string desde el indice indicado INPORTANTE debemos notar que en este caso el indice lo considera
console.log(airLine.slice(4));
//tambien podemos indicarle un fin(nosm devolvera un nuevo string entre el rango indicado)INPORTANTE pero en este caso el indice si lo considera. otra cosa a darse cuenta en este ejemplo es que la resta entre el final y el comienzo siempre sera la longitud de la cadena.
console.log(airLine.slice(4, 6));

//INPORTANTE debemos saber que las cadenas no se pueden mutar porque son 'primitivos' , por lo que este metodo y todos los que veremos nos devolveran una cadena nueva, la original no se modifica.

//hasta ahora hemos extraido sabiendo los indices, pero ahora veamos como lo hacemos si no sabemos como es la cadena, supongamos que queremos obtener la primera frase que seria 'TAP'
console.log(airLine.slice(0, airLine.indexOf(' ')));

//ahora extraemos la ultima palabra de el string, y como nos devuelve esta palabra con un espacio lo quitamos con el +1
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

//tambien podemos especificar valores negativos, esto significa que comenzara a contar desde atras
console.log(airLine.slice(-2));
console.log(airLine.slice(1, -2));

//veamos el siguiente ejemplo, tenemos una funcion que verifica si el asiento eligido es un asiento del medio o no (los asientos del medio son B Y E), generalmente los numeros de un asiento de un avion son asi '11B' el numero suele ser la fila la la ultima letra suele ser el asiento. por lo menos en los avienes grandes
const checkMiddleSeat = function (seat) {
  //necesitamos la ultima letra o numero del asiento
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(' tu asiento es el del medio😥');
  else console.log(' tuviste suerte ti asiento no es el del medio 😅');
};
checkMiddleSeat('11E');
checkMiddleSeat('11B');
checkMiddleSeat('11R');

//¿porque los string poseen metodos si son valores primitivos y solo los objetos poseen esta posibilidad ?
//lo que pasa es que cada vez que llamamos a un metodo en un string automaticamente javascript convierte esta cadena en un objeto-cadena y es en este objeto donde los metodos provienen.
console.log(typeof new String('nelson'));
//podemosm observar todos los metodos que estan disponibles
console.log(new String('nelson'));

//cuando la operacion con el metodo  esta completa, el objeto-cadena buelve a ser un string normal(primitivo) en otras palabras los obejetos-cadenas siempre devuelben primitivos
console.log(typeof new String('nelson').slice(-1));

//veamos ahora el metodo 'toLowerCase' y 'toUpperCase', bvasicamente transformaran toda la cadena a minuscula o mayuscula
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

//veamos un ejemplo mas practico, supongamos que un usuario ingreso mal su nombre nosotros nesecitamos que la primera letra de su nombre sea en mayusculas y lo demas en minusculas
const passenger = 'neLSon';
//lo primero que debemos hacer es casi siempre pasar todo a minusculas
const passengerLower = passenger.toLowerCase();
//ahora pasamos solo la primera letra a mayuscula y concatenamos lo demas
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//veamos otro ejemplo ahora con un correo
const email = 'hello@nelsop.cl';

//vemos que el usuario a introducido mal su correo
const loginEmail = '  Hello@Nelsop.cl \n';

//como ya sabemos pasamos toddo a minusculas y con el metodo 'trim' le quitamos todos los espacios tanto adelante como atraz
const emailNormal = loginEmail.toLowerCase().trim();
console.log(emailNormal);

console.log(email === emailNormal);

//INPORTANTE desde 2019 tambien tenemos trimstar y trinEnd que como su nombre lo dice nos permite especificar que queremos quitar y que no

//veamos el siguienbte metodo 'REPLACE' nos permitira reemplazar cierta letra u caracetr por otro, en este caso queremos cambiar el signo de la moneda por el signo del dolar estadounidense y la coma por un punto
const priceEU = '288,97₤';
console.log(priceEU);

// el primer parametro sera el caracter a cambiar y el segundo sera su reemplazo RECORDAR que podemos concatener metodos porque basicamente los metodos devuelven cadenas.
const priceEEUU = priceEU.replace('₤', '$').replace(',', '.');
console.log(priceEEUU);

//veamos que sucede ahora que tenemos 2 palabras iguales, vemos que solo funciona con la primera ocurrencia, pero esto lo podem os arreglar conn el metodo 'replaceAll'
const announcement =
  'todos los pasajeros abordar el puerta 23. abordar puerta23!';
console.log(announcement.replace('puerta', 'anden'));
console.log(announcement.replaceAll('puerta', 'anden'));

// sin este metodo que es nuevo tendriamos que haverlo hecho usando 'EXPRESIONES REGULARES'
console.log(announcement.replace(/puerta/g, 'anden'));

//veamos 3 metodos que nos devuelven booleanos 'includes', 'startswith', y 'endsWith'
const avion = 'Airbus A230neo';
//con este metodo podemos saber si cierta trozo de cadena esta en la cadena
console.log(avion.includes('A230'));

// con este metodo podemos comprobar el comienzo de la cadena 'comienza con'
console.log(avion.startsWith('Airb'));
// con este otro metodo podemos saber si termina con determinada palabra o letra
console.log(avion.endsWith('neu'));

//veamos este ejemplo, queremos comprobar que cierto avion pertenece a la nueva familia de 'Airbus-neo'
if (avion.startsWith('Airbus') && avion.endsWith('neo'))
  console.log('el avion posee la ultima tecnologia');
else console.log('suerte para la proxima- no estas en el nuevo modelo');

//veamos un ejemplo algo mas practico
const checkBaggage = function (items) {
  //ponemos todo en minusculas porque el usuario puede escribir de muchas formas una misma palabra
  const baggage = items.toLowerCase();
  if (
    baggage.includes('cuchillo') ||
    baggage.includes('pistola') ||
    baggage.includes('materia organica')
  )
    console.log('Maleta con elementos no permitidos');
  else console.log('Bienvenido a Bordo');
};

checkBaggage('posee un computador, un lapiz y ropa');
checkBaggage('poseo una Pistola soy policia');
checkBaggage(' Viajo con materia Organica, ropa y comestibles');

// veamos ahora uno de los metodos mas utiles y usados 'split' este nos permite dividir o separar una cadena atravez de un caracter divisor, devolviendonos un array con esta cadena dividida.
console.log('a+very+nice+string'.split('+'));
console.log('nelson rodriguez ponce'.split(' '));

//vemos que podemos usar la destructuracion para asignar de una vez la primera separacion a una variable y la segunda a una segunda y asi sucesivamente, ademas de unir lo que habiamos separdo con el metodo 'join'
const [nombre, apellidoPaterno, apellidoMaterno] =
  'nelson rodriguez ponce'.split(' ');
// el metodo 'join' realiza lo opuesto que el metodo split. me unira una cadena separada atravez de algun caracter dado y me devolvera solo un string. osea me quitara el array.
const newName = ['Mr.', nombre, apellidoPaterno.toLocaleUpperCase()].join(' ');
console.log(newName);

//veamos otro ejemplo donde usemos split y join. supongamos que queremos una funcion que nos devuelba cada primera letra de cada palabra en mayuscula
const capitalizeName = function (name) {
  //separamos con split para obtener un array con cada palabra
  const names = name.split(' ');
  //creamos un array vacio en el cual introduciremos, las palabnras con su mayuscula en la primera letra
  const namesUpper = [];
  //como names es un array lo recorremos
  for (const palabra of names) {
    //namesUpper.push(palabra[0].toUpperCase() + palabra.slice(1));
    //podemos realizar lo mismo pero utilizando ahora el metodo 'replace'
    namesUpper.push(
      palabra.replace(palabra[0], palabra[0].toLocaleUpperCase())
    );
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica rodriguez ponce');
capitalizeName('mini rodriguez');
capitalizeName('princesa vaca mini nini');

// veamos el metodo 'padStart' este llenara con cierto caracter hasta llegar a la longitud dada. segun sea al final o comienzo.
const message = 'Go to gate 23!';
console.log(message.padStart(20, '_'));
console.log(message.padEnd(20, '+'));

// veamos un ejemplo mas real y prctico, veamos como ocultar los numeros de una tergeta de credito
const maskCreditCard = function (number) {
  //recordar que cuando tenemos una cadena acompañando al sigo + todo se convertira a cadena
  //const str = number + '';
  const str = String(number);
  //obtenemos los 4 ultimos digitos de el parametro number
  const last = str.slice(-4);
  //retornamos esas 4 digitos, pero rellenamos con algun caracter el largo de el numero original desde el comienzo
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(434803848354860));
console.log(maskCreditCard('5656643434803848668'));

// veamos el ultimo metodo 'repeat' este nos permitira repetir una cadena multiples veces
const message2 = 'Mal tiempo todos los vuelos estan retrasados...';
console.log(message2.repeat(4));

const avionesVolando = function (aviones) {
  console.log(`hay ${aviones} aviones en vuelo ${'✈'.repeat(aviones)}`);
};
avionesVolando(4);
avionesVolando(6);

//* veamos mas ejercicios con string, debempos tratar la variable 'flights' para que se vea asi
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//recorramos y aplicamos el split y obtendremos 4 string separados, luego volvemos a aploicar el split esta vez para separar otra vez en 4 cada una de las cadenas(porque en cada una de estos pedazos de cadena esta la informacion (FAO-TXL-Y LA HORA- ADEMAS DEL TITULO DEL COMIENZO))
for (const vuelos of flights.split('+')) {
  const [titulo, from, to, time] = vuelos.split(';');
  const autput = `${
    titulo.startsWith('_Delayed') ? '⛔' : ''
  }${titulo.replaceAll('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(45);
  console.log(autput);
}
