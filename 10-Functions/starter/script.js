'use strict';
console.log('PARAMETROS POR DEFECTO');
/*
//lo primero que veremos sera establecer valores predeterminados a los parametros
const bookings = [];

const createBooking = function (
  numeroVuelo,
  numeroPasajero = 1,
  valor = 23 * numeroPasajero
) {
  //usando el cortocircuito lo podriamos hacer asi: recordar que el operador || devolvera el primer valor positivo que encuentre si no encuentra nunguno devolvera el ultimo, como 'uindefined' es falso devoñlvera el 1, pero esto es de la vieja escuela ahora podemos hacerlo directamente en los parametos
  //numeroPasajerom = numeroPasajero || 1;

  //debemos recordar que ya no es necesario escribir 2 veses la misma propiedad (numeroVuelo: numeroVuelo) para que haga referencia al parametro del mismo nombre solo basta con el nombre y automaticamente creara esa propiedad con ese nombre
  const booking = {
    numeroVuelo,
    numeroPasajero,
    valor,
  };
  //vemos como las propiedades toman el valor de los parametros dados, pero tambien vemos como a los parametros que no se les dio valores aparecen como 'undefined'
  console.log(booking);

  bookings.push(booking);
};
createBooking('LHU23');
createBooking('LHU23', 3, 400);
//unas de las cosas que nos permite darle valores predeterminados es que podemos hacer calculos en ellos, por ejemplo podemos calcular el valor en base a la cantidad de pasajeros. INPORTANTE debemos tener en cuenta el orden de los parametros esto funciona porque javascript sabe cual es la cantidad de pasajeros (porque se definio antes que el valor). en otras palabras debemos tener presente que: EL PRIMER VALOR SE LE ASIGNARA AL PRIMER PAREMETRO Y ASI SUCESIVAMENTE 'NO SE PUEDE SALTAR UN VALOR' LO QUE SI PODEMOS HACER ES ESTABLECER UN VALOR COMO (UNDEFINED)
createBooking('LUGA12', 3);
// aunque en este ejemplo tenemos un valor predeterminhado , pero si no lo tuvieramos tomaria el valor de undefined
createBooking('NUEHE', undefined, 23);
*/
console.log('PASANDO ARGUMENTOS A LAS FUNCIONES');
/*
//* este sera un recordatorio de como funcionan los valores primitivos vs los de referencia(objetos)

const fligth = 'LH234';
const nelson = {
  nombre: 'nelson rodriguez',
  pasaporte: 3432453454,
};
//javascript nos dice que numeroVuelo = 'JKS11' es una variable nueva, por eso no se marca en los parametros como pasajero, queriendonos decir que eso no es correcto hacerlo.
const checkIn = function (numeroVuelo, pasajero) {
  numeroVuelo = 'JKSJ11';
  pasajero.nombre = 'Mr.' + pasajero.nombre;
  if (pasajero.pasaporte === 3432453454) alert('Check In');
  else alert('Pasaporte falso');
};

//checkIn(fligth, nelson);

//lo primero es que podemos observar que el numero del vuelo no cambio a pesar de que lo modificamos en la funcion, pero el nombre si tomo el cambio que se le realizo en la funcion. este comporttamiento se debe a la forma en que los valores primitivos y objetos se almacenan en memoria.
//*primero fligth es un valor primitivo y cuando se lo pasamos a una funcion como parametro este en realidad lo que recibe es una copia del valor original, es por eso que el valor origianl no se ve afectado porque lo que realmente fue modificado fue una copia(otro valor con una direccion de memoria distinta). con los objetos debemos recordar que cuando hacemos una copia de este seguira siendo el mismo objeto porque lo que se modifica es la direccion de memoria en el callStack pero este seguira apuntando al mismo objeto en el HEAT. por eso si se modifico el nombre.
console.log(fligth);
console.log(nelson);

//* veamos otro ejemplo de este comportamiento primitivos vs objetos ya que debemos tener cuidado y siempre presente este comportamiento al pasarle argumentos a las funciones

const newPassport = function (persona) {
  persona.pasaporte = Math.trunc(Math.random() * 1000);
};
newPassport(nelson);
//al cambiar el pasaporte antes de llamar a la funcion checkIn(que verifica que el pasaporte sea el correcto) este cambio es pósible ya que el objeto sigue siendo el mismo. y al cambiarlo cambiara el original tambien. es por eso que la funcion checkIn nos arroja el else de que el pasaporte es falso.
checkIn(fligth, nelson);
*/
console.log('FUNCIONES DE PRIMERA CLASE Y DE ORDEN SUPERIOR');
/*
//* crearemos 2 funciones que seran las que le pasaremos a nuestra funcion de orden superior

//esta funcion devolvera cualquier cadena sin espacios
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
  //recordar que tambien podemos hacerlo asi
  //str.replace(/ /g, '').toLowerCase();
};
//esta otra devolvera cualquier cadena con su primera palabra en mayuscula. primero dividimos la cadena por sus espacios en blanco, luego con una destructuracion le decimos que la primera division sera la que tendra la mayuscula y las demas no, finalmente para unir y sacar de el array estas palabras usamos join()
const upperFirstWord = function (str) {
  const [primera, ...demas] = str.split(' ');
  return [primera.toUpperCase(), ...demas].join(' ');
};

// esta es nuestra funcion de orden superior, porque recibe una funcion como parametro
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(` Transformen string: ${fn(str)}`);
  //RECORDAR que las funciones pueden tener metodos incluso propiedades (porque son objetos especiales) y una de esas propiedades es 'name' que nos hace mencion del nombre de la funcion
  console.log(` trasformed by: ${fn.name}`);
};
//recordemos que las funciones 'upperFirstWord' y 'oneWord' de conocen como funciones callBack porque seran llamadas cuando la funcion de orden superior se ejecute
transformer('esta es una cadena', upperFirstWord);
transformer('esta es una cadena', oneWord);

// es lo mismo cuando usamos el 'addEventListener'
const hola = function () {
  console.log('👋');
};
document.body.addEventListener('click', hola);

// o cuando usamos una funcion como metodo, por ejemplo en un ciclo para darle una altividad a los elementos
['nelson', 'ana', 'jose'].forEach(hola);
*/
console.log('FUNCIONES RETORNANDO FUNCIONES');
/*
//*esta tambien es una funcion de orden superior, porque esta retornando una funcion

//esta funcion saludar lo unico que hace es retornar una funcion y se ejecutara cuando la funcion retornada se ejecute
const saludar = function (saludo) {
  return function (name) {
    console.log(`${saludo} ${name}`);
  };
};
// podemos observar que al ejecutar la funcion 'saludar' nos devuelve la funcion que es lo que hace en realidad
const funcion = saludar('hola');

// como la variable funcion es la funcion retornada la ejecutamos
funcion('nelson');

//esta es otra manera de lamar inmediatamente a las 2 funciones
saludar('que tal')('mini');

//* lo mismo pero con funciones flecha
const saludar2 = saludo => nombre => console.log(`${saludo} ${nombre}`);
saludar2('hey')('bulma');
*/
console.log('METODOS DE LLAMADA Y APLICASON (call, apply, bind)');
/*
// veremosmcomo podemos crear la palabra this manualmente y porque es necesariuo hacerlo

const latamAir = {
  nombreAerolinia: 'Latam',
  latamCode: 'LH',
  reservas: [],
  //forma moderna de escribir una funcion en un objeto, sin escribir literalmente la palabra 'function'
  reserva(numeroVuelo, nombre) {
    console.log(
      `${nombre} reservo un asiento en ${this.nombreAerolinia} vuelo ${this.latamCode}${numeroVuelo}`
    );
    //tambien queremos que nuestro array de reservas se llene con estas 2 reserbas que tenemos
    this.reservas.push({
      vuelo: `${this.latamCode} ${numeroVuelo} ${nombre}`,
    });
  },
};
//nada nuevo hasta ahora
latamAir.reserva(234, 'nelson rodriguez');
latamAir.reserva(122, 'jessica rodriguez');
console.log(latamAir.reservas);

//pero que pasa si esta aerolinea Latam crea una nueva aerolinea
const eurowings = {
  nombreAerolinia: 'Eurowings',
  latamCode: 'EW',
  reservas: [],
};

//esta nueva aerolinea tambien posee el metodo 'reserva' con la misma salida, pero ese metodo ya esta y como copiar y pegar es una mala practica lo que hacemos es tomar el metodo y almacenarlo en una variable fuera, para luego usarlo en las aerolineas que queramos
//* pero es aqui donde debemos tener cuidado ya que si recordamos una manera de llamar o utilizar la palabra this es llamandola desde una funcion NORMAL O REGULAR y en estos casos donde THIS siempre sera o apuntara a 'UNDEFINED' que es justamente lo que estamos haciendo.
const reserva = latamAir.reserva;

//entonces a la hora de utilizar esta variable que estando fuera se transforma en una FUNCION REGULAR es que THIS es 'undefined' por eso el error en la linea 134 ya que no puede leer las propiedades porque this es 'undefined'. en otras palabras es COMO SI FUERA UNA COPIA y no el metodo en si. y digo 'como si fuera' ya que solo los valores primitivos crean copias los objetos seguiran siendo los originales.

//reserva(11, 'mini rodriguez');
//* si queremos que realmente esta variable 'reserva' funcione debemos decirle explicitamente a javacript a donde debe apuntar la palbra THIS y para cituaciones comom esta tenemos 3 metodos que podemos usar RECORDAR que las funciones son objetos como como los objetos pueden tener metodos las funciones tambien.

// CALL el primer metodo que veremos Y primer parametro sera a lo que queremos que apunte la palabra this y los demas seran los propios ARGUMENTOS  de ese objeto
reserva.call(eurowings, 22, 'jessica rodriguez');
console.log(eurowings);

//cambiamos otra vez a donde debe apuntar la palabra this
reserva.call(latamAir, 11, 'mini rodriguez');
console.log(latamAir);

//INPORTANTE ecribir los nombres de las propiedades deben tener los mismos nonbres que el original ya que THIS esta tratando de acceder a estas

const skay = {
  nombreAerolinia: 'skay Air Lines',
  latamCode: 'SK',
  reservas: [],
};

const sky = latamAir.reserva;

sky.call(latamAir, 33, 'vaca rodriguez');
console.log(skay);

//APPLY es el segundo metodo que veremos y realiza lo mismo que call, solamente que no recibe parametros individuales si no como segundo argumento resibe un array y es en este array en donde deben estar estos argumentos del objeto
const datosVuelo = [444, 'ilia del carmen'];

sky.apply(latamAir, datosVuelo);
console.log(skay);

// ahora si utilizamos lo aprendido hasta ahora podemos obviar el uso de apply si no es estrictamente necesario y hacer esto
sky.call(eurowings, ...datosVuelo);

// BIND es el tercero y ultimo de los metodos que veremos para estos casos donde debemos indicarle a javascript explicitamente a donde debe apuntar la palabra THIS. este metodo es mas util ya que en vez de llamar inmediatamente a la funcion devolvera una nueva funcion y esto hace que sea mas facil establecer vuelos a una aerolinea determinada
const reservaLH = reserva.bind(latamAir);
const reservaEW = reserva.bind(eurowings);
const reservaSK = reserva.bind(skay);

// ahora podemos usar estas funciones devueltas
reservaLH(12222, 'cigoi merfo');
reservaEW(3459, 'petro delmano');
reservaSK(20001, 'princesa rodriguez');

// otra cosa inportante es que BIND tambien puede recibir mas parametros, por ejemplo podemos establecer un parametro por defecto, en este ejemplo hemos establecido por defecto que el numero del vuelo sea 23, por lo que la funcion 'reservaLH23' solo necesitara el nombre
const reservaLH23 = reserva.bind(latamAir, 23);
reservaLH23('deisy rodriguez');

//otro ejemplo de uso para estos metodos especialmente el bind, es cuando usamos 'objetos asociados a un detector de eventos'. para este ejemplo crearemos una nueva propiedad llamada aviones y una funcion dentro de la aerolinia 'latamAir'

latamAir.aviones = 300;
latamAir.compraAviones = function () {
  console.log(this);

  this.aviones++;
  console.log(this.aviones);
};

//podemos observar al hacer click en el boton aparece precisamente ese elemento osea que this esta apuntando al elemento boton y esto es asi porque asi se comporta la palabra this cuando esta asociada a un listener apauntara el elemento atado al listener en este caso el botom 'buy'
document
  .querySelector('.buy')
  .addEventListener('click', latamAir.compraAviones);

//como vemos aca necesitamos decirle a javascript explicitamente a donde querremos que apunte esta palabran en este ejemplo queremos a que apunte a 'latamAir', pero usamos call, apply o bind. como es el listener el que debe llamar a la funcion y call  y apply llaman y ejecutan inmediatamente la funcion las podemos descartar asi que usamos bind  porque esta lo llamara a la funcion si no crea uan  funcion nueva y la devuelve.
document
  .querySelector('.buy')
  .addEventListener('click', latamAir.compraAviones.bind(latamAir));

// otra caso de uso de este metodo bind es para lo que se conoce como 'PARCIAL APPLICATION' OSEA ESTABLECER PARAMETROS POR DEFECTO como lo hicimos en un ejemplo anterior, pero en este ejemplo la palabra this nisiquiera es importante porque no se necesita

//y para confirmarlo usaremos una funcion flecha, tenemos una funcion que calcula un inpuesto (inpuesto)  a un valor (valor) y nos devuelve el valor con el inpuesto agregado, nada nuevo hasta ahora
const addInpuesto = (inpuesto, valor) => valor + valor * inpuesto;
console.log(addInpuesto(0.1, 200));

//pero si queremos establecer un inpuesto que sea fijo por ejemplo el iva es del 19% y no varia, INPORTANTE el orden de los parametros es inportante y para saltar la palabra this usamos 'null' otra cosa que debemos tener en cuenta que podriamos haver echo esto en una funcion y los parametros por defecto directamente, pero el hecho de crear una funcion especifica en base a otra general le da un enfoque diferente
const agregarIva = addInpuesto.bind(null, 0.19);
console.log(agregarIva(100));
console.log(agregarIva(35));

//si analizamos bien lo que sucede es como si una funcion general retornara una funcion mas especifica

const funcionGeneral = function (inpuesto) {
  return function (valor) {
    return valor + valor * inpuesto;
  };
};
const addInpuesto2 = funcionGeneral(0.19);
console.log(addInpuesto2(100));
console.log(addInpuesto2(50));
*/

console.log('INVOCANDO FUNCIONES EXPRESIVAS INMEDIATAMENTE');
// en algunas oportunidades vamos a necesitar ejecutar una funcion solo 1 vez, y para estos casos podemos hacer lo siguiente: debemos escribir la funcion sin asignarlo a ninguna variable eventualmente esto nos arrojara un error, pero podemos engañar a javascript por lo menos 1 vez y lo que hacemos es poner toda la funcion entre parentesis e inmediatamente la llamamos.

(function () {
  console.log(' esto se ejecutara una vez y nunca mas ');
})();

//las funciones flechas tambien es un tipo de funcion expresiva
(() => console.log('tambien se ejecutara solo una vez'))();

// este patron de invocasion inmediata se creo para mantener seguras algunas variables, debemos saber que en la programacion el tener variables encapsuladas o privadas es muy importante para que nadien mas pueda alterarlas. de esta manera estas variables dentro de estas funciones estan protegidas de otras personas ajenas al codigo.
//NOTA pero este patron se creo antes de que se introdujeran las variables 'let' y 'const' debemos RECORDAR que estas variables crean su propio alcance por lo que este patron que acabamos de ver ya no se utiliza en javascript moderno, basta con escribir let p const en un bloque.

{
  const isPrivado = 12;
  var noPrivada = 1;
}
//vemos que efectivamente no podemos acceder desde el alcanse global
//console.log(isPrivado);
//pero si esta escrita con 'var' si podemos acceder recordar que var ignora los alcanses
console.log(noPrivada);

//* pero si realmente queremos ejecutar una funcion solo una vez, el patron visto es el camino a seguir

//# los cierres (closer) es un concepto que se aplica de manera automatica en ciertas ocasiones y es bueno poder identificar esas cituaciones para entender en su totalidad javascript

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} pasajeros`);
  };
};
const booker = secureBooking();
// para entender este concepto debemos analizar lo que pasa en el 'callStack' si recordamos cada funcion se ejecutara en esta estructura que es una pila. ahora cada contexto de ejecusion que se ejecuta en esta píla una vez que sea llamada se eliminara de la pila osea del 'callStack'. entonces al ejecutar la funcion 'secureBooking' se creara un nuevo contexto de ejecusion recordar que en cada contexto de ejecusion hay un entorno de variable donde estan todas las vcariables declaradas en ese contexto que en este ejemplo solo es una 'passengerAcount' luego retorna otra funcion la cual almacenamos en la variable 'booker'. y que pasa cuando el contexto de ejecision termina se va del callStack sale de la pila. //¿ entonces como es posible que la variable booker aun tenga acceso a la variable 'passengerCount' si ya se a ido del callStack?
//bueno es gracias a los CLOSURES de alguna manera esta variable 'passengerCount' sigue disponible para esta variable que esta en el alcanse global. podriamos decir que los cierres recuerdan todas las variables que existian en el lugar de naciomiento de la funcion. ahora esto es un concepto, pero tiene una explicasion teorica y practica solo debemos entender como funciona el callStack.
//*el secreto de los cierres es basicamente que toda funcion siempre tendra acceso al entorno de variable donde dicha funcion se creo. que es justamente lo que paso en este ejemplo. la variable booker fue creada en el contexto de ejecusion de 'secureBooking'
//*en otras palabras podemos decir que gracias a los cierres las funciones no pierden su conexion con las variables que existian en el momento del nacimiento de la funcion apesar de que esta ya no este activa en el callStack
//entonces javascript lo que hace es buscar en el 'clouser' incluso antes que en la 'cadena de alcance' esto quiere decir de que si existiese una variable con el mismo nombre en el alcanse global esta seguira usando la variable original. porque los cierres tiene prioridad sobre la cadena de alcanse
booker();
booker();
booker();

//debemos entender que esta es un concepto no es algo tengible, no podemos acceder ni manipular estas variables que siguen presente en alguna parte. lo que si podemos acer es observar es este caso podemos observar la variable 'booker'
console.dir(booker); //cada vez que veamos doble corchetes significa que es una propiedad interna a la cual no tenemos acceso

//*NO ES NECESARIO DEVOLVER FUNCIONES DE OTRAS PARA EXPERIMENTAR LOS CIERRES, VEAMOS OTROS CASOS EN DONDE APARECEN LOS CIERRES
//analicemos el siguiente ejemplo tenemos la variable f declarada afuera de la funcion, pero la utilizamos dentro de la funcion para asignarle una funcion esta funcion utiliza la variable a de su funcion padre. entonces al momento antes de ejecutar la funcion f, el contexto de ejecusion de la funcion 'g' ya se abra ido, aun asi la funcion 'f' puede hacer uso de la variable 'a' para darnos el resultado correcto. como podemos  observar esto es gracias a los cierres.
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
//g();
//f();

// vayamos a un nivel mas lejos, que pasa ahora si volvemos a reasignar la variable f a otra funcion
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
//reasignamos la variable 'f' odemos observar que la funcion f ahora esta utilizando la variable 'b' ya no 'a' . osea el cierre volvia arealizar su trabajo, pero a demas vemos que esta es una funcion distinta
h();
f();
console.dir(f);

// VEAMOS EL ULLTIMO CASO AHORA CON TEMPORIZADORES
//*NOTA un temporizador recibe 2 parametros el primero es una funcion(que se ejecutara pasado el tiempo del segundo parametro) y el segundo es el tiempo en milesegundos
//tenemos una funcion padre 'boardPassengers' la cual recibe 2 parametros, estos parametros seran usados por la funcion 'setTimeout' cuando esta funcion padre ya se alla ido del callStack y hay esta nuestro cierre.
const boardPassengers = function (personas, tiempoE) {
  const persoGrupo = personas / 3;
  // esta funcion que se ejecutara despues de 3 segundos es realmente una funcion callBack porque esta como parametro de la funcion setTimeout
  setTimeout(function () {
    console.log(`estamos abordando a los ${personas} pasajeros`);
    console.log(`somos 3 grupos cada uno con ${persoGrupo} pasajeros`);
  }, tiempoE * 1000);
  console.log(`estamos listos para abordar en ${tiempoE} segundos`);
};
// el punto es que primero se establecera la variable 'persoGrupo' y el texto de la funcion padre y luego de 3 segundos (3 * 1) se ejecurata la funcion callBack con sus respectivos textos.
boardPassengers(180, 3);
