'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2024-11-12T13:23:46.674Z',
    '2024-11-15T13:23:46.674Z',
    '2024-11-06T13:23:46.674Z',
    '2024-11-06T13:23:46.674Z',
    '2024-11-06T13:23:46.674Z',
    '2024-10-06T13:23:46.674Z',
    '2024-11-10T13:23:46.674Z',
    '2024-11-15T13:23:46.674Z',
  ],
  currency: 'CLP',
  locale: 'es-CL', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2024-11-12T13:23:46.674Z',
    '2024-11-15T13:23:46.674Z',
    '2024-11-06T13:23:46.674Z',
    '2024-11-02T13:23:46.674Z',
    '2024-11-03T13:23:46.674Z',
    '2024-11-10T13:23:46.674Z',
    '2024-11-15T13:23:46.674Z',
    '2024-11-15T13:23:46.674Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions,
//para que todos los lugares donde mostramos numeros todos tengan la misma cantidad de decimales usamos el metodo 'Fixed'
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  //cada vez que se retorna un valor los demas 'return' no se ejecuran, de hecho podemos quitar el else y de todas maneras el codigo dentro de el se ejecutra si ninguno de los return anteriores es ejecutado.
  if (daysPassed === 0) return 'hoy';
  if (daysPassed === 1) return 'ayer';
  if (daysPassed <= 7) return `${daysPassed} dias atras`;
  else {
    //creamos la fecha tal como antes,NOTA usamos plantilla literal para basicamente poder usar el padStart, porque este es un metodo de string
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const moth = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    // return `${day}/${moth}/${year}`;
    //reemplazamos el formatto manual que realizamos por la API de internalizacion, y a diferencia de la otra no necesitamos un objeto como segundo parametro para configurar la hora, ya que solo necesitamos la fecha
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

//como este codigo se estaba repitiendo muchas veces, mejor creamos esta funcion. NOTA esta es una funcion que podeamos usar para cualquier otra aplicasion por eso usamos 3 paremetros (pueden ser cualquiera)si solo fuera para esta aplicasion usariamos locale y currency
// solo nos queda llamar a esta funcion en las partes que se necesite('displayMovements, calcDisplayBalance, calcDisplaySumary(out, interest)')
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    //podemos recorrer 2 array con el mismo ciclo, como tenemos 'i' lo podemos utilizar para recorrer el segundo array (es una tecnica comun par recorrer 2 array con el mismo ciclo)
    const date = new Date(acc.movementsDates[i]);
    const displayDay = formatMovementDate(date, acc.locale);

    const formatMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDay}</div>
        <div class="movements__value">${formatMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//creamos una funcion que es la que implementara el temporizador cada vez que se inicie sesion, de esta manera cerrar la sesion despues de cierto tiempo
const startLogOutTimer = function () {
  //IMPORTANTE una cosa que sucede es que cada vez que iniciamos sesion el temporizador comienza en 1 sugundo, porque la funcion se ejecutara solo despues de 1 segundo, pero queremos que comience inmediatamente segun el tiempo que le demos en el 'time', es por eso que cortamos y pegamos esta funcion aca y le dimos el nombre de tick, para luego llamarla inmediatamente y despues se la pasamos a setInterval.
  const tick = function () {
    //transformamos los segundos a minutos, pero  nos sobran algunos decimales a si que los quitamos y le damos un formato de 2 digitos
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    //transformamos los minutos a segundos, pero nos sobran 40 segundos (que es el resto), por eso comienza en '01:40'
    const sec = String(time % 60);
    //en cada segundo, osea en cada llamada imprimimos el tiempo restante en la inerfaz
    labelTimer.textContent = `${min}:${sec}`;
    //disminuir en 1 segundo
    //time--;
    //IMPORTANTE cuando llegue a cero cerramos sesion, pero si nos damos cuenta cuando en el codigo de arriba antes de 'time--' osea antes de comenzar unn nuevo ciclo, si el valor es 1 y despues de pasar por time-- este cera cero por lo que en este punto time es 0 y se ejecutra el 'clearInterval', pero lo hara en el segundo 1. por lo que dedbemos poner el decremento despues del if
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  };
  //establecemos el tiempo para cerrar la sesion, en este caso 10 segundos
  let time = 50;
  tick();
  const timer = setInterval(tick, 1000); //llamamos al temporizador cada segundo
  //IMPORTANTE otro problema es que si estamos en nla sesion de jonas y luego cambiamos de usuario tendremos 2 temporizadores trabajando al mismo tiempo superpuestos, por eso es importate retornar este temporizador para poder borrarlo luego
  return timer;
};

///////////////////////////////////////
// Event handlers
//necesitamos que el timer al igual que la cuenta actual persistan al cambiar de usuario por eso los definimos como variables globales.
let currentAccount, timer;

//PARA NO TENER QUE INGRESAR A CADA RATO EN LA APLICASION, HAREMOS COMO QUE SIEMPRE ESTUVIERAS LOGEADOS
// currentAccount = account1;
// //actualizamos la aplicasion
// updateUI(currentAccount);
// //mostramos el contenido de la aplicasion
// containerApp.style.opacity = 100;

// PRIMERO VAMOS A EXPERIMENTAR UN POCO CON LA (API) DE INTERNALIZACION, PODREMOS FORMATEAR AUTOMATICAMENTE LAS FECHAS Y HORAS SIN TENER QUE ESCRIBIRLO  MANUALMENTE COMO LO TENEMOS ACTUALMENTE.

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //*implementamos la fecha en nuestro div = balance
    //const now = new Date();
    //tanto el dia como el mes seran de 2 digitos si llegase a faltar 1 se rellenara con 0
    //// este codigo ya no es necesario porque ahora con la API de internalizacion el formato se realizara automaticamente, por lo que lo dejare comentado
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const moth = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${moth}/${year}, ${hour}:${min}`;

    //# esta es la forma de incorporar la API  de internalizacion que transformara automaticamente la fecha y hora al formato de la region dada, observamos tambien que para incorporar la hora debemos pasarle un objeto como segundo parametro a la funcion 'DateTimeFormat'

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long', //otra opcion aca es '2-digit'
      year: 'numeric', //tambien esta la opcion de '2-digit'
      weekday: 'long', // tambien esta la opcion short
    };
    //en muchas situaciones sera mejor establecer la fecha y hora directamente del navegador del usuario, pero como tenemos definido en nuestros objetos ya un locale usamos ese.
    //const locale = navigator.language;
    //console.log(locale);

    const now = new Date();
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //llamamos a la funcion para implementar el temporizador que cerrara la sesion
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //cada vez que realizamos una transferencia se agrega este valor al array de  movements, pero este nuevo movimiento no posee una fecha es por eso que debemos agregar esta fecha a movementsDates tanto para el que da el dinero como para el que lo recibe. y utilizamos el metodo toISOString para tener el mismo formato
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
    //updateUI(receiverAcc);
    //cada vez que realizamos una actividad en la aplicasion debemos reiniciar el temporizador , poor que la idea es que el temporrizador detecte la inactividad del usuario para  cerrarle la sesion
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  //recordar que estos metodos de redondeo de numeros enteros realizan coersion de tipo, por lo que no es necesario transformar este imput anumero con (+, o Number). RECORDAR que floor tomara en cuenta si es + o -
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // incorporamos el setTimeout(), al momento de pedir un prestamo, en este caso el banco se demorara 3 segundos en aprobar el prestamo
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      //hacemos lo mismo cuando pedimos un prestamo al banco(este nuevo movimiento necesita tener una fecha)
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
      //cada vez que realizamos una actividad en la aplicasion debemos reiniciar el temporizador , poor que la idea es que el temporrizador detecte la inactividad del usuario para  cerrarle la sesion
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log('verificando si es numero o no');
/*
//#lo primero que debemos saber es que los numeros simpre son tomados como decimales. EJP: 50 para javascript siempre sera 50.0 y esa es una de las razones por las cuales solo hay un tipo de numeros. tambien todos los numeros se representan internamente en un formato de (64 base 2) esto significa que siempre se almacenan en binario (0 y 1), muy distinto a lo que estamos acostunbrados formato (en base 10) => osea numeros del 1 al 9.
//esto ase que representar algunas fracciones sea algo mas complejo.

console.log(23 === 23.0);
//debemos aceptar que no podremos hacer calculos cientificos precisos con javascroipt porque tarde o temprano nos encontraremos con problemas como este donde el resultado no es lo que esperariamos.
console.log(0.1 + 0.2);

//este seria el resultado real, pero vemos que es false para javascript
console.log(0.1 + 0.2 === 0.3);

//tenemos estos 2 formas para convertir un string a un numero, RECORDAR que estar este signo + delante del string provocara que javascript realize 'coercion de tipo'
console.log(Number('23'));
console.log(+'23');

//podemos usar algunos de los metodos de la funcion number que en el fondo es un objeto por lo cual posee algunos metodos como 'parseInt' que nos permitira extraer el numero de una cadena que eliminando lo que no es un numero. ahora este metodo recibe 2 parametros el segundo es la base numerica en la que estamos trabajando lo cual es buena practica ponerla siempre para evitar situaciones en el futuro
console.log(Number.parseInt('30px', 10));

//pero solo funcionara si el numero esta al comienzo de la cadena
console.log(Number.parseInt('cadena30', 10));

//tambien tenemos parseFloat que nos permitira obtener los decimales
console.log(Number.parseFloat('2.3rem'));

//vemos que si debemos usar 'parseFloat' porque 'parseInt' no funciona con numeros decimales
console.log(Number.parseInt('30.3rem'));

//# estas 2 metodos o funciones que acabamos de ver son funciones globales, es decir que no es necesario usarlas ancladas a la funcion 'Number', pero es una bueba practica hacerlo
console.log(parseFloat('1.1 rosas'));

// veamos este extraño resultado que nos arrojo antes 'NaN' esta en realidad indica si un numero es o no un numero. en otras palabras cada vez que recibamos esta NaN nos esta diciendo que el resultado 'NO ES UN NUMERO'
//en este caso le preguntamos si 20 es o no un numero, y efectivamente es un numero por eso es false porque 'NO ES NaN'
console.log(Number.isNaN(20));
// este tambien nos arroja false porque simplemente es un valor regular una cadena NO ES UN 'NaN' QUE BASICAMENTE SIGNIFICA => COMO UN NUMERO QUE NO ES VALIDO COMO TAL
console.log(Number.isNaN('20'));

// en este caso intentamos convertir la cadena a numero, pero no usamos 'parseInt', por lo que transformara a numero, pero sin quitar los caracteres por lo que si nos arroja true porque efectivamente es un numero que no es valido como numero
console.log(Number.isNaN(+'20px'));

//en este ejemplo dividimos por 0, lo que en matematica no esta permitido, lo que nos arrojara el valor de 'infinito' que claramente al ser un valor 'infinito' no es un 'NaN', de hecho existe un metodo que nos permitira saber si un numero es finito o no
console.log(Number(23 / 0));
//# para saber si un numero es finito o un numero real debemos usar este metodo(isFinite), guiarnos por el ejercicio donde dividimos por cero para saber o deducir que un numero es finito o infinito o por el metodo NaN, no es una buena practica.
console.log(Number.isFinite(20));
//claramente una cadena no es un numero finito
console.log(Number.isFinite('20'));
//esto tampoco es un numero real de hecho es NaN
console.log(Number.isFinite(+'20px'));
// este tampoco es un numero real, es infinito un tipo de valor que no es un numero como tal
console.log(Number.isFinite(23 / 0));

//tambien tenemos el metodo 'isInteger' que nos permiotira saber si un numero es entero o no
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23.1));
console.log(Number.isInteger(23 / 0));
*/
console.log('otros metodos matematicos y redondeo de numeros');
/*
//veamos la raiz cuadrada de un numero, lo podemos obtener usando el metodo 'sqrt' de raiz cuadrada
console.log(Math.sqrt(25));
// o manualmente escribiendo la expresion (1/2) significa la raiz cuadrada
console.log(25 ** (1 / 2));
//si buscamos la raiz cubica seria asi, de hecho esta es la unica forma de obtener la raiz cubica por que no hay un metodo como 'sqrt' para ello.
console.log(8 ** (1 / 3));

//si queremos obtener el valor maximo de un conjunto de valores tenemos el metodo 'max'
console.log(Math.max(5, 4, 35, 22, 1));
//de hecho este metodo realiza coercion de tipo
console.log(Math.max(5, 4, '35', 22, 1));
//pero no realiza parseo
console.log(Math.max(5, 4, '35px', 22, 1));

//de la misma forma que funciona 'max' funciona 'min'
console.log(Math.min(5, 4, 35, 22, 1));

//si queremos saber el area de un circulo con un radio de 10px ingresado por el usuario lo hacemos asi RECORDAR que el area de un circulo es (pi * radio al cuadrado)
console.log(Math.PI * Number.parseFloat('10px') ** 2);
// el area de un circulo con un radio de 10
console.log(Math.PI * 10 ** 2);

//un metodo que ya hemos usado antes es 'ramdon' este nos arrojara un valor entre 0 y 1 (1 no incluido) osea un numero entre 0 y 0.99999. es por eso que si queremos obtener un numero entero entre digamos 1 y 6 como un dado hacemos lo siguiente
console.log(Math.trunc(Math.random() * 6) + 1);

//para que podamos usar esta formula para generar numeros aleatorios en el rango de 2 numeros podemos crear una funcion
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(122, 7));

//VEAMOS AHORA COMO PODEMOS REDONDEAR NUMEROS, todos estos metodos realizan 'coercion de tipo' osea convertiran implisitamente el tipo de dato

//este como ya lo hemos visto quita la parte decimal y deja el entero
console.log(Math.trunc(23, 3));

//este redondeara al entero mas cercano
console.log(Math.round(23.9));
console.log(Math.round(23.4));

//este siempre redondeara hacia arriba
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

//este redondeara siemre hacia abajo
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

//veamos que paso cuando de trata de numeros negativos, este este ejemplo truc seguira simplemente sacando la parte decimal no importa si es un numero negativo o pisitivo, pero 'floor' si toma en cuenta el numero y redondea segun esto.
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// VEAMOS EL REDONDEO EN LOS DECIMALES, podemos observar que funciona de manera diferente, algo mas sencillo ya que solo tenemos un metodo 'toFixed'al cual podemos indicarle cuantos decimales quiero tener. el problema es que este metodo nos devolvera una cadena asi que deveremos indicarle explicitamente que convierta esta a numero
//NOTA los numeros son valores primitivos por lo tando no tienen metodos, por lo que javascript realiza BOXING  basicamente convertira el numero a un tipo especial de 'objeto numerico' para poder usar los metodos una vez usado los devolvera a su estado de primitivos
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
//nos devolvera los decimales que le indiquemos
console.log((2.733).toFixed(2));
//podemos indicarle como ya hemos aprendido con el metodo 'Number', pro tambien con el signo '+'
console.log(+(2.733).toFixed(0));
console.log(Number((2.733).toFixed(0)));
*/
console.log('operador REMAINDER- (operador de resto)');
/*
// este operador de resto (%) nos devolvera el resto de la division, pero solo hasta su parte decimal
console.log(5 % 2); // el resto es 1
//si realizamos la divison completa el resultado nos arroja un numero decimal
console.log(5 / 2);

console.log(8 % 3); // el resto es 2
console.log(8 % 3); // la division completa nos da un numero decimal
console.log(6 % 2); // el resto es 0
console.log(6 % 2); // el resultado de la divion completa es un numero entero

//* el que la division nos arroje un numero decimal u entero nos ayudara a saber si el numero (dividendo) es un numero par o impar , esto lo hacemos con la ayuda de nuestro operador de resto. si el resto de la division es 0 significa que la division dio como resultado un numero entero ,si el resultado del resto es cualquier numero que no sea cero se trata de un numero decimal, por lo tanto si.

//con esta funcion podemos saber si el numero es un numero par o impar
const esPar = n => (n % 2 === 0 ? 'es un numero par' : 'es un numero impar');
console.log(esPar(7));

// veamos un ejercicio, traemos todos los movimientos y pintamos todos los que sean impares, esto debemos hacerlo dentro de un listener porque si no se anula al ingresar a la aplicasion
labelBalance.addEventListener('click', function () {
  //recordar que este nos devolvera una nodeList, asi que la convertimos en un array
  [...document.querySelectorAll('.movements__row')].forEach(function (fila, i) {
    //como parte de cero las filas pintadas seran 0,2,4,6...
    if (i % 2 === 0) fila.style.backgroundColor = 'orange';
    // en este caso seran 0,3,6,9
    if (i % 3 === 0) fila.style.backgroundColor = 'red';
  });
});

//# podemos deducir que cada verz que queramos hacer algo cada N veces podemos recurrir a este operador osea realizar algo cada 2 o realizar algo cada 3
*/
console.log('separadores numericos');
/*
//en general cuando tenemos un numero muy grande podemos leerlo con cierta facilidad porque usamos los puntos o comas para realizar la separacion, pero en programacion por lo menos en javascript esa posibilidad no estaba, pero desde 2021 podemos usar los '_' guiones bajos.
const diametro = 287_460_000_000;
//vemos que se hace un poco mas facil leer numeros grandes y javascript ignorara estos guiones bajos.
console.log(diametro);
const price = 234_99;
//una ayuda que se agradece sobre todo cuando hay que leer codigo ajeno y no sabemos a que valor se refiere
console.log(price);

//debemos saber que no podemos poner este signo delante del numero ni atraz o al lado de un punto, solo se pertime un '_' entre cada numero.
//lo que debemos tener en cuenta es que al momento de intentar convertir un string a numero estando este signo presente no funcionara
console.log(Number('230000')); // aca si funciona
//nos dira que no es un numero real, por lo que solo debemos usar este sigo cuando estemos trabajando en el codigo (es una ayuda para el programador)
console.log(Number('23_0000'));
//algo similar debemos hacer con la funcion 'parseInt'
console.log(parseInt('230_000'));
*/
console.log('trabajando con BigInt');
/*
// es un tipo especial de numero que se introdujo en 2020, vimos que los numeros en javascript se representan en 64 bits en base 2. osea que hay 64 ceros o unos para representar un numero, pero en realidad solo hay 53 los otros se utilizar para otras cosas. esto quiere decir que hay un limite de cuan grande puede llegar a ser un numero

//el -1 es porque los numeros comienzan del cero. por lo que este es el numero mas grande que javascript puede representar con certeza
console.log(2 ** 53 - 1);
//tal como esta funcion lo indica tambien este es el numero que con seguridad podemos trabajar si el numero es mas grande que este javacript no tendra la capacidad de representarlo con certeza
console.log(Number.MAX_SAFE_INTEGER);

// es aca donde entra nuetro 'BigInt'. vemos que javascript nom representa este nuemro como es
console.log(304853453405830458943849583434);
//pero si agrego el signo de BigInt si lo muestra como tal, y la consola lo muestra de otro color porque lo reconoce como este tipo especial.
console.log(304853453405830458943849583434n);
//tambien podemos crear numeros grandes usando la funcion 'BigInt', aunque los numeros creados con esta funcion deben ser igual de grande de lo que javascript puede representar (la misma longitud), por lo que la obsion del signo es la mejor alternativa
console.log(BigInt(3048534534058304));

//todas las operaciones siguen funcionando de la misma forma, aunque usar este signo no tiene sentido con numeros pequeños
console.log(10000n + 4000n);

console.log(2131223423423n * 2323423n);

//*lo que no podemos hacer es mesclar este tipo de numeros con numeros normales osea numeros BigInt con enteros u decimales
const aleatorioBigInt = 2342354234534n;
const numero = 23;

// es en estos casos donde la funcion constructora puede entrar en accion
console.log(aleatorioBigInt * BigInt(numero));

//*veamos otras casos y execciones con este tipo especial de numero primitivo.
//vemos que en este caso sigue funcionando
console.log(20n > 15);
//tambien funciona porque de hecho son numeros didtintos uno es un entero y el otro es un BigInt, RECORDAR que el moperador de igual triple no realiza coercion de tipo
console.log(20n === 20);
// pero en este caso este operador si realiza coercion de tipo por lo que ahora si son 2 numeros del mismo tipo. en este caso transformo el bigInt en un numero normal
console.log(20n == 20);
// en este caso transformo el string a un numero
console.log(20n == '20');

//* otra cosa que no podemos hacer es utilñizar algunas operaciones matematicas como la raiz cuadrada
//console.log(Math.sqrt(16n));

//vemos que en este caso transformo todo a una cadena
console.log(aleatorioBigInt + 'es muy grande');

//* por ultimo veamos que pasa con las divisiones
//simplemente nos devolvera el numero mas cercano al entero bigInt o en oytras palabras cortara la parte decimal
console.log(10n / 3n);
console.log(10 / 3);

//aca no hay decimales que cortar y devolvera el numero tal cual
console.log(12n / 3n);
*/
console.log('creando fechas');
/*
//debemos saber que las fechas en javascript se crear y hay 4 formas de hacerlo, todas usan la funcion constructora, pero con diferentes parametros.

//1-
const now = new Date();
console.log(now);

//2- creamos la fecha analizando un string, pero no es una buena practica, aunque si es creada por javascript si es segura
console.log(new Date('aug 02 2020 19:00:00'));
console.log(new Date('December 24, 2020'));

// como en este jemplo
console.log(new Date(account1.movementsDates[0]));

//3- le podemos pasar el año, mes, dia, hora,minutos y segundos en ese orden NOTA el mes lo toma o esta basado desde el cero(por eso nos da noviembre y no octubre)
console.log(new Date(2025, 10, 19, 15, 23, 5));

//lo genial de esto es que javascroipt corrije u incorpora automaticamente el dia en el que cabe, en este caso el dia (30 de noviembre cabe dia sabado)
console.log(new Date(2024, 10, 30, 22, 12, 0));

// el tiempo unix se le conoce por ser usado por muchos sistemas operativos
console.log(new Date(0));
//creamos la misma fecha , pero 3 dias exactos despues(3 de dias, 24 por las horas del dia, 60 por los minutos de una hora , 60 por los segundos de un minuto y 1000 de milisegundos)
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// este numero es importante y lo veremos mas adelante
console.log(3 * 24 * 60 * 60 * 1000);

//* veamos un ejercicio con estas fechas, todas estas fechas que hemos estado creando son un tipo especial de objeto por lo que poseen metodos al igual que las cadenas, array, set ect
const future = new Date(2025, 10, 19, 15, 23, 5);
// este metodo nos devolvera el año de esta fecha
console.log(future.getFullYear());
// este nos devolvera el mes recordar que los meses comienzan del cero
console.log(future.getMonth());
//nos devolvera el dia del mes
console.log(future.getDate());
//nos devolvera el dia de la semana en esta caso (miercoles)
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
// este es un standar internacional para representar una fecha
console.log(future.toISOString());

//la 'MARCA DE TIEMPO'  es el tiempo en milisegundos que han pasado desde el comienzo del tiempo unix
console.log(future.getTime());
console.log(new Date(1763576585000));
//si queremos una marca de tiempo para el tiempo actual de ahora
console.log(Date.now());
//osea han pasado toda esta cantidad de milisegundos desde el 31 de diciembre de 1969
console.log(new Date(1730592121373));

//tambien tenemos el metodo 'set' para cada uno de los metodos que ya acabamos de ver RECORDAR que set establecera configurara una nueva hora GET nos devolvera la hora.

future.setFullYear(2040);
//vemos que al cambiar el año tambien cambia automaticamente el dia
console.log(future);
*/
console.log('calculos con fechas');
/*
// una de las cosas que podemos hacer es relaizar la resta de una fecha con otra, de esta manera podremos saber cuanto tiempo ha pasado entre ambas fechas. esto funciona porque cuando intentamos convertir una fecha a numero esta nos arrojara 'una marca' de tiempo(en milisegundos).

const futuro = new Date(2024, 10, 19, 15, 23);
//vemos que al convertir la fecha a numero nos devolvera una marca de tiempo
console.log(+futuro);

//creamos una funcion que restara 2 fechas dadas y usamos el metodo abs para tomar el valor absoluto osea si da un  numero negativo no importara. RECORDAR en este caso estamos obteniendo los dias(partimos convirtiendo los milisegundos a segundos, luego multiplicamos por 60 por los minutos, luego por sesenta por la hora y por ultimo por 24 (horas en un dia))
const calcDaysPassed = (date1, date2) =>
  Math.abs((date1 - date2) / (1000 * 60 * 60 * 24));

const tiempoEntre = calcDaysPassed(
  new Date(2024, 3, 10),
  new Date(2024, 3, 18)
);
console.log(tiempoEntre);
*/

console.log(
  'internalizacion de fechas y numeros con la API de internalizacion'
);
/*
//# podemos observar que en general esta API de internalizacion posee diferentes metodos que podemos usar ya sea para fechas y numeros asi como otros parametros que podemos incorporar como para la hora.

//observamos que esta funcion que forma parte de la API de fechas acepta 2 parametros.
const opsiones = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', //otra opcion aca es '2-digit'
  year: 'numeric', //tambien esta la opcion de '2-digit'
  weekday: 'long', // tambien esta la opcion short
};

const now = new Date();
console.log(new Intl.DateTimeFormat('es-CL', opsiones).format(now));

// al igual que el metodo para fechas este metodo para numeros tambien recibe puede recibir un segundo parametro
const opsiones2 = {
  style: 'currency', // tambien tenemos 'unit','percent' y currency para el estilo
  unit: 'mile-per-hour', //hay muchas unidades que podemos usar
  currency: 'EUR',
  useGrouping: true, // podemos activar u desactivar los separadores de los numeros
};

const num = 3884764.23;
console.log('US:', new Intl.NumberFormat('en-US', opsiones2).format(num));
console.log('CL:', new Intl.NumberFormat('es-CL', opsiones2).format(num));
console.log('SR:', new Intl.NumberFormat('ar-SY', opsiones2).format(num));
*/
console.log('temporizadores');
/*

//* tenemos 2 tipos de temporizadores el temporizador de 'tiempo de espera' (setTimeout()) y el temporizador de 'intervalo' (setInterval()). el primero (setTimeout) solo se ejecuta 1 vez despues de un tiempo definido, mientras de que segundo (setInterval)seguira funcionando hasta que le indiquemos que se detenga

//osea podemos usar setTimerout para que cierto codigo se ejecute en el futuro segun el tiempo que le indiquemos. esta funcion recibe 2 parametros el primero es una callbBack function y el segundo es la cantidad de tiempo en milesegundos
//IMPORTANTE saber que la ejecusion no se detiene en esta linea, se ejecuta la funcion setTimeout esta registra la funcion callBack para ejecutarle cuando el tiempo se cumpla y luego si hay mas codigo debajo este se ejecutara. en otras palabras la funcion setTimeout seguira esperando en segundo plano para ejecutar la funcion callBack este mecanismo se le conoce como  javascript ASINCRONICO
setTimeout(() => console.log('tu pízza esta lista🍕'), 3000);
console.log('Esperando...');

//ahora como no somos nosotros quien llama a la funcion callBack no podemos pasarle argumentos, pero afortunadamente la funcion setTimeout() tiene una  solucion para esto. todo lo que le pasemos despues del tiempo seran los parametros de la funcion callBack, por lo que nos permite hacer esto

const acompañamientos = ['bebida cola', 'palitos de ajo'];
const pizzaTimer = setTimeout(
  (item1, item2) =>
    console.log(`esta lista tu pizza 🍕 con ${item1} y ${item2}`),
  4000,
  ...acompañamientos
);
// otra cosa que podemos hacer es detener la ejecusion de la funcion setTimeout con el metodo 'clearTimeout'. en este ejemplo si 'bebida cola' esta en el array se borrara si no la funcion se ejecutra normalmente despues de 4 segundos
if (acompañamientos.includes('bebida cola')) clearTimeout(pizzaTimer);

//* beamos ahora el otro temporizador 'setInterval()'. al igual que setTimeout tambien recibe 2 parametros una funcion callBack y el tiempo que queremos que se repita la ejecusion de de la funcion
// que pasa si quiero ejecutar una funcion cada cierto tiempo, setTimeout claramente no nos sirve porque la funcion callBack solo se ejecuta una vez. aca es donde entra en juego setInterval().

// queremos ejecutar esta funcion cada 1 segundo, lo que nos dara la fecha
//setInterval(() => {
//  const now = new Date();
//  console.log(now);
//}, 3000);

// ejercicio de crear un reloj

// const opsiones2 = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long', //otra opcion aca es '2-digit'
//   year: 'numeric', //tambien esta la opcion de '2-digit'
//   weekday: 'long', // tambien esta la opcion short
// };
// setInterval(function () {
//   const hora = new Date();
//   console.log(new Intl.DateTimeFormat('es-CL', opsiones2).format(hora));
// }, 5000);
*/
