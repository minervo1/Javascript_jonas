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
//para implementar el boton sort(ordenar) agregaremos un segundo parametro que determinara el orden segun sea true o false. lo establecemos por defecto false ya que en una primera instancia no queremos ordenar solo ordenaremos cuando se haga click solo hay pasara a ser true.
const displayMovements = function (movements, sort = false) {
  //primero limpiamos nuestro contenedor de movimientos, sacando los movimientos que estan fijos en el html
  containerMovements.innerHTML = '';

  //si sort es verdadero se creara una copia y ordenara los movimientos ascendentemente, si es false solo mostrara los movimientos tal como estan en el array
  //IMPORTANTE la copia es inportante porque no queremos cambiar el array original solo mostrar un array ordenado, si modificamos el array original este no volvera a su estado anterior asi que no funcionaria el boton que basicamente cambia de ordenado a natural y viseversa.
  const moviSort = sort ? movements.slice().sort((a, b) => a - b) : movements;
  moviSort.forEach((mov, i) => {
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
const calcDisplayBalance = function (cuenta) {
  //creamos una nueva propiedad 'balance 'en este caso en las cuentas que corresponda a cada objeto
  cuenta.balance = cuenta.movements.reduce((acum, elem) => acum + elem);
  labelBalance.textContent = `${cuenta.balance} €`;
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

//*esta funcion reemplazara el llamado individual que teniamos y la ejecutaremos cada vez que se necesite
const updateUI = function (cuentaAc) {
  //mostramos los movimientos
  displayMovements(cuentaAc.movements);
  //mostramos la suma. ahora aca necesitamos pasarle la cuenta completa actual y no solo los movimientos
  calcDisplaySumary(cuentaAc);
  // mostramos el promedio, aqui tambien necesitamos pasar la cuenta completa
  calcDisplayBalance(cuentaAc);
};

//creamos esta variable que es la cuenta actual(que almacenara lo ingresado en el input) en el contexto global porque debe estar disponible siempre ya que la usaremos en muchas partes del codigo
let currentAccount;

//* implementamos el boton del Login
btnLogin.addEventListener('click', function (eve) {
  //un boton dentro de un formulario tiene un comportamiento predeterminado que es enviarlo provocando que la pagina se recargue, por lo que debemos detener este comportamiento evitando que se envie el formulario para poder trabajar con este boton con la consola
  //NOTA otra accion predeterminada la tienen los input. actuan como botones al momento de hacer enter en ellos,
  eve.preventDefault();

  //encontramos, comparamos y almacenamos lo ingresado en el 'input', pero debemos tener esta informacion disponible para otras acciones a si que la guardamos fuera de la funcion
  currentAccount = accounts.find(
    cuenta => cuenta.userName === inputLoginUsername.value
  );
  //si iniciamos sesion con un usuario que no exista nos arroja un error ya que 'FIND' al no encontrar coinsidencia arrojara un 'undefined' y en esta sentencia al momento de leer 'currentAccount' que es undefined arrojara el error. ahora debemos solucionar esto evitando que aparesca este error en la consola y para eso usamos 'el encadenamiento opcional (?)' RECORDAR este operador evitara que '.pin' se ejecute si es que lo que esta antes de el es falso evitando el error.
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
    updateUI(currentAccount);
  }
});
//* implementamos el boton para trasferir dinero
btnTransfer.addEventListener('click', function (eve) {
  eve.preventDefault();
  const amount = Number(inputTransferAmount.value);
  //le transferimos a la cuenta que sea igual al 'userName' ingresado en el input
  const reciverAcc = accounts.find(
    cuenta => cuenta.userName === inputTransferTo.value
  );
  console.log(amount, reciverAcc);

  //con el 'encadenamiento opcional' verificamos si la cuenta que recivira el dinero existe. si existe todo seguira normal, pero si no establecera todo como 'undefined' y todo lo que este despues de operador no se ejecutara RECORDAR que esto tambien podriamos hacerlo con 'amount &&'. ERROR de hecho si vamos a utilizar esta ultima sentencia ('amount &&') porque al escribir cualquier nombre la transferencia se realiza igual esto se debe a que como la cuenta que recibe el dinero no existe el 'encadenamiento opcional' establece hasta ese punto todo como undefined y undefined si es distinto de 'currentAccount.userName' por lo tanto si entrara en el if
  if (
    amount > 0 &&
    reciverAcc && // si la cuenta que recive el dinero existe
    currentAccount.balance >= amount &&
    reciverAcc?.userName !== currentAccount.userName
  ) {
    //como las sumas y las restas ya estan funcionando solamente debemos agregar estos montos a cada una de las cuentas
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
  // por ultimo limpiamos los input
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
  //NOTA esta linea de codigo tambien es lo mismo de hecho ya la tengo escrita asi en otra parte del codigo
  //inputTransferAmount.value = inputTransferTo.value = '';
});
//* implementamos los prestamos
btnLoan.addEventListener('click', function (eve) {
  eve.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//* implementamos el cierre de la cuenta
btnClose.addEventListener('click', function (eve) {
  eve.preventDefault();
  const userClose = inputCloseUsername.value;
  const userPin = Number(inputClosePin.value);
  if (currentAccount.userName === userClose && currentAccount.pin === userPin) {
    //buscamos y almacenamos el indice de la cuenta que queremos eliminar
    const index = accounts.findIndex(
      cuenta => cuenta.userName === currentAccount.userName
    );
    //eliminamos la cuenta
    accounts.splice(index, 1);
    //una vez eliminada la cuenta procedemos a quitar la opasidad para dejar dever su cuenta
    containerApp.style.opacity = 0;
    //por ultimo limpiamos los campos del input
    inputCloseUsername.value = inputClosePin.value = '';
  }
});
//esta variable necesitamos preservarla es por eso que la creamos afuera, si la creamos dentro de la funcion esta se creara cada vez que se haga click en el boton
let sorted = false; //es false desde el comienzo porque en el comienzo no esta ordanado el array
//* implementamos el boton para ordenar los movimientos
btnSort.addEventListener('click', function (eve) {
  eve.preventDefault();
  //al llamar a la funcion es cuando le pasamos el segundo argumento que ocupara esta funcion
  displayMovements(currentAccount.movements, !sorted);
  // esto es importante si no la variable sorted nunca cambiaria, basicamente lo que estamos haciendo es cuando sorted sea true cambie a false y si es false cambie a true. basicamennte sea lo opuesto a lo que es ahora.
  sorted = !sorted;
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
/*
console.log('INCLUDE, SOME Y EVERY');
//ahora veremos los ultimos metodos por aprender en esta seccion que nos ayudaran a terminar nuestra aplicasion

//con este metodo podemos saber si existe cierto elemento en el array, inportante esto es una igualdad
console.log(account1.movements);
console.log(account1.movements.includes(-130));

//a diferencia de este otro metodo donde podremos darle una condicion para buscar alguna coincidencia
const cualquierM = account1.movements.some(mov => mov > 0);
console.log(cualquierM);

// usar INCLUDES  es como realizar esto con SOME, lo cual no tiene mucho sentido, por eso existe INCLUDES
console.log(account1.movements.some(mov => mov === -130));

//veamos el metodo EVERY que es como el primo de SOME a diferencia de SOME este nos devolvera un bboleano si todos los elementos satisfacen la dondicion dada.
console.log(account1.movements.every(mov => mov > 0));

//veamos ahora la cuenta 4 que posee solo movimientos positivos
console.log(account4.movements.every(mov => mov > 0));

//veamos lo ultimo, hasta ahora todas las funciones de los metodos los hemos creado directamente, pero eso no es necesario podemos crear esta funcion separada y luego pasarsela al metodo como funcion callBack. de esta menera podemos reutilizar esta si es requerida en alguna ora parte.
const depositos = mov => mov > 0;
console.log(account4.movements.every(depositos));
*/
/*
console.log('FLAP Y FLAPMAP');
// basicamente lo que hace este metodo FLAP es aplanar un array en otras palabras quita los array anidados devolviendonos un nuevo array con todos los elementos individuales.
const arr = [[1, 2, 3], [4, 9, 5, 6], 7, 8, 9];
console.log(arr.flat());

//por defecto la profundidad es 1 osea que quitara solo 1 anidado si tenemos mas de un array anidado nos aplanara el primero y el otro lo dejara asi tal cual como se muestra en el ejemplo. ahora podemos especificar la profundiad del aplanamiento para que aplane todo y nos devuelva los elementos individuales tal como en el ejemplo.
const otro = [[1, 2, 3], [4, [9], 5, 6], 7, 8, 9];
console.log(otro.flat(2));

//veamos un ejemplo mas util con este metodo, que pasa si el banco quiere sumar todos los movimientos de todas las cuentas para tener un saldo total.

//primero obtengo en un array nuevo con todos los movimientos de todas las cuentas, el resultado de esto sera un array con los 4 array(movimientos) de las cuentas
const movimientosCuestas = accounts.map(acc => acc.movements);
console.log(movimientosCuestas);

//aplanamos el array anidado anterior
const movimientos = movimientosCuestas.flat();
console.log(movimientos);

//por ultimo sumamos todo
const sumaTotal = movimientos.reduce((acu, mov) => acu + mov, 0);
console.log(sumaTotal);

//como sabemos podemos encadenar estos metodos ya que todos devuelven un nuevo array menos el REDUDE por eso lo dejamos para el final.
const todosLosMovimientos = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acu, mov) => acu + mov, 0);
console.log(todosLosMovimientos);

//NOTA usar map y luego flat es una operacion muy recurrente en javascript, es por esa razon que este metodo se creo porque es mejor usarlo ya que es mejor para el rendiemiento.

//basicamente se ve igual que el metodo map, de hecho nesecita lo mismo que el metodo map. solamente que internamente realiza un aplanamiento comun osea de profundidad 1
const todosLosMovimientos2 = accounts
  .flatMap(cuenta => cuenta.movements)
  .reduce((acu, mov) => acu + mov, 0);
console.log(todosLosMovimientos2);
*/
/*
console.log('ORDENANDO ARRAYS (SORT)');
// este metodo 'sort' lo que realiza por defecto es ordenar alfabetica segun la tabla 'unicode', pero para hacerlo mas facil de entender sort ordenara alfabeticamente los string. ahora para ordenar numeros este metodo los tomara como si fuesen string por lo que el resultado no sera el esperado. afortunadamente este metodo recibe una calBack function y en esta podemos especificar como queremos oredenar el array.
//# lo que debemos tener en cuenta es que esta funcion recibe 2 parametros y estos siempre seran el (valor actual, valor siguiente) y los comparara, si el resultado de la comparacion es un valor < a cero el valor actual estara antes que el valor siguiente, pero si el resultado de la comparacon es un valor > a cero sera el valor siguiente el que estara antes que el valor actual.

//con los string no hay problemas
const dueños = ['jonas', 'zach', 'adam', 'martha'];
console.log(dueños.sort());
//recordar que este metodo muta la matriz original
console.log(dueños);

//pero cuando son numeros los que queremos ordenar, el resultado no es lo que podriamos esperar, basicamente tomo cada uno de los numeros por separado como si fuesen string y los ordeno alfabeticamente.
const movimientos5 = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movimientos5.sort());

// pero como se menciono podemos pasarle una funcion callback esta como se explico tiene un comportamiento especifico con respecto a los 2 parametros que recibe que debemos tener en cuenta para que el orden que queramos de resultado.
const uno = movimientos5.sort((a, b) => {
  //#si retornamos un valor < 0 = a, b (mantiene el orden)
  //#si retornamos un valor > 0 = b, a (cambia el orden)
  // si queremos un orden ascendente solo debemos comparar 2 valores y retornar segun quereamos oredenar
  if (a > b) return 1;
  else if (a < b) return -1;
});
console.log(uno);

const dos = movimientos5.sort((a, b) => {
  //si queremos ordenar descendentemente, de mayor a menor
  if (a > b) return -1;
  else if (a < b) return 1;
});
console.log(dos);

//# veamos como podemos mejorar esto analizandolo matematicamte. si a es > b entonces a -b siempre sera un numero positivo. si a es < b entonces a - b siempre sera un numero negativo, entonces pódemos hacer lo siguiente
const tres = movimientos5.sort((a, b) => b - a);
console.log(tres);
*/
console.log('LLENANDO ARRAY MEDIANTE PROGRAMASION');
/*
//hasta ahora hemos estado creando arrays y llenandolos manualmente
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//pero podemos llenar un array mediante programasion, si le pasamos un solo argumento creando el array de esta manera (funcion constructora) creara un array vacio con una longitud equivalente al valor pasado. en otras palabras un array con 7 espacios vacios.
const x = new Array(7);
console.log(x);

//ahora esta particularidad de la funcion constructora puede llevar a errores si no se presta atencion, de todas maneras este array es casi inservible no podemos usarlo para casi nada y digo casi porque hay un solo metodo que podemos llamar con este array y ese el FILL muy similar a slice

//si le pasamos un solo valor llenara el array completo con ese valor
x.fill(1);
console.log(x);

//pero este array puede recibir 3 parametros el valor con cual se llenara, un inicio de donde comenzara a llenar y un final(no incluido) hasta donde se llenara. como se aprecio en el ejercicio anterior si se omite el inicio y el final estos seran por defecto cero y el ultimo
console.log(array.fill(2, 3, 4));

//otra forma de llenar estos array vacios es con el metodo 'FROM'. simpre usando la funcion constructora, el metodo from recibe 3 parametros el primero simpre sera un objeto iterable, el segundo sera una funcion map y la tercera y opcional un parametro que hara referencia a cada elemento del array como si fuera THIS.
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

//ahora como este metodo recibe una funcion podremos llenar no solo con numeros repetidos el array RECORDAR que el guion bajo es para decirle a java que no tome en cuenta el primer parametro
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//ARRAY.FROM fue introducido para transformar estructuras de datos iterables(maps, string, sets, NodeList) a arrays.de hecho esta estructura NodeList es uno de los casos de uso mas frecuente de Array.from. ya que esta estructura no posee muchos de los metodos que los array poseen.

//EJEMPLO supongamos que no tenemos en ninguna parte de nuestro codigo la lista de los movimientos. solo estan en la interfaz y queremos sumarlos para obtener el total. pues tendriamos que usar

labelBalance.addEventListener('click', function () {
  //es de un querySelector por ejemplo el que obtenemos una NodeList la cual se la pasamos como primer parametro y como segundo parametro le pasamos una funcion, de esta manera convertimos esta nodeLista a un array y ya siemdo array podemos usar el metodo replace
  const movimientosUi = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movimientosUi);
});

//ahora esta es otro forma de crear un array de una NodeList ,pero tendriamos que utilizar una funcion aparte NOTA solo obtenemos 2 elementos estos son los elementos predeterminados que estan en el html debemos usar un listener como en el ejemplo de arriba para obtener los elementos de la interfaz. en cualquier cosa USAR ARR5AY.FROM ES UNA MEJOR OPCION EN ESTOPS CASOS.
const movimientosUi2 = [...document.querySelectorAll('.movements__value')];
console.log(movimientosUi2);
*/
//*por ultimno repasaremos algunos metodos vistos en esta seccion

//1-calculemos cual es la suma de los todos los depositos que tenemos en nuestra aplicasion
const sumaDepositosBanco = accounts
  .map(mov => mov.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((acumu, ele) => acumu + ele, 0);
console.log(sumaDepositosBanco);

//2- calculemos cuantos depositos hay que sean iguales o superiores a 1000
const depoIgualSupe1000 = accounts
  .flatMap(mov => mov.movements)
  .filter(mov => mov >= 1000).length;
console.log(depoIgualSupe1000);

//esta es otra manera de realizar el mismo ejercicio anterior utilizando el metodo REDUCE, tener en cuenta que cumu + 1 = acumu++, pero hay un pequeño problema con esto ya que este operador devuelve el valor anterior(previo al incremento). afortunadamente podemos usar el operador ++acumu que nos devolvera inmediatamente el valor incrementado
const depoIgualSupe10002 = accounts
  .flatMap(mov => mov.movements)
  .reduce((acumu, ele) => (ele >= 1000 ? ++acumu : acumu), 0);
console.log(depoIgualSupe10002);

//veamos un ejemplo de este operador, vemos que aumenta en 1, pero devuelve el valor anterior al incremento.devemos volver a llamarlo para ver el valor aumentado. que es lo que huviera pasado si lo utilizamos dandonos un resultado erroneo.
let a = 10;
console.log(a++);
console.log(a);

//3-en este ejercicio veremos que el valor final al reducir los valores con el metodo 'reduce' puede ser cualquier o casi cualquier cosa en este ejemplo creamos un 'objeto final' con la suma total de los depositos y los retiros
const sumasDepReti = accounts
  .flatMap(ele => ele.movements)
  .reduce(
    (acumu, ele) => {
      ele > 0 ? (acumu.depositos += ele) : (acumu.retiros += ele);
      //importante con este metodo reduce siempre debemos retornar el acumulador en este caso debe ser explisito
      return acumu;
    },
    //importante entender que en este ejemplo el acumulador es el objeto que hemos creado
    { depositos: 0, retiros: 0 }
  );
console.log(sumasDepReti);

//veamos como podemos mejorar este codigo un poco mas, aplicando cosas que ya hemos visto, desctructuramos dentro de un objeto, porque es de un objeto donde sacamos los valores que tomaran estas 2 variables
const { depositos, retiros } = accounts
  .flatMap(ele => ele.movements)
  .reduce(
    (acumu, ele) => {
      //RECORDAR que si queremos usar una variable como una propiedad debemos usar los corchetes
      acumu[ele > 0 ? 'depositos' : 'retiros'] += ele;
      return acumu;
    },
    { depositos: 0, retiros: 0 }
  );
console.log(depositos, retiros);

//4-en este ejercicio creamos una funcion que tranforme cualquier cadena en un caso de titulo osea que todas las primeras letras de una palabra esten en mayuscula con algunas execciones.
const converTitleCase = function (titulo) {
  const capitalizacion = str => str[0].toUpperCase() + str.slice(1);
  //en este tipo de ejercicios siempre es buena practica tener en un array las execciones, en este ejemplo usamos algunas, pero son muchas mas.
  const expctions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  //lo primero a realizar es convertir todo a minusculas, para luego separar cada una de estas palabras. de esta manera poder trabajar con ellas devolviendo un array con cada una de ellas con la primera letra en mayusculas ignorando las expsiones. para finalmente unir todas. NOTA para el problema de la palabra 'and' lo que tenemos que hacer es aplicar la capitalizacion cuando retornemos el titulo, por lo que crearemos en una funcion separada esta logica.
  const tituloCase = titulo
    .toLowerCase()
    .split(' ')
    .map(palabra =>
      expctions.includes(palabra) ? palabra : capitalizacion(palabra)
    )

    .join(' ');
  return capitalizacion(tituloCase);
};

console.log(converTitleCase('esta es una cadena a considerar'));
console.log(converTitleCase('este es otro TITULO un poco mas largo'));
console.log(converTitleCase('this is a another title but not too long'));
//con la palabra 'and' tenemos un problema ya que and si la queremos con mayuscula(And), pero esta dentro de las expsiones
console.log(converTitleCase('and here is another title'));
