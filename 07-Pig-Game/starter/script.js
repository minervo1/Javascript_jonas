'use strict';

//seleccionamos de una vez todos los elementos que vamos a utilizar
//# la clase (player--0) la ocuparemos para luego reemplasar el 0 u 1 por el jugador activo
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
//cuando trabajamos con id tenemos un metodo especial el cual no necesita el selector(. o #) ya que trabaja directamente con el nombre
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//declaramos estas variables afuera ya que si estan dentro de la funcion solo estaran disponibles alli. y de esta manera estan disponibles para todo el proyecto.
let scores, currentScore, activePlayer, playing;

//# esta funcion es importante ya que aca restablecemos todos los valores a 0 tanto para lo que el usuario ve como para nosotros en nuestro codigo, esta funcion la ocuparemos cada vez que que se comienze un nuevo juego y estos escenarios pueden ser al iniciar una nueva partida o cuando abrimos el juego para jugar.
//debemos utilizar la propiiedad 'textContent' para reestablecer estos nuevos valores a cero desde javascript
const init = function () {
  //este array contendra los puntages totales de los 2 jugadores, pero a la vez tambien seran el jugador 0 y el jugador 1
  scores = [0, 0];
  //variable que almacenara el puntaje actual
  currentScore = 0;
  //esta variable contendra al jugador activo. en este momento es el jugador 1 (0) (//* tenemos el jugador 1 y 2 , pero en nuestro codigo estan como 0 y 1, esto se debe a que los puntajes maximos (los totales) los almacenaremos ambos en un array y como estos son en base 0. el primero (0)sera el jugador 1 y el (1) sera el jugador 2).
  activePlayer = 0;
  // esta variable contendra el estado del juego basicamente si es que se esta jugando o no, esta nos ayudara al momento de que un jugador llego al puntaje para ganar el juego deberia terminar y no poder seguir jugando.
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  //este seria el codigo para el usuario. basicamente como no sabemos que jugador gano volvemos todo a cero, pero recordando que cuando comienza un nuevo juego es el jugador 1 el activo por defecto
  //ocultamos el dado agregando la clase hidden establecida en los css
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  //document.getElementById(`current--${activePlayer}`).textContent = 0;
  //document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
};
//# como estas variables estan dentro de la funcion. al momento de reiniciar la pagina nos aparecen los valores por defecto del HTML, para solucionar esto simplemente debemos llamar a esta funcion justo al comienzo del todo para que al momento de recargar la pagina estos valores se reestablescan para poder comenzar el juego.
init();
//creamos esta funcion porque el codigo que contiene (cambiar de jugador) lo usaremos  en 2 lugares distintos
const switchPlayer = function () {
  //en el momento antes de cambiar de jugador debemos reestablecer el puntaje actual del jugador activo a 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //restablecemos el puntaje actual, para que el nuevo jugador tambien comience con 0
  currentScore = 0;
  //con el operador ternario cambiaremos de jugador (//* el operador ternario sera 1 o 0 y ese valor sera el que tomara el jugador activo. basicamente si el jugaor activo es 0 cambiara a 1 y si el jugador activo es 1 cambia a 0)
  activePlayer = activePlayer === 0 ? 1 : 0;
  // en el proyecto anterior (modal windows) vimos la propiedad remove y add, que podriamos haber implementado aca tambien, pero tenemos otra propiedad de classList que es TOGGLE. basicamente lo que hace es quitar la clase si es que esta o agregarla si es que no esta.
  // //* IMPORTANTE supongamos que solo usamos toggle con el jugador 0, ,pero el jugador activo o el que tiene esta clase 'player--active' es de hecho el jugador 1. tendriamos el problema de que tendriamos los 2 jugadores activos. por eso es importante que se evaluen los 2 de esta manera si el jugador activo es el 1 toggle le sacaria esta clase y solo nos quedaria el jugador 0 con esta clase.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//# lanzamos el dado
btnRoll.addEventListener('click', function () {
  //# aca es donde le damos sentido a nuestra variable 'playing' ya que siempre y cuando playin sea verdadero se podra ejecutar todo este codigo, si no pues nada pasara
  //playing ya es un booleano, entonces no es necesario verificar si true === a true
  if (playing) {
    //generamos un numero aleatorio
    const dice = Math.trunc(Math.random() * 6) + 1;
    //mostramos el dado(por defecto al comenzar el juego esta oculto)
    diceEl.classList.remove('hidden');
    //manipulamos el atributo SRC para poner la imagen del numero dinamicamente
    diceEl.src = `dice-${dice}.png`;
    //chequeamos si es que el numero es uno o no
    if (dice !== 1) {
      //agregamos el numero del dado al puntaje actual(current score). (es una buena practica tener este puntaje actual en nuestro codigo y no solo mostrarlo) y para eso necesitamos una variable la que definiremos fuera de esta funcion. si no, esta variable se reiniciaria cada vez que lanzamos el dado
      currentScore += dice;
      //establecemos el puntage al jugador que este activo en ese momento(0,1)
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //establecemos el puntaje no dinamicamente solo al jugador 1
      //current0El.textContent = currentScore;
    } else {
      //si sale el numero 1 que es este caso cambiamos de jugador
      switchPlayer();
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //agregamos la puntuacion actual(current score) al puntaje total del jugador activo(//* si el jugador activo es el 0 sera la puntuacion en la posicion (indice 0) la que se sumara y agregara al array scores, si el jugador activo es el 1, sera ese puntage en esa posicion (indice 1) la que se sumara y agregara al scores.)
    scores[activePlayer] += currentScore; //scores[1] = scores[1] + currenScore
    //establecemos el puntage total segun sea el jugadopr activo
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //si el jugador llega a 100 en su puntage total gana el juego
    if (scores[activePlayer] >= 100) {
      //si el jugador gana establecemos el juego en false para que ya no se puede seguir jugando
      playing = false;
      //si llega a 100, le agregamos la clase 'player winner' del css. y claro debemos quitarle la clase de 'player active' tambien

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //una vez que se sube el puntage actual al total y se comprueba que no ha llegado a los 100 puntos, cambiamos de jugador
      switchPlayer();
    }
  }
  //verificamos si el puntaje total es al menos 100
});

//al comenzar un nuevo juego debemos restablecer todos los valores a cero
btnNew.addEventListener('click', init);
//llamamos a esta funcion tambien al momento de precionar el botom de 'new game', donde debemos reestablecer todo para un nuevo juego
