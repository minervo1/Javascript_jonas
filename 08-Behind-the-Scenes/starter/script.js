'use strict';
console.log('CADENA DE ALCANSE Y SCOPE');
//*primero un ejemplo sencillo, dentro de la funcion imprimimos la variable 'firsName', pero esta no esta en el alcance de la funcion, por lo que dentro de la cadena de alcance esta el alcance global en donde buscara y si la encontrara y la usa.
function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(firsName);
  return age;
}
const firsName = 'jonas';
calcAge(2000);

//*veamos otro ejemplo, ahora tenemos una funcion dentro de otra funcion, la funcion interna utiliza 3 variables que no estan definidas dentro de su alcance, entonces busca dentro de la cadena de alcance y encuentra 'age' y 'birthYear', pero no firsName asi que sigue buscando en el siguiente alcance y encuentra la variable en el alcance global.
function calcAge1(birthYear) {
  const age = 2024 - birthYear;
  function printAge() {
    const output = `${firsName}, tienes ${age}, naciste en ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}
const firsName1 = 'jonas';
calcAge1(2000);

//*veamos otro ejemplo, en este ejemplo incluimos un bloque por lo que la busqueda en la cadena de alcance es mucho mas extensa, por lo menos para la variable 'firsName', ademas se puede ver el alcance de las variables declaradas con var, let y const.

function calcAge2(birthYear) {
  const age = 2024 - birthYear;
  function printAge1() {
    const output = `${firsName}, tienes ${age}, naciste en ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //var str = `ohhh eres un millenial ${firsName}`;
      const str = `ohhh eres un millenial ${firsName}`;
      console.log(str);
    }
    //al tratar de imprimir str fuera del bloque if, nos arroja error y esto esta bien porque hay que recordar que las variables (let y const) tienen alcance de bloque, pero la variables declaradas con var no tienen alcance de bloque si no que tendria en este caso alcance de funcion
    //console.log(str);
  }
  printAge1();
  return age;
}
const firsName2 = 'jonas';
calcAge2(1995);

//*veamos otro ejemplo, en este ejemplo vemos como las funciones tienen alcance de bloque, la funcion 'add' esta dentro del bloque if por lo que solo estara disponible dentro de este bloque, pero (//INPORTANTE) esto es solo cuando tenemos activado el mode estricto, si este estuviera desactivado tendria alcance de funcion y el error ya no saldria.
function calcAge3(birthYear) {
  const age = 2024 - birthYear;
  function printAge2() {
    const output = `${firsName}, tienes ${age}, naciste en ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `ohhh eres un millenial ${firsName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //add(2, 3);
  }
  printAge2();
  return age;
}
const firsName3 = 'jonas';
calcAge3(1995);

//# debemos tener en cuenta que si la variable 'firsName' la declaramos dentro de el bloque if como 'nelson' por ejemplo. la salida seria `ohhh eres un millenial nelson` ya que al estar esta variable dentro de su alcanse no seguira buscando. y esto esta bien pueden haver variables con el mismo nombre y seran variables totalmente distintas miestras esten en un alcanse distintas. pasa lo mismo con los paremetros que le pasamos a las funciones, por eso podemos tener parametros con los mismos nombres

console.log('HOISTING Y TDZ');
//segun lo aprendido ya sabemos como sera el comportamiento de estas variables que las estamos llamando antes de que sean declaradas o antes de que su lectura llegue a ellos
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'nelson'; //indefinido
let job = 'teacher'; //error: no se puede acceder antes de su inicializacion
const year = 1899; //error: no se puede acceder antes de su inicializacion

//* veamos ahora que sucede con las funciones, pasa adsolutamente lo mismo que con las variables exepto por la funcion declarada con var, ahora si nos indica que es un error y no indefinida, pero es otro tipo de error 'flecha no es una function'
// console.log(declaration(2, 3));
// console.log(expresion(2, 3));
// console.log(flecha(2, 3));

function declaration(a, b) {
  return a + b;
}

const expresion = function (a, b) {
  return a + b;
};

//analoizemos este error que basicamente es porque como esta funcion esta indefinida ese es su valor al igual que con las variables, pero luego llamamos a esta funcion osea estamos haciendo lo siguiente: undefined(2,3). esta es la razon de este mensaje de error
var flecha = (a, b) => a + b;

//* veamos ahora un posible error que podriamos cometer si utilizamos var
//segun la logica de este codigo, solo cuando el carrito este vacio la funcion se ejecutra, pero vemos que no es asi. esto se debe a que la variable fue declarada con var, esto significa que toda la variable ahora es indefinida (debido al hoisting) y como indefined es un valor falso, al ser evaluada por la sentencia if esta se convertira en verdadera y se ejecutara la funcion.
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('all products deleted');
}
//* veamos ahora otra diferencia entre VAR, LET Y CONST

var x = 1;
let y = 2;
const z = 3;
//el objeto windows es el padre de todos los objetos en el navegador, ahora la variables declaradas con VAR crear en este objeto windows una propiedad que es la propiedad : (x = 1), pero las variables declardas con let y const no crean esta propioedad, esto puede tener algunas implicansias, pero como var no se deberia usar nunca . esto es solo para saberlo.
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log('PALABRA THIS');

//como ya se conoce, la plabra this en el ambito global apuntara al objeto windows, que es su alcance mas cercano(padre)
//console.log(this);

//tambien sabemos que al llamar a una funcion de manera regular(no atada a ningun objeto) esta palabra quedara como 'undefined' siempre y cuendo se este usano  el metodo stricto, si no este este caso apuntaria al objeto windows
const calcAge4 = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAge4(1999);

//veamos el comportamiento dentro de una funcion flecha. RECORDAR que esta no posee su propia palabra this, por lo que tomara y usara la palabra this de su alcance mas cercano que en este caso es el objeto windows.
const calcAge5 = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAge5(1999);

//ahora veamos su comportamiento dentro de un metodo, vemos que el objeto que llama a la funcion es el objeto jonas que coincide con el objeto que es dueño (porque esta definida dento de ella) y la palabra this apuntara a el que llama a la funcion osea JONAS
const jonas = {
  year: 1990,
  calcAge6: function () {
    console.log(this);
    //este es uno de los mayores usos de esta palabra, no tener que excribir al momento de llamar a la funcion el año si no que lo obtenemos del propio objeto
    console.log(2024 - this.year);
  },
};
jonas.calcAge6();

//si bien el caso de arriba el objeto donde esta la palabra this coincide con el objeto que lama a la funcion. esto no es asi siempre y debemos recordar que la palbra this siempre apuntara al objeto que llama a la funcion y no nesecariamente al dueño
const matilda = {
  year: 2016,
};

//debemos recordar que las funciones son tratadas como un simple valor mas. por lo que que podemos hacer lo siguiente (metodo de prestamo)
matilda.calcAge6 = jonas.calcAge6;
//entonces a ahora la palabra this apunta a matilda y no a el objeto jonas que es el que la posee.
matilda.calcAge6();

// veamos un ejemplo mas de este comportamiento, en este caso toda la funcion al momento de llammarla la pasamos a la variable f, por lo que ahora la palabra this apuntara a f. y si nos damos cuenta estamos llamando a la funcion de manera regular por ende la palabra this quedara con el valor de 'undefined'. el error se debe a que como estamos llamando a una funcion desde un undefined, basicamente estamos haciendo esto: undefined.year();  es por esto el error.
const f = jonas.calcAge6;
//f();

console.log('REGULAR FUNCTION Y ARROW FUNCTIONS');

//#analicemos el siguiente caso, estamos llamando a la funcion flecha(greet), pero obtenemos el valor de 'undefined' esto es debido a que como sabemos las funciones flechas no obtienen su propia palabra THIS, entonces lo que hacen es ocupar la palabra this de su alcence mas cercano(padre)en este caso es el objeto windows, pero como en el objeto windows no existe la variable 'firsName' al momento de llamar a esta funcion nos dara 'undefined'.
//# recordemos que las variables declaradas con VAR si crean un objeto propiedad en el objeto windows, por lo que si tuvieramos una variable declarada como 'firsName = algo' el objeto global al ejecutar esta funcion tomaria esta variable porque esta en el objeto windows. y esto no es bueno por eso una vez mas NO DEVEMOS USAR VAR.
//# el hecho de no utilizar VAR nos evitaria estos casos, pero aun asi, nos aparece 'undefined', que tambien deveriamos evitar(por lo menos en este caso) y para eso simplemente no deveriamos usar una funcion flecha como metodo (dentro de un objeto)

//INPORTANTE debemos saber que el objeto nelson sus corchetes no son un bloque de codigo en donde se crea un alcance, es solamente la forma de crear literalmente un objeto.

//var firsName4 = 'esto se debe evitar';
const nelson = {
  firsName4: 'nelson',
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
  greet: () => console.log(`${this.firsName4}`),
};
nelson.greet();

//* veamos otro punto importante que es cuando tenemos una funcion dentro de un metodo
const nelson1 = {
  firsName4: 'nelson',
  year: 1999,
  calcAge: function () {
    console.log(2024 - this.year);
    //vemos que el resultado de llamar a 'isMillenia'l es 'undefined' esto es asi ya que estamos llamanddo a esta funcion regular de manera normal y por regla la palabra this sera undefined, aunque este dentro del objeto y dentro de el metodo.
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    //*para solucionar esto la mejor alternativa es usar una funcion FLECHA, ya que esta ya no sera indefinida y ademas no posee su propia palabra this, asi que heredara esta de su alcance mas cercano que en este caso es el metodo 'calcAge' y vemos que ya no tenemos error alguno.
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};
nelson1.calcAge();

//# en la leccion sobre el contexto de ejecusion de las funciones y callStack tambien aprendimos que este contexto ademas de la palabra this, el entorno de variables (donde se almacenam las variables) tambien teniamos acceso a un objeto argumento o la palabra argumentos y al igual que con la palabra this. esta esta disponible solo en las  funcionnes regulares.

//veamos  un ejemplo de esto
const addExpre = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(addExpre(2, 5));

//vemos que nos arroja un error, y esto se debe a que la palabra arguments no esta presente en las funciones flechas, esto no es de tanta importancia ya que con javascript moderno tenemos otras formas de crear argumentos. esto es solo para que sepamos que esta palabra existe en las funciones, menos en las funciones flecha.(esta palabra arguments se usa a veces cuando necesitamos mas argumentos de los pedidos)
var addArrow = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(addArrow(2, 5));

console.log('PRIMITIVES VS OBJETOS(PRIMITIVE VS REFERENCE TYPES)');
//veamos algunos puntos importantes sobre la forma en la que se almacenan los valores primitivos(numeros, boolean, string, undefined, null,symbol, BigIn) y los objetos en javascript

//si analizamos este codigo funciona como esperamos, almacenamos la edad de 30 en la variable de viejaEdad y luego modificamos la edad. de esta manera podemos conservar.
let edad = 30;
let viejaEdad = edad;
edad = 31;
console.log(edad);
console.log(viejaEdad);

//pero cuando hacemos lo mismo usando objetos, el resultado no es el mismo, podemos observar que la edad cambio para los 2 objetos. esto se debe basicamente a la forma en la que se almacenan los valores primitivos y los objetos.
//#
const yo = {
  name: 'nelson',
  age: 30,
};

const friend = yo;
friend.age = 24;
console.log('friend:', friend);
console.log('me:', yo);

//en este ejemplo poddemos observar el mismo comportamiento
let lastName = 'rodriguez';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//y aca el mismo comportamiento esperado para los objetos de referencia(objetos)
const jessica = {
  firtName: 'jessica',
  lastName: 'rodriguez',
  age: 27,
};
//*recordar que aca no estamos copiando el objeto como se podria penser, estamos creando una nueva variable que apunta al mismo objeto en la memoria(callStack), esto implica que al cambiar una propiedad de cualquiera de los 2 objetos esta cambiara pra el otro tambien.
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Antes de casarse:', jessica);
console.log('despues de casarse:', marriedJessica);

// veamos un ejemplo de como podemos crear realmente una copia de un objeto para que al momento de copiar un objeto este no afecte al otro.
const jessica2 = {
  firsName: 'jessica',
  lastName: 'rodriguez',
  age: 27,
};
//de esta forma este objeto puede ser copiado y el nuevo objeto sera completamente diferente a este osea ocupara un espacio de memoria distinto y ya no apuntara al mismo espacio de memoria si no a uno completamente distinto.
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
//podemos observar que el apéllido se mantiene
console.log('antes de casarse:', jessica2);
console.log('despues de casetse:', jessicaCopy);

//* ahora esta forma de escribir un objeto tiene un problema, ya que esta copia en este caso 'jessicaCopy', es una copia superficial esto quiere decir que si tuvieramos otro objeto dentro de el primero(jessica2) este aun apntaria al objeto que lo posee. veamos un ejemplo de esto.

const jessica3 = {
  firsName: 'jessica',
  lastName: 'rodriguez',
  age: 27,
  family: ['alice', 'bob'],
};

const jessicaCopy3 = Object.assign({}, jessica3);
jessicaCopy3.family.push('mary');
jessicaCopy3.family.push('John');
jessicaCopy3.lastName = 'Davis';

//*podemos observar que dentro del objeto jessica3, tenemos otro objeto que es un array y a pesar de que la copia la hicimos con  el metodo que realmente nos permite copiar un objeto (en realiadad la palabra seria fusionar). al momento de modificar algunos parametros de este objeto 'family' que esta dentro de el. si cambian tambien en el primer objeto. pero los apellidos originales se conservan en cada uno de los objetos. esto se debe a que el 'OBJECT.ASSIGN()' solo crea una copia a nivel superficial osea que es valido solo para el primer objeto, o el objeto primcipal, no para el segundo
console.log('antes de casarse:', jessica3);
console.log('despues de casetse:', jessicaCopy3);
