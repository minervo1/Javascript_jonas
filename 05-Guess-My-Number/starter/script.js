'use strict';
//* LO QUE HAREMOS AHORA SERA USAR LA TECNICA DE REFACTORIZACION QUE BASICAMENTE CONSISTE EN DEJAR EL CODIGO MAS LIMPIO QUITANDO CODIGO REPETIDO, USANDO TECNICAS COMO FUNCIONES Y OTRAS COSAS, PERO SIN INTERRUMPIR LA FUNCIONALIDAD YA IMPLEMENTADA.

let numeroSecreto = Math.trunc(Math.random() * 20 + 1);
let puntaje = 20;
let puntuacionMasAlta = 0;

//el mismo codigo que tenemos en esta funcion, lo teniamos repetido 5 veces
const despliegueMensaje = function (mensaje) {
  document.querySelector('.message').textContent = mensaje;
};
//realizamos lo mismo para este codigo que lo teniamos repetido 3 veces
const desplieguePuntaje = function (puntage) {
  document.querySelector('.score').textContent = puntage;
};

document.querySelector('.check').addEventListener('click', function () {
  const adivina = Number(document.querySelector('.guess').value);

  if (!adivina) {
    despliegueMensaje('⛔ No hay Numero');
    // document.querySelector('.message').textContent = '⛔ No hay Numero!';
  } else if (adivina === numeroSecreto) {
    // document.querySelector('.message').textContent = '🎉Numero Correcto!';
    despliegueMensaje('🎉Numero Correcto!');
    document.querySelector('.number').textContent = numeroSecreto;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (puntaje > puntuacionMasAlta) {
      puntuacionMasAlta = puntaje;
      document.querySelector('.highscore').textContent = puntuacionMasAlta;
    }
    //*en vez de tener un 2 bloques de codigo uno cuando adivina es mayor y otro cuando es menor. que si lo analizamos bien en otras palabras preguntamos cuando adivina es DISTINTO DE NUMERO SECRETO, lo unico que era diferente en ambos bloques es el texto del mensaje, que lo arreglamos con el operador ternario.
  } else if (adivina !== numeroSecreto) {
    if (puntaje > 1) {
      // document.querySelector('.message').textContent =
      //   adivina > numeroSecreto ? '📈 Numero muy alto!' : '📉 Numero muy bajo!';
      despliegueMensaje(
        adivina > numeroSecreto ? '📈 Numero muy alto!' : '📉 Numero muy bajo!'
      );
      puntaje--;
      // document.querySelector('.score').textContent = puntaje;
      desplieguePuntaje(puntaje);
    } else {
      // document.querySelector('.message').textContent = '🙁 perdiste';
      despliegueMensaje('🙁 perdiste');
      // document.querySelector('.score').textContent = 0;
      desplieguePuntaje(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  puntaje = 20;
  // document.querySelector('.score').textContent = puntaje;
  desplieguePuntaje(puntaje);
  numeroSecreto = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.message').textContent = 'Comienza el Juego...';
  despliegueMensaje('Comienza el Juego...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
