'use strict';

//comenzaremos este proyecto de manera mas ordenada, seleccionando y almacenando en variables todos los elementos que ocuparemos
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');

//si tenemos mas de una clase con el mismo nombre es mucho mejor usar 'querySelestorAlL' ya que si usamos 'querySelector' solo nos seleccionara un elemento.
const btnsshowmodal = document.querySelectorAll('.show-modal');

//vemos que 'querySelector' nos arroja una 'nodeList' que para efectos inmediatos lo tomaremos como un array.
console.log(btnsshowmodal);

//y como es similar a un array podremos recorrerla.
for (let i = 0; i < btnsshowmodal.length; i++) {
  //* podriamos haver creado otra funcion aqui para pasarsela directamente a nuestro 'addEventListener', pero lo dejaremos asi esta vez
  btnsshowmodal[i].addEventListener('click', function () {
    //EJEMPLO si no utilizamos clases(classLits) y tuvieramos mas de un estilo tendiamos que haver escrito cada uno de esos estilos de forma separada tal como lo hacemos con el estilo display. //modal.style.display = 'block';(block es lo opuesto a none)

    //usar clases (propiedad CLASSlIST)nos simplifica la vida ya que podemos trabajar con multiples estilos a la vez usando solo una clase, en este codigo la clase 'hidden' solo tiene un estilo(display)
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
  //* aca si creamos esa funcion (solo para ver la diferencia) que agrega el estilo 'hidden', de esta manera solo hace falta pasarle esta funcion a nuestro 'addEvenListener' en los lugares en los que se necesite(esta no debe llamarse())
  const clossModal = function () {
    //si no utilizamos 'classList' tendriamos que hacerlo asi. lo que se puede volver mas tedioso si tenemos mas estilos
    //modal.style.display = 'none';
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  btnclosemodal.addEventListener('click', clossModal);
  overlay.addEventListener('click', clossModal);
}

//los eventos de teclado se conocen como eventos globales osea que se escuchan en todo el documento. este evento funciona para cualquier tecla, pero solo queremos que se gatille cuando la tecla 'esc' para eso necesitamos ver ese evento hay sale que tecla se presiono y para eso necesitamos ese evento
document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
