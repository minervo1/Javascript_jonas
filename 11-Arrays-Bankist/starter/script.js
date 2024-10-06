'use strict';
/*
/////////////////////////////////////////////////
//*el metodo SLICE extraera los elementos del array segun sus parametros de inicio y final(no incluido) devolviendo un nuevo array
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr);
//si definimos los parametros negativos comenzara a contar desde el final(no incluye el cero) por lo que -1 siempre sera el ultimo elemento del array
console.log(arr.slice(-1));
console.log(arr.slice(-3, -1));
//en otras palabras podemos realizar una copia superficial de un array con este metodo
console.log(arr.slice());
//lo mismo realizamos anteriormente con el operador de propagacion
console.log([...arr]);
console.log('-------------------------------');

//*el metodo SPLICE funciona casi de la misma manera que slice, la gran diferencia es que SPLICE muta el array original y slice crea un array nuevo
arr.splice(-1);
console.log(arr);
//el segundo parametro de splice es la cantidad de elementos a eliminar
arr.splice(1, 2);
console.log(arr);
//y el ultimo parametro es el elemento que se agregara en reemplazo del elemento eliminado
arr.splice(0, 1, 4);
console.log(arr);
console.log('-----------------------------------');

//*el metodo REVERSE invierte el array mutando el array original
const arr2 = ['f', 'g', 'h', 'i', 'j'];
console.log(arr2.reverse());

//* el metodo CONCAT une 2 array en un nuevo array
const letras = arr.concat(arr2);
console.log(letras);
// ya haviamos hecho esto de otra manera la cual tampoco muta el array original
console.log([...arr, ...arr2]);
//* el metodo JOIN podemos separar cada uno de sus elementos atravez de un caracter devolviendonos un string de este resultado
console.log(letras.join(' - '));

//* desde el 2022 tenemos un nuevo metodo para obtener los elementos de una array y este es 'AT'
const array = [23, 11, 33];
// esta es una manera de obtener el elemento
console.log(array[0]);
// esta es con el nuevo metodo
console.log(array.at(0));

//este metodo puede no parecer tan util, pero en ciertas situaciones si lo es
//esta es una manera de obtener el ultimo elemento de un array
console.log(array[array.length - 1]);
//esta es otra manera de obtener el ultimo elemento de un array
console.log(array.slice(-1)[0]);
//pero con el nuevo metodo es mas falcil obtenerlo
console.log(array.at(-1));

console.log('CICLO FOREACH');
const movimientos = [200, 450, -400, 3000, -650, -130, 70, 1300];
//este ciclo es muy parecido al ciclo forOf, pero para muchos es mas simple de usar. veamos primero como recorremos este array con forOf
for (const movimiento of movimientos) {
  if (movimiento > 0) {
    console.log(`sus depositos: ${movimiento}`);
  } else {
    console.log(`sus retiros : ${Math.abs(movimiento)}`);
  }
}
//ahora veamos el mismo ejercicio con el ciclo forEach, este metodo recibe una callBack como parametro, el funcionamiento es el siguiente por cada elemento del array se ejecuta la funcion
movimientos.forEach(function (movimiento) {
  if (movimiento > 0) {
    console.log(`sus depositos: ${movimiento}`);
  } else {
    console.log(`sus retiros : ${Math.abs(movimiento)}`);
  }
});
//NOTA el metodo 'abs' utilizado es para eliminar el simbolo del numero
//NOTA  otra diferencia entre estos 2 ciclos es que en el ciclo forEach las declaraciones 'continue' y 'break' no funcionan.
//veamos otro ejemplo de este nuevo cliclo, recordemos como podemos accder al indice con el ciclo forOf
for (const [i, movimiento] of movimientos.entries()) {
  if (movimiento > 0) {
    console.log(`movimiento numero ${i + 1} deposito: ${movimiento}`);
  } else {
    console.log(`movimiento numero ${i + 1} retiro : ${Math.abs(movimiento)}`);
  }
}
//ahora veamos como podemos acceder al indice con forEach, debemos entender que es el metodo foeEach el que llama a la funcion por cada uno de los elementos del array, pero el elemento no es lo unico que se le pasa a la funcion de hecho tambien se le pasa el indice y el array completo, por lo tanto podemos especificar estos elementos en los parametros de la funcion. ahora el orden es el siguiente el primer parametro siempre sera el elemento, el segundo sera el indice y el tercer parametro sera el array propiamente tal
movimientos.forEach(function (elemento, index, array) {
  if (elemento > 0) {
    console.log(`movimiento n° ${index + 1} es un deposito de ${elemento}`);
  } else {
    console.log(
      `movimiento n° ${index + 1} es un retiro de ${Math.abs(elemento)}`
    );
  }
});

//* veamos ahora como este ciclo trabaja con MAPAS Y SETS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//entonces en este mapa podemos usar forEach, los parametros seran los siguientes: el primero sera el elemento actual, el segundo sera la llave y el tercero sera el mapa propiamente tal
currencies.forEach(function (valor, llave, mapa) {
  console.log(`${llave}: ${valor}`);
});

// lo mismo lo hacemos con los sets, observamos que la sintaxis es igual a la de los mapas, pero los set no poseen indice ni tampoco llaves es por eso que usamos el signo '_' es una convencion y se usar para decir que una variable es innecesaria, en este caso solo el primer parametro(elemento actual) es el que necesitamos.
const currenciesUniques = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUniques.forEach(function (valor, _, map) {
  console.log(`${valor}`);
});
*/
/*
//* METODO MAP
//este metodo funciona similar al ciclo forEach ya que por cada elemento del array llamara a la funcion, ahora la ddiferencia es que estos resultados se almacenaran en un nuevo array devuelto, ademas al igual que forEach, recibe 3 parametros (elemento actual, , indice , array)
//# inportante en este metodo tambien debemos retornar el valor que tendran los elementos del nuevo array para que la iteracion siga realizando el ciclo
const transacciones = [200, 450, -400, 3000, -650, -130, 70, 1300];

//en este ejemplo convertimos todas las transacciones a moneda nacional
const conversion = 1.1;
const transaccionesNacional = transacciones.map(movi => movi * conversion);
console.log(transaccionesNacional);
console.log(transacciones);

//realizamos lo  mismo con el ciclo forOf. para obtener un nuevo array este deveremos crearlo primero NOTA ciertamente es otra manera de hacerlo, pero se sugiere el uso de metodos para resolver estos problemas (programasion funcional)
const nuevoArrray = [];
for (const elemento of transacciones) {
  nuevoArrray.push(elemento * conversion);
  console.log(nuevoArrray);
}

//veamos otro ejemplo ahora para retornar una cadena por lo que usaremos sus otros parametros
const descriptionMov = transacciones.map((movi, i, arr) => {
  const trasacc = movi > 0 ? 'deposito' : 'retiro';
  return `movimiento n° ${i + 1} es un ${trasacc} de ${Math.abs(movi)}`;
});
console.log(descriptionMov);
*/
/*
//* METODO FILTER
//este metodo nos permite filtrar elementos que cumplan con cierta condicion devolviendonos esos elementos, en otras palabras obtendremos un nuevo array solo con los elementos que cumplan con cierta condicion o criterio (sean true).
// y al igual que con forEach,map este recibe 3 parameotros en el mismo orden(elemento actual, indice, array).
//# al igual que con el metodo map y reduce este tambien devemos devolver el valor de la condicion
const transacciones1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const depositos = transacciones1.filter(function (mov) {
  //solo los valores 'true' seran retornados osea todos los elementos mayores a 0
  return mov > 0;
});
console.log(depositos);

//realizamos lo mismo con el ciclo forOf, como sabemos debemos crear un array vacio nosotros mismos
const depositosFor = [];
for (const ele of transacciones1) {
  if (ele > 0) depositosFor.push(ele);
}
console.log(depositosFor);

//realizamos llo mismo ahora para los retiros
const retiros = transacciones1.filter(movi => movi < 0);
console.log(retiros);
*/
/*
//* METODO REDUCE
// este metodo nos permite reducir todo un array de elementos a un solo elemento, este metodo recibe 2 parametros una funcion y el valor inicial del acumulador.  ahora la funcion recibe a su vez 4 parametros el primero sera el acumulador que se menciono antes, el elemento actual, el indice y por ultimo el array.
const transacciones2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
//el acumulador sera el valor final devuelto, por lo que debemos agregar el elemento atual a este acumulador, asi este sera la acumulacion de todos los elementos previos, y con el segundo parametro del metodo le decimos que el acumulador debe comenzar en 0
const suma = transacciones2.reduce((acu, valor, i) => {
  console.log(
    `iteracion n° ${i + 1} valor: ${valor} acumulador: ${acu + valor}`
  );
  return acu + valor;
}, 0);
console.log(suma);
//# es importante saber que en cada iteracion devemos devolver este acumulador de esta manera podra seguir disponible para la siguiente iteracion. y otra cosa importante es que tambien podemos usar este metodo para cadenas y objetos.

//realizamos lo mismo, ahora con el ciclo forOf, en neste caso devemos crear una variable que valla acumulando la suma de los elementos
let suma1 = 0;
for (const valor of transacciones2) {
  suma1 += valor;
}
console.log(suma1);

// veamos otro ejemplo para que veamos que no solo podemos hacer sumas, en ete ejemplo queremos obtener el maximo valor del array.
//# en este ejemplo debemos tener presente que cuando retornamos el valor este sera el nuevo valor del acumulador, en otras palabras deberemos retornar algo y el valor retornado siempre sera el acumulador, o el valor que tomara el acumulador.
const max = transacciones2.reduce(function (acu, valor) {
  if (acu > valor) {
    return acu;
  } else {
    return valor;
  }
}, transacciones2[0]);
console.log(max);
*/
/*
// otras de las cosas que podemos hacer con estos 3 metodos al igual que con cualquier otro metodo que retorne un nuevo array es concatenarlos.
//supongamos que queremos solo los depositos y estos convertidos a dolar y sumados.
//# otra cosa que podemos hacer es revisar el metodo anterior si es que funciono de manera correcta y esto lo hacemos atravez del array al que podemos acceder a travez de el metodo siguiente. como se aprecia en este ejemplo.
const movimientos = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1; //conversion de euros a dolar
const totalDepositoUsd = movimientos
  .filter(ele => ele > 0) //suponiendo que cometimos un error en esta linea con este metodo
  .map((ele, i, arra) => {
    console.log(arra); //lo podemos revisar en esta otra linea atravez del array, que al final es el mismo ya que se retorna
    return ele * euroToUsd;
  })
  .reduce((acu, ele) => acu + ele, 0);
console.log(totalDepositoUsd);
//INPORTANTE de todas formas debemos considerar no abusar de esto ya que con aplicasiones grandes el encadenamiento podria traer algunos problemas, sobre sobre todo con metodos que mutan la matriz original como 'splice' o 'reverse'.
*/

///////////DATOS DE LA APLICASION//////////////////////////////////////////////
/////////////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
// BANKIST APP
//*reemplazamos los datos fijos del html por los datos dinamicos de nuestro objeto
const displayMovements = function (movements) {
  //lo primero es limpiar nuestro contenedor de movimientos, sacando los movimientos que estan fijos en el html
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    //la variable type la creamos separada ya que la necesitaremos en 2 lugares diferentes
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    //copiamos y pegamos el codigo correspondiente a la seccion de movimientos(es la mejor manera de modificar nuestro html de forma dinamica)
    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
                    <div class="movements__value">${mov}</div>
                  </div>;`;
    //insertamos nuestra plantilla literal en la pagina (en nuestro html reemplazando el codigo que nos trajimos(const html))
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//displayMovements(account1.movements);

//* calculamos y mostramos el resultado de la suma de todos los movimientos en la interfaz
const calcDisplayBalance = function (movimientos) {
  const balance = movimientos.reduce((acum, elem) => acum + elem);
  labelBalance.textContent = `${balance} €`;
};
//calcDisplayBalance(account1.movements);

//* calculamos y mostramos la suma de los  depositos,retiros Y intereses. basicamente lo que esta en el (div class 'sumary')
//ahora que tenemos mas avanzada la aplicasion debemos modificar esta funcion para poder aplicar los intereses correspondientes a cada cuenta y para eso debemos poder acceder a la cuenta completa
const calcDisplaySumary = function (cuenta) {
  const ingresos = cuenta.movements
    .filter(ele => ele > 0)
    .reduce((acu, ele, _, arra) => acu + ele, 0);
  labelSumIn.textContent = `${ingresos} €`;
  const egresos = cuenta.movements
    .filter(ele => ele < 0)
    .reduce((acu, ele) => acu + ele, 0);
  labelSumOut.textContent = `${Math.abs(egresos)} €`;
  const intereses = cuenta.movements
    .filter(ele => ele > 0)
    .map(ele => ele * cuenta.interestRate)
    .filter((ele, i, arra) => ele >= 1)
    .reduce((acu, ele) => acu + ele);
  labelSumInterest.textContent = `${intereses} €`;
};
//calcDisplaySumary(account1.movements);
//*creamos iniciales basadas en el nombre de cada cuenta para poder iniciar sesion
const createUserNames = function (cuentas) {
  //como lo que nesecitamos es solamente recorrer el array y no crear otro usamos forEach
  cuentas.forEach(function (cuen) {
    //creamos una nueva propiedad en cada objeto cuentas(account1..2...) esta tendra las iniciales de cada nombre. para eso dejamos todas en minusculas, luego dividimos cada nombre por sus espacios vaciuos, luego creamos un nuevo array con el indice de cada palabra separada y por ultimo unimos estas letras
    cuen.userName = cuen.owner
      .toLowerCase()
      .split(' ')
      .map(letra => letra[0])
      .join('');
  });
};
//le pasamos el arrays 'accounts' ya que con el ciclo forEach vamos a recorrer cada una de estas
createUserNames(accounts);
//para ver si esta funcion esta funcionando
//console.log(accounts);

//* implementamos el boton del Login
btnLogin.addEventListener('click', function (eve) {
  //un boton dentro de un formulario tiene un comportamiento predeterminado que es enviarlo provocando que la pagina se recargue, por lo que debemos detener este comportamiento evitando que se envie el formulario para poder trabajar con este boton con la consola
  //NOTA otra accion predeterminada la tienen los input. actuan como botones al momento de hacer enter en ellos,
  eve.preventDefault();
  //variable que almacenara lo ingresado en el input
  let currentAccount;
  //encontramos, comparamos y almacenamos lo ingresado en el 'input', pero debemos tener esta informacion disponible para otras acciones a si que la guardamos fuera de la funcion
  currentAccount = accounts.find(
    cuenta => cuenta.userName === inputLoginUsername.value
  );
  //si iniciamos sesion con un usuario que no exista nos arroja un error ya que 'FIND' al no encontrar coinsidencia arrijara un 'undefined' y en esta sentencia al momento de leer 'currentAccount' que es undefined arrojara el error. ahora debemos solucionar esto evitando que aparesca este error en la consola y para eso usamos 'el encadenamiento opcional (?)' RECORDAR este operador evitara que '.pin' se ejecute si es que lo que esta antes de el es falso evitando el error.
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //mostramos la interfaz al usuario correspondiente, en este caso mostramos solo el primer nombre
    labelWelcome.textContent = `Bienvenido ${
      currentAccount.owner.split(' ')[0]
    }`;
    //debemos hacer que la opacidad vuelba al 100% al momento de que las credenciales se ingresen correctamente
    containerApp.style.opacity = 100;
    //limpiamos los campos del input y le quitamos el foco
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //mostramos los movimientos
    displayMovements(currentAccount.movements);
    //mostramos la suma. ahora aca necesitamos pasarle la cuentya completa
    calcDisplaySumary(currentAccount);
    // mostramos el promedio
    calcDisplayBalance(currentAccount.movements);
  }
});
////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////////////////////////////////
/*
//# acabamos de aprender 3 metodos muy inportantes(map, filter, reduce), pero no son  los unicos ahora prenderemos otro metodo muy inportante que es 'FIND'.
//al igual que los metodos anteriores este recorrera el array y aplicara una funcion a cada elemento del array devolviendonos el elemento que satisfaga la condicion de la funcion, ahora la diferencia con filter es que este metodo no nos devolvera un nuevo array si no que el primer elemento que satisfaga esta condicion, RECORDAR que filter nos devolvera todos los elementos que satisfagan la condicion en un nuevo array
const movimientos4 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const elemento = movimientos4.find(ele => ele < 0);
console.log(elemento);
//veamos un ejemplo mas imteresante, en este ejemplo trabajaremos con los objetos de nuestro array de nuestro proyecto

//vemos que podemos obtener el objeto especifico esto es muy poderoso
const cuentas = accounts.find(cuenta => cuenta.owner === 'Jessica Davis');
console.log(cuentas);

//realizamos el mismo ejercicio, pero ahora con un forof
for (const cuenta of accounts) {
  if (cuenta.owner === 'Jessica Davis') {
    console.log(cuenta);
  }
}
*/
