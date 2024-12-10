'use strict';

///////////////////////////////////////
//APLICATION
//////////////////////////////////////

// ventana modal a la cual se le agrega o quita la clase hidden
const modal = document.querySelector('.modal');
//cualquier parte de la pantalla
const overlay = document.querySelector('.overlay');
// correnponde a la x de la ventana modal
const btnCloseModal = document.querySelector('.btn--close-modal');
// hay 2 botones que podrian abrir la ventana modal
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//seleccinamos el boton en el cual comenzara el deslizamiento sueve en este caso es el boton 'learmore'
const btnScrollTo = document.querySelector('.btn--scroll-to');
//seleccionamos el elemento hasta donde se desplazara este deslizamiento que en este caso es la seccion1
const seccion1 = document.querySelector('#section--1');
//trabajaremos con delegacion de eventos, por lo que debemos adjuntar un detector de eventos a un padre en comun a todos los elementos con los que trabajaremos en este caso como tambien queremos incluir al logo el elemento padre es 'nav'
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// esta clase quitara la clase hidden osea mostrara la ventana
const openModal = function (e) {
  //evitamos el comportamiento por defecto que es saltar ala parte superior de la pantalla, esto se produce porque no es un boton si no un link y posee el hipervinculo 'href="#"
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// esta funcion agregara la clase hidden osea ocultara la ventana
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//recorremos la nodeList que nos arroja btnsOpenModal porque esta tiene 2 botones y cualquiera de los 2 que se haga click se devera ejecutar la funcion openModal
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// pero sabemos que hay una forma mas moderna de realizar este ciclo, si bien la nodeList solo posee algunos metodos de los array forEach es uno de ellos.
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

//al hacer click en el boton cerrar o en cualquier parte del overlay osea en cualquiier parte de la pantalla se cerrara el modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//si se detecta click en la tecla de 'escape' y si la ventana no contiene la clase hidden se ejecutara la funcion 'closeModal'.
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//* cosas que debemos saber para implementar el deslizamiento suave
//implementamos el escucha, en el boton que es el que gatillara el scroll NOTA para recorrer el trayecto desde el boton hasta la seccion 1 debemos saber cual es la distancia(coordenadas) que los separa y para saberlo podemos usar 'getBoundingClientReact' este metodo es variable osea cambia segun la visibilidad de la pantalla.
btnScrollTo.addEventListener('click', function (e) {
  //en primera instancia lo usamos en la seccion1, lo que observamos son las coordenadas de la seccion 1. siempre desde la parte superior de la pantalla hasta el comienzo de la seccion eso es = y.  y desde la parte izquierda de la pantalla hasta la seccion propiamente tal es = x. ademas de otros atributos como 'width', 'height' etc.
  const coordenadasScroll = seccion1.getBoundingClientRect();
  console.log(coordenadasScroll);
  //las coordenadas desde el lugar donde comenzara el desplazamiento osea el boton mismo RECORDAR que 'target' es una propiedad del evento y hace referencia al objeto en el que se gatillo el evento, en este caso el boton(btnScrollTo)
  console.log(e.target.getBoundingClientRect());

  // podemos obtener las coordenadas del desplazamiento actual, si nos desplazamos tanto en Y como X sera reflejado al actualizar la pagina
  console.log('desplazamiento en y:', window.scrollY);
  console.log('desplazamiento en x:', window.scrollX);

  //tambien podemos obtener la altura y el ancho de la pantalla de visualizacion actual de la siguiente manera.
  console.log(
    'altura y ancho de la pantalla de visualizacion : ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //* implementacion del desplazamiento suave
  //utilizamos la funcion global del objeto windows 'scrollTo' (desplazarse hacia) el cual recibe 2 argumentos el desplazamiento en x y el top (osea la posicion del comienzo de la seccion hasta la parte superior de la pantalla visualizada)IMPORTANTE como 'top' es relativa a la pantalla que se visualiza el primer intento si funciona, pero ya el segundo no, porque debemos desplazarnos para ver y cliquear el botom nuevamente, por lo que al hacer click se desplazara lo indicado por el 'top', pero visualmente la distancia ya es menor por lo que visualmente no nos dejara donde el comienzo. para resolver esto debemos agregarle al 'top' el movimiento actual del scroll(window.scrollY) de esta manera logramos que este desplazamiento sea relativo a la pagina(document) y no a la pantalla que se visualiza.
  // window.scrollTo(
  //   coordenadasScroll.left + window.scrollX,
  //   coordenadasScroll.top + window.scrollY
  // );
  //podemos mejorar esto ya que en vez de pasarle 2 parametros podemos pasarle 1 objeto y en este definir no solo las coordenadas si no que tipo de movimiento queremos que tenga. RECORDAR esta es la forma antiagua aun
  // window.scrollTo({
  //   left: coordenadasScroll.left + window.scrollX,
  //   top: coordenadasScroll.top + window.scrollY,
  //   behavior: 'smooth',
  // });
  // esta es la forma moderna de realizarlo, al elemento al que queremos desplazarnos le adjuntamos la funcion 'scrollIntoView' y solo le debemos indicar el tipo de movimiento que queremos.
  seccion1.scrollIntoView({ behavior: 'smooth' });
});

//* implementamos la delegacion de eventos en la pagina de navegacion
//actualmente antes de implementar esto cuando realizamos click, se desplaza muy rapido a la seccion correspondiente lo que haremos es que se mueva suavemente. primero lo haremos sin delegacion de eventos solo para ver que implementar esta caracteristica es mucho mejor que no hacerlo.
//sin delegacion de eventos observamos que estamos aplicando la misma funcion a cada uno de los elementos. si fueran mas elementos no es muy eficiente porque estariamos creando 10 o mas copias de la misma funcion

//sabemos que querySelectorAll nos devolvera una nodeList la cual devemos recorrer para implementar en cada uno de los elementos que posee un escucha.
// document.querySelectorAll('.nav__link').forEach(function (ele) {
//   ele.addEventListener('click', function (e) {
//     //prevenimos el desplazamiento predeterminado que poseen con los anclas en el html
//     e.preventDefault();
//     //no queremos el valor absoluto del href solo el relativo tal como aparece en el html
//     //const id = this.href;
//     //para obtener el valor relativo usamos el metodo getAttribute
//     const id = this.getAttribute('href');
//     console.log(id);
//     //dado que el href de cada link coinciden con el id de cada seccion (esa es la idea de esta forma de relaizarlo) podemos usar este id del ancla para usarlo como id real hacia donde queremos movernos e implementar lo mismo que anyteriormente 'scrollIntoView'.
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//# es aca cuando la delegacion de eventos es muy util, utilizamos un padre en comun a los elementos y dejamos que la fase de burbugeo haga su trabajo de esta forma solo utilizamos una funcion
//adjuntamos un escucha a un padre comun a los 3 elementos que queremos, al ser un padre en comun y capturarlo en la tragetFace el burbugeo pasara por todos los hijos.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  //debemos asegurarnos que solo sean los 3 enlaces los que reaccionen a los click y no otra cosa, en este caso solo si los elementos poseen la clase 'nav__link' reaccinaran
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//* componente de pestañas

//#recordar que hacerlo de esta manera si tuvieramos muchas pestañas relentizaria la pagina no es una buena practica
// tabs.forEach(pestaña =>
//   pestaña.addEventListener('click', () => console.log('tabs'))
// );
//# lo mejor es usar delegacion de eventos, recordar que devemos adjuntar un controlador de eventos a un padre en comun a nuestras pestañas. usando delegacion de eventos
tabsContainer.addEventListener('click', function (evento) {
  //el boton en si tiene un hijo que es un span con un numero, necesitamos que en cada click ya sea en el boton o en el 'span' el resultado del click debe ser el mismo (el boton), para eso usamos closet que buscara el elemento mas cercano que contenga 'operations__tab' que en el caso de los 2 es el boton.
  const clicked = evento.target.closest('.operations__tab');

  //ERROR cuando hecemos click sobre el contenedor de pestañas, como closest no encuentra un padre con la clase 'operations__tab' el resultado por defecto es 'null' y como no se puede leer un null nos arroja un error. basicamente tenemos que ignorar cualquier click que no sea de los botones de las pestañas.
  //podemos hacerlo verificando si al hacer click el elemento contiene la clase 'operations__tab' como lo realizamos antes, pero en esta oportunidad lo realizaremos con una nueva tecnica 'CLAUSULA DE PROTECCION'
  //esta es la forma tradicional de hacerlo
  // if(clicked){
  //   clicked.classList.add('operations__tab--active');
  // }
  // pero usando la 'clausula de proteccion' es la forma mas moderna de hacerlo, como null es un valor false se convertira en true por lo que retornara la funcion osea no se ejecutara la funcion, ahora si hay un click nada se retornara y se ejecutara el codigo que sigue sin problemas.
  if (!clicked) return;
  //en estos casos cuando jugamos con clases en donde las habilitamos y deshabilitamos lo mejor es eliminar las clases 'activas' en este caso de todas las pestañas y solo agregarla cuando sea necesario
  tabs.forEach(pestaña => pestaña.classList.remove('operations__tab--active'));
  tabsContent.forEach(contenido =>
    contenido.classList.remove('operations__content--active')
  );
  //activamos solo al realizar el click
  clicked.classList.add('operations__tab--active');

  //ahora activamos el contenido de cada pestaña
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//* efecto que resalta cuando pasamos sobre los links y desbanese a los otros

//# esta funcion viene a refactorizar el codigo repetido que tenemos comentado mas abajo donde solo cambia la opacidad de hecho como es solo un parametro el que cambia podemos pasarle este como parametro
const handlehover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//usamos 'mouseover' porque este burbugea 'mouseEnter' no burbugea. RECORDAR que no podemos llamar a la funcion de esta manera 'nav.addEventListener('mouseover', handlehover(e, 0.5)', porque el escucha espera una funcion y este valor seria como un valor mas.
//al usar el metodo bind es como si le estuvieramos pasando un argumento nuevo a la funcion. osea 0.5 es la opacidad por lo que ya no se necesita pasarle la opacidad a la funcion principal.
nav.addEventListener('mouseover', handlehover.bind(0.5));
//pero a pesar que esta forma funciona, podemos hacerlo mucho mejor usando el metodo 'bind' que vimos anteriormente
//handlehover(e, 0.5);

//   //nos aseguramos que solo los elementos que posean la clase 'nav__link' sean los que reacconen RECORDAR no usamos 'closset' porque los elementos nav__link no poseen hijos
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     //ahora si seleccinamos los elementos para eso recordar que podemos seleccionar un padre en comun y desde hay seleccionamos a los hijos, en este caso el padre sera 'nav' y los hijos todos los que posean la clase nav__link
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     //pero tambien queremos trabajar con  el logo. de esta manera no solo funcionara con este logo si no con cualquiera
//     const logo = link.closest('.nav').querySelector('img');

//     //ahora cambiamos la opacidad a los hijos
//     siblings.forEach(el => {
//       //le cambiamos la opacidad a todos los links menos en el que esta posado el mouse(link.target)
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });
//tambien necesitaremos 'mouseout' para revertir lo que hagamos con mouseout, basicamente es lo mismo solamente que devolvemos la opacidad a como estaba anteriormnete
nav.addEventListener('mouseout', handlehover.bind(1)); //{
//handlehover(e, 1);
//});
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;

//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');

//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });

//* navegacion fija
//# la primera forma de hacerlo no es la recomendable, pero es importante saberlo porque aun hay mucho codigo antiguo en internet. hablamos de el evento scroll del objeto windows, basicamente porque es un evento que se dispara a cada instante y afecta el rendimiento sobre todo en celulares.
// window.addEventListener('scroll', function () {
//   //en primera instancia necesitamos saber las coordenadas de la seccion1 porque desde hay vamos a implementar la navegacion fija, pero necesitamos obtener estas coordenadas dinamicamente porque recordar que las coordenadas variaran segun el tamaño de la pantalla.
//   const initialCoords = seccion1.getBoundingClientRect();
//   console.log(initialCoords);

//   //obtenemos la posicion en el eje y cada vez que realizamos scroll
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });
//# esta es la mejor manera de implementar este tipo de funcionalidad utilizando 'INTERSECTION OBSERVER API', pero antes veremos como funciona y luego lo implementaremos
//lo primero que debemos hacer es crear este observador al cual debemos pasarle una callBack function y un objeto, de hecho podemos crear estos parametros de forma separada tal como lo hacemos ahora.
//basicamente esta funcion se llamara cada vez que el root(pantalla visible) se cruze con el objetivo(seccion1) en su 10%, esta funcion recibe 2 parametros (threshold, observador) en este caso solo usaremos las entradas
// const obsCallback = function (entries, observer) {
//   //en este caso solo tenemos una entrada(threshold) de todas maneras creamos una funcion funcional que sirva tanto para una como para varias umbrales
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// // el objeto nesecita una propiedad 'root', que sera el elemento que se cruzara con el objetivo que en este ejemplo es la seccion1, lo establecemos en null para que sea la pantalla completa ese elemento, aunque podemos seleccionar algun elemento en especifico.
// const obsOptions = {
//   root: null,
//   //el umbral es el % de interseccion en el que se llamara a la funcion 'obsCallback'(podemos tener muchos umbrales de hecho le podemos pasar un array)
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(seccion1);

//# ahora que ya sabemos como funciona esta 'INTERSECTION OBSERVER API' implementemosla para la NAVEGACIONN PEGAJOSA

//queremos que la barra aparesca en el momento en que el header se pierda de vista o en otras palabras comenzando la seccion1, pero trabajaremos con el hearder en esta ocasion
const header = document.querySelector('.header');
//calculamos dinamicamente los pixeles que nesecita la propiedad 'rootMargin'
const navHeight = nav.getBoundingClientRect().height;
//console.log(navHeight);
const stickyNav = function (entries, observador) {
  //Recordar la destructuracion nos permite tener variables separadas en este caso para cada una de las enradas, perosolo tenemos una. esto es lo mismo que  escribir (entries[0])
  const [entry] = entries;
  //console.log(entry);
  //cuando el root No se cruze con el objetivo me aplicara la clase sticky, de lo contrario se removera
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const observadorHeader = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  //esta propiedad es un espacio que se aplicara al root fuera o dentro de el objetivo en este caso fuera. NOTA estos 90 pixceles deben calcularse dinamicamente, porque depende de la pantalla que se este visualisando.
  rootMargin: `-${navHeight}px`,
});
observadorHeader.observe(header);

//* revelando elementos con NTERSECTION OBSERVER API
//otro uso muy comun es que se vayan revelando los elementos a medida que realizamos scroll en la pagina en esta oportunidad le daremos un efecto a las secciones a medida que aparescan, basicamente le quitaremos la clase 'section--hidden'

//selecionamos las secciones porque con elas es que queremos trabajar
const allSection = document.querySelectorAll('.section');
//creamos la funcion que resivira nuesttro observador
const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);
  //le quitamos la clase 'section--hidden' al elemento objetivo, osea al elemento que se cruza con el root, que en nuestro casos son las secciones.
  //NOTA todas las secciones aparecen muy bien, execto la primera seccion, esto se debe a que de princio ya se gatilla la funcion, pero este en su 'isIntersecting' es falso y todas las demas secciones esta propiedad es true.
  // if (entry.isIntersecting) entry.target.classList.remove('section--hidden');
  // else entry.target.classList.add('section--hidden');
  //RECORDAR que tenemos la opcion de la 'clausula de proteccion' esta nos retornara la funcion(no hara nada) si es false y si es true se ejecuara el codigo siguiente
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  //otra cosa que debemos hacer por temas de performance y rendimiento es dejar de observar a estas secciones porque mientras se siga realizando scroll se seguira escuchando aunque el efecto hace pasado.
  observer.unobserve(entry.target);
};
//creamos el observador
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  //la seccion se revelara solo cuando este 15% visible en la pantalla
  threshold: 0.15,
});

//recorremos todas las secciones (RECORDAR que usamos forEach cada vez que queremos recorrer algo que no involucre crear un  nuevo array). y las observamos
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  //agregamos la clase 'section--hidden'
  //section.classList.add('section--hidden');
});

//* carga de imagenes lenta
//las imagenes en particular tienen un inpacto directo en el rendimiento por ende performance de la pagina en si, es por eso que la tecnica que implementaremos ahora disminuye bastante esta carga.  basicamente es usar en pprimera instancia una imagen de baja resolucion y luego reemplazarla por la original y esta imagen de baja resolucion se oculta  con un efecto borroso hasta que aparesca la imagen real. ESTO TAMBIEN GRACIAS A LA NTERSECTION OBSERVER API.

//seleccionamos todas las imagenes que posean el atributo 'data-src' que son las imagenes con las que trabajaremos para darle esta tecnica
const imgTargets = document.querySelectorAll('img[data-src]');
//console.log(imgTargets);

//creamos la funcion que recivira nuestro observador
const loading = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);
  //solo necesitamos las imagenes que realmente se cruzan
  if (!entry.isIntersecting) return;
  //reemplazamos la imagen de baja calidad por la de alta calidad
  entry.target.src = entry.target.dataset.src;

  //el proceso de cambiar la imagen es algo que se realiza detras de escena y de hecho es un evento el que ocurre, es por eso que debemos escuchar el evento y hay quitar la clase borrosa(lazy-img). si quitaramos la clase 'lazy-img' inmediatamente sin que el evento haga terminado la imagen borrosa se podria ver antes que el cambio termine
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  //lo siguiente es dejar de observar para que no se sigan produciendo estos eventos que relentizan la pagina
  observer.unobserve(entry.target);
};
//creamos el observador
const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
  //no queremos que el usuario note que estamos cambiando de imagen por eso implementamos que el proceso de cambio de las imagenes se realize un poco antes
  rootMargin: '200px',
});
//recorrimos cada imagen y las observamos
imgTargets.forEach(function (img) {
  imgObserver.observe(img);
});

//* implementamos el control deslizante
//si no es la mas usada es una de las primeras con esta tecnica podremos deslizaar imagenes o texto hacia los lados

//seleccionamos los elementos con los que trabajaremos en este caso con los 3 slider y los botones
const slides = document.querySelectorAll('.slide');
const btnleft = document.querySelector('.slider__btn--left');
const btnright = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

//SOLO PARA PODER OJBSERVAR LAS DIAPO Y SABER QUE ES LO ESTAMOS HACIENDO REDUCIMOS LA ESCALA DE LAS SLIDES
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-900px)';
// slider.style.overflow = 'visible';

//esta variable almacena la slide actual, la necesitamos afuera por que devemos acceder a ella desde varios lugares
let currSlide = 0;
//necesitamos decirle a javascript que se detenga al momeno de llegar a la ultimma diapositiva, por eso establecemos este limite que es la longitud  de la nodeList
const maxSlide = slides.length;
//todos los slides estan uno encima del otro, por lo que hay que ponerlos uno al lado del otro, para eso aplicamos una translacion en el eje x(la primera slide debe estar en 0%, la segunda debe estar en 100%, la tercera en 200%, y la tercera en 300%)y para esto nesecitaremos el indice de cada slide.(basicamente cada imagen esta en un 100% y translatex lo movera otro 100%), PERO ESTE CODIGO ES REPETIDO ASI QUE LO REEMPLAZAMOOS POR LA LLAMADA A LA FUNCION 'gooToSlide'
//slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%`));

//FUNCION QUE CREARA LOS PUNTOS EN CADA SLIDE, como estos puntos estan dentro de cada slide debemos recorrer estas para agregarlos , pero por otra parte los slides no los necesitamos en si, por eso utilizamos el (-) para que javascript no considere este primer parametro que son los propios slider y lo salte y pase a los indices que si los necesitamos.
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

//necesitamos una funcion que detecte cual es la slide actual para asi poder darle un estilo distinto
const activateDot = function (slideAc) {
  //seleccionamos todos los puntos y eliminamos la clase 'dots__dot--active' a todos ellos y solo le damos clase activa al punto que corresponda tal como lo hicimos anteriormente
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  //para saber cual es la slide actual podemos usar el atributo 'data-slide= 0,1,2,3', para eso debemos primero seleccionar el punto y como todos poseen el miso atributo (dots__dot), RECORDAR que los corchetes nos permiten acceder a ciertas caracteristicas del atributo tal como lo hicimos antes para seleccionar las imagenes con determinados atributos. en este caso para comprobar el valor de cierto atributo 'data-slide' y para acceder a  este este valor usamos los corchetes.
  document
    .querySelector(`.dots__dot[data-slide="${slideAc}"]`)
    .classList.add('dots__dot--active');
};
activateDot(currSlide);

//tenemos codigo repetido por lo que esta funcion es para eso
const goToSlide = function (slide) {
  //NOTA el slide actual es 0(visible) cuando nos movamos queremos que la sigiiiente que era 100 ahoara ea 0 y la que era cero en un comienzo quede -100, para eso debemos restarle la el slide actual al indice
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%`)
  );
};
//es cero porque 0 - 0 es 0, por lo que quedaria igual con la promera slide como 0
goToSlide(0);

//funcion callBack que le pasaremos al listener
const nexSlide = function () {
  //la longitud (length) es 4(son 4 fotos), pero las slide son van de 0 a 3
  if (currSlide === maxSlide - 1) {
    // cuando la slide sea igual al maximo, la slide vuelve a ser 0
    currSlide = 0;
  } else {
    currSlide++;
  }
  //
  // slides.forEach(
  //   (s, i) => (s.style.transform = `translateX(${100 * (i - currSlide)}%`)
  // );
  // reemplazamos el codigo repetido por la llamada a la funcion
  goToSlide(currSlide);
  activateDot(currSlide);
};

//creamos la funcion callBack que le pasaremos al listener del boton left
const prevSlide = function () {
  if (currSlide === 0) {
    currSlide === maxSlide - 1;
  } else {
    currSlide--;
    goToSlide(currSlide);
    activateDot(currSlide);
  }
};

//nos movemos a la slide siguiente
btnright.addEventListener('click', nexSlide);
btnleft.addEventListener('click', prevSlide);

//tambien queremos poder deslizar los slides con las teclas de derecha y izquierda del teclado
document.addEventListener('keydown', function (e) {
  console.log(e);
  //en vez de utilizar un if, utilizamos el cortocircuito RECORDAR que em 'and' cortara el circuito al encontrar un valor falso, mientras sean true pasara al siguiente, en este caso si 'e.key === ArrowRight' es true se ejecutara 'nexSlide'.
  e.key === 'ArrowRight' && nexSlide();
  e.key === 'ArrowLeft' && prevSlide();
});
//hacemos que los botones funcionen, pero al usar un listener en el document se creara una funcion para cada boton, lo mejor es usar delegacion de eventos, RECORDAR sobre un padre en comun.
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    //RECORDAR que cada punto ahora es 'data-slide="${i}' y accedemos con dataset-slide
    //const slide = e.target.dataset.slide;
    //ahora usando destructuracion de objetos RECORDAR que deben ser los mismos nombres de las propiedades
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

//# es importante entender algunos conceptos y cosas qque suceden en las pagins web

//* ciclo de vida de los eventos del DOM
//durante el ciclo de vida de una pagina web (desde que se ingresa hasta que se  abandona la  pagina) existen o ocurren ciertos eventos.

//* 1- CONTENIDO DEL DOM CARGADO (DOM content loaded), este se dispara por el document, cuando el html ha sido completamente parseado osea se ha creado el DOM NOTA todos los script deben descargarse y ejecutarse antes de que este evento pase. las imagenes y otros recursos externos no se cargaran en esta fase si no despues
//podemos escuchar este evento, es importante saber que solo se podra ejecutar codigo una vez que el DOM este creado ¿esto significa que debemos crear una funcion con todo el codigo y pasarcela a este evento? No no es necesario hacer eso ya que nuestra etiqueta script esta al final del cuerpo del html asi que de todas maneras se leera al final.
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('html analizado y DOM creaado', e);
});

//* 2- EVENTO DE CARGA, este es disparado por la ventana (windows), cuando no solo el DOM esta creado si no que todas las imagenes y recursos externos lo esten tambien. en otras palabras cuando la pagina esta completamente cargada
//tambien podemmos escuchar este evento
window.addEventListener('load', function (e) {
  console.log('pagina cargada completamente', e);
});

//* 3- EVENTO ANTES DE LA DESCARGA (event before unload), tambien se gatilla en la ventana (windows), se producira justo antes de abandonar la pagina web, por ejemplo al realizar click en el boton de la x roja u similares, por lo que es usado para preguntar al usuario si esta seguro de salir.
// algunos navegadores es necesario usar 'preventDefault' en otros no
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
// });

//* DIFERENTES FORMAS DE CARGAR LOS  SCRIPT
// existen muchas formmas en la que podemos cargar script, hasta ahora hemos utilizado la mas comun (script src="script.js">) al final de nuestro body, pero tenemos otras 2 formas de cargarlo estan son con los atributos ASYNC Y DEFER (<script async src="script.js">), (script defer src="script.js">). estos atributos influiran en la forma en que se descargan y ejecutan los scripts.

//tenemos 2 situaciones en la que podemos establecer nuestro scropt en el HEAD o AL FINAL DEL BODY(como es lo mas recomendable).

//los script con los atributos de async y defer no tienen sentido ni razon ded ser que se creen al final del body , se crearon para ser utilizados en el head hay son utilies
//utilizar defer es mejor opcion que async, por lo menos si queremos mantener el orden de ejecusion segun el orden en el que esten escritos en el codigo.

//si se interactua con codigo de  terceros como google analitys donde el orden de su ejecusion no es importante o basicamente cuando nuestro codigo no necesite interactuar con otro codigo sync es una buena opcion.
/////////////////////////////////////////////////
//LECTURES///////////////////////////////////////
/////////////////////////////////////////////////
console.log('seleccion-creacion-insercion y eliminacionn de elementos');
/*

//# SELECCIONAMOS ELEMENTOS
// de esta manera seleccionamos el documento complleto de cualquier pagina web
console.log(document.documentElement);

// claro que tambien podemos seleccionar las etiquetas de manera individual
console.log(document.head);
console.log(document.body);

//como ya sabemos podemos seleccionar cualquier elemento, pero este solo nos devolvera la primera coincidencia
const header = document.querySelector('.header');
// si tenemos mas de un elemento deveremos usar 'querySelectorAll' que nos devolvera una nodeList
const allSection = document.querySelectorAll('.section');
console.log(allSection);

// RECORDAR  que para seleccionar un elemento en base a su ID con querySelector deberemos usar '#'
const seccion1 = document.querySelector('#section--1');
console.log(seccion1);

//pero sabemos que lo mejor es usar
const seccion2 = document.getElementById('section--1');
console.log(seccion2);

// tambien podemos seleccionar los elementos con un nombre en comun, nos devolvera un htmlCollection =>> esta tiene la caracteroistica de que si el DOM cambiara esta lista se actualiza automaticamente
const botones = document.getElementsByTagName('button');
console.log(botones);

// tambien podemos seleccionar todos los elementos en base al nombre de sus clases
const clasesBtn = document.getElementsByClassName('btn');
console.log(clasesBtn);

//# CREAMOS E INSERTAMOS ELEMENTOS

//* una forma habitual y rapida de crear html en js es usar 'insertAdjacentHTML', como lo hicimos en la aplicasion BANQUIS

// pero a veces es bueno crear desde cero usando otras tecnicas de programacion, en este caso creamos un 'div' y lo almacenamos en una variable y para insertarlo en la pagina
const message = document.createElement('div');
//podemos añadirle clases a nuestro elemento
message.classList.add('cookie-message');
message.textContent = 'usamos la clase cookies que esta en nuestro css';
message.innerHTML =
  'con innerHTML podemos insertar elementos <button class="btn btn--close-cookie">Got it!</button>';

//NOTA tenemos 2 inserciones , pero solo vemos una esto se debe a que despues de la primera insercion este elemento vive en el DOM forma parte de el y no puede estar en 2 lugares al mismo tiempo.
//insertamos este elemento en el documento (pagina) 'prepend' es como el primer hijo del header ira al comienzo
header.prepend(message);
// 'append' es como el ultimo hijo del header ira al final
header.append(message);
// NOTA lo que paso aca es que el ultimo hijo movio el elemento  NO SE ELIMINO Y SE CREO OTRO si no que el elemento que ya existia se movio, esto es muy importante saberlo ya que conn estos metodos no solo podemos insertar elementos si que podemos moverlos

//¿ pero que pasa si quiero insertar varias copias del mismo elemento de una vez?
//tendriamos que hacer un clon del elemmento, no es algo que se suela hacer pero esta es la forma
//header.append(message.cloneNode(true));

// para terminar tambien tenemos 'before' y 'after'
//header.before(message);
header.after(message);

//# ELIMINAMOS ELEMENTOS
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //NOTA'remove' es un metodo relativamente nuevo, antes para eliminar un elemento se tenia que recurrir a los padres y desde hay eliminar al hijo. y esta forma de moverse entre padres e hijos se conoce como 'atravesando el DOM'.
    //message.parentElement.removeChild(message);
    message.remove();
  });
*/
console.log('clases- estilos y atributos');
/*
// seguiremos trrabajando con nuestro DIV de la clase anterior
const message = document.createElement('div');

message.classList.add('cookie-message');
message.textContent = 'usamos la clase cookies que esta en nuestro css';
message.innerHTML =
  'con innerHTML podemos insertar elementos <button class="btn btn--close-cookie">Got it!</button>';

const header = document.querySelector('.header');
header.prepend(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //ahora tenemos la propiedad remove mas facil de quitar la propidad directamente (message.remove())
    message.parentElement.removeChild(message);
  });
//# STYLES
//NOTA Y RECORDAR para darle estilo a los elementos en nuestro archivo js debemos usar la notacion 'camelCase' a diferencia de hacerlo directamete en nuestro archivo css que es 'background-color'. y escribirlos tal como lo hariamos en el css. tambien es importante mencionar que de esta manera (elementos creados por nosotros mismos)los estilos se configuran en linea osea inmediatamente se reflejan en el DOM

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//podriamos pensar que tambien podriamos leer estilos, pero no. la propiedad STYLE solo funciona para elementos en linea
console.log(message.style.height);

//osea creados por nosotros mismos
console.log(message.style.backgroundColor);

// de todos modos igual podemos leer los estilos aunque no esten en linea para esto debemos utilizar la funcion 'getComputedStyle'
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

//podemos aumentar o disminuir el valor de la propiedad con esta funcion, pero debemos saber que todo lo que esta despues del sigo de igualdad es un 'string' y estamos agregando un numero por lo que este terminaria convirtiendose en una cadena y no funcionaria. nesecitamos que quede el 'px' como cadena, pero el numero de ser tipo numero. ppara esto usamos 'parseFloat' el 10 es porque el trabaja en base 10 (lo que normalmente usamos en la vida diaria), basicamente le quita el string al nnumero y luego nosotros lo volvemos poner.
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

//# PROPIEDADES PERSONALIZADAS DE CSS, comunmente se las conoce como variables css.
//se comportan como tal o por lo menos esa es la intencion. en nuestro archivo css son las que estan en el documento :root{}  que es equivalente al documentElement de javascript

//y claro que tambien las podemos manipular desde aca. accediendo al domumento html y usandommla propiedad 'setProperty' podremos configurar la propiedad seleccionada en este caso la reestablecemos a otro color.
document.documentElement.style.setProperty('--color-primary', 'orangered');

//*de hecho podemos usar 'setProperty' para configurar cualquier proopiedad , pero es mas facil realizarlo de la manera tradicional 'message.style.backgroundColor = '#37383d';' por ejemplo.

//# atributos
// charset,href,rel,name,lang,class,id,src ... etc son atributos y con js podemos acceder y cambiar estos
const logo = document.querySelector('.nav__logo');
//accedemos a los atributos alt y scr que estan por defecto definidos.
//NOTA pero si no lo estuvieran javascropt los creara en el objeto porque son atributos que cualquier imagen debe tener y podremos leerlas
console.log(logo.alt);
//obtenemos el atributo especificado(url adsoluta)
console.log(logo.src);

//ocurre lo mismo para los 'href' los que tenemos en nuestro html es el relativo y el que podemos ver en la consola es el adsoluto
const link = document.querySelector('.twitter-link');
// la absoluta
console.log(link.href);
// la relativa
console.log(link.getAttribute('link'));
//si queremos obtener la url relativa tal como la tenemos en el html deveremos usar getAttribute
console.log(logo.getAttribute('src'));

//pero para otros atributos que no son estandar javascript no los creara en el objeto y no podremos leerlos tampoco. en este caso diseñador no es un atributo estandar o propio de una imagen
console.log(logo.designer);
// toda imagen tiene un nombre de clase
console.log(logo.className);

// de todas maneras podemos leer los atributos que no son estandar solamente que tendremos que hacerlo usando getAtribute
console.log(logo.getAttribute('designer'));

//tambien tenemos setAttribute() con la cual podremos establecer o configurar nuevos atributos
console.log(logo.setAttribute('company', 'Bankist'));

// asi como podemos leerlos tambien podemos configurarlos de esta ora manera
logo.alt = 'hermoso logo minimalista';

//# DATA ATTRIBUTES son u tipo especial de atributos que usamos mucho cuando trabajamos en la intefaz del ausuario, especialmente cuando hay que almacenar datos en la interfaz
// estos comienzan con la palabra 'data-' y luego lo que queramos agregar, lo podemos apreciar en nuestra imagen del html donde tenemos 'data-version-number=3.0'. lo especial de estos atributos es que se almacenan y los podemos obtener con 'dataset.versionNumber'
//NOTA debemos cambiar version-number por versionNumber osea a camelCase
console.log(logo.dataset.versionNumber);

//# clases
// solo para recordar algunas de las cosas mas importantes a tener en cuenta
logo.classList.add('a');
logo.classList.remove('a');
logo.classList.toggle('a');
logo.classList.contains('a');
// se puede hacer, pero no debemos usarlo nunca porque reemplaza todas las clases y podriamos tener un grrave problema
logo.className = 'nelson';
*/
console.log('tipos de eventos y controladores de eventos');
/*
//algo importante que debemos saber es que los eventos siempre ocurren lo que hacemos es manejarlos con 'addEventListener' pero si no lo estuvieramos escuchando igual ocurririan

const h1 = document.querySelector('h1');

//'mauseenter' se gatillara cada vez que el mause ingrese a cierto elemento
// h1.addEventListener('mouseenter', function (e) {
//   alert('excelente: estas en el encabezado ahora');
// });
//antiguamente para escuchar un evento se realizaba asi
// h1.onmouseenter = function () {
//   alert('esta era la forma antigua de escuchar un evento');
// };

//existen 2 razones por la cual 'addEventListener' es mejor la primera es = que nos permite agregar multiples oyentes a un mismo evento EJP podemos copiar el mismmo escucha pero cambiarle el tipo que lo gatilla

// h1.addEventListener('mouseenter', function (e) {
//   alert('excelente: estas en el encabezado ahora');
// });

// h1.addEventListener('mouseout', function (e) {
//   alert('excelente: estas saliendo del encabezado ahora');
// });

//la segunda razon es = que podemos eliminar un escucha si ya no lo necesitamos, para poder hacer esto debemos exportar la funcion del escucha a una funcion de nombre y pasarsela de esta forma al escucha a eliminar. de vez en cuando necesitaremos que se escuche una sopla vez.
const alertH1 = function (e) {
  alert('excelente: estas en el encabezado ahora');

  //h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

//no necesariamente 'h1.removeEventListener('mouseenter', alertH1)' debe ir dentro de la funcion , pueden estar en cuallquier lugar, incluso podemos eliminarla despues de un cierto tiempo.
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// por ultimo  tenemos una tercera  forma de escuchar un evento, usando un atributo HTML. pero que ya no deveria usarse. y se trata del evento 'onclick'
*/
console.log('propagacionn de eventos:(burbugeo y captura)');
/*
//NOTA la mayoria de los eventos de javascript pasan por 3 fases, captura, objetivo y burbugeo. debemos saber que cuando un evento sucede este no nace u se crea en el elemento que lo gatillo si no que nace en el elemento padre mas lejano el 'document' y deciende hasta llegar al elemento que lo gatillo (FASE CAPTURA) pasando por todos los elementos padres que este posee, llegando finalmente al elemento que lo gatillo y aca estamos en la fase OBJETIVO donde lo manejamos con nuestro 'addEventListener' para luego comenzar la ultima fase la de BURBUGEO donde regresa nuevamente al document, pasando nuevamente por todos los padres y esta fase es importante porque el evento ocurre en cada uno de los padres por los que pasa esto quiere decir que si ponemos un addEventListener en alguno de los padres tambien podremos capturar el mismo evento. DE MANERA PREDETERMINADA EN LA FASE DE CAPTURA NO PODEMOS ESCUCHAR EL EVENTO PERO HAY TECNICAS QUE NOS PERMITIRAN ESCUCHAR EN ESTA FASA TAMBIEN.

//como ejemplo para poder ver estas etapas selecionamos un elemento de la barra de menu y le daremos colores a cada evento para diferenciarlos.
// para este ejemplo nesecitaremos un color aleatorio como los colores podemos representarlos por numeros rgb(255,255,255)(3 pares de numeros entre 0 y 255) debemos crear estos primero, para luego crear el color
const randonInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
//teniendo nuestra funcion que nos devolvera en este caso un numero entre 0 y 255 creamos el color
const randonColor = () =>
  `rgb(${randonInt(0, 255)},${randonInt(0, 255)},${randonInt(0, 255)})`;
console.log(randonColor());

// ahora seleccionamos los links del menu y sus padres, podemos observar en este link (que es el hijo) que al hacer click este cambia de color, pero tambiaen cambian los otros (padres) esto demuestra el bubugeo que sube desde el hijo pasando por todos los padres hasta llegar al 'document'
document.querySelector('.nav__link').addEventListener('click', function (e) {
  //RECORDAR que THIS en el contexto de un escucha apunatara al elemento en el que esta adjunto el escucha osea al elemento que gatilla el evento.
  this.style.backgroundColor = randonColor();
  console.log('link', e.target, e.currentTarget);
  console.log(this === e.currentTarget);

  //otra cosa que podemos hacer es detener la propagacion(burbugeo), si detenemos el burbugeo los padres ya no escucharan el evento por lo que no cambiaran de color. aunque no es una buena idea detenerla
  //e.stopPropagation();
});
// y podemos observar tambien que al hacer click en alguno de los padres solo cambian de color los padres de este y no los hijos, quedando claro que el burbugeo sube de hijo a padres y no  al revez.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randonColor();
  console.log('contenedor', e.target, e.currentTarget);
});
//target es el lugar donde se origino el evento en este caso el click, NO el elemento que esta adjunto al escucha. observamos que es el mismo objetivo aunque el elemento adjunto no es el mismo el target es el mismo porque se esta manejando el mismo evento.
//el currentTarget si es el elemento en el que esta adjunto el escucha, osea el elemento en el que se origino el evento. si lo analizamos bien nos damos cuenta que el currentTarget es igual al objeto que apunta la palabra this (CURRENTTARGET === THIS)
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randonColor();
    console.log('barra-nav', e.target, e.currentTarget);
  },
  // a simple vista parece lo mismo, pero si miramos en la consola veremos que el primer elemento en escuchar el evento es la barra-nav, osea esta escuchando de arribahacia abajo (fase de captura)
  false
);

//NOTA en general la fase de captura no se suele utilizar para escuchar eventos, porque simplemente no es util es mucho mas util la fase de burbugeo para lo que se llama DELEGACION DE EVENTOS, ES POR ESO QUE DE FORMA PREDETERMINADA VIENE DESACTIVADO, pero de todas formas podemos activarla. solo devemos agregar un tercer parametro a la funcion 'addEventListener' en este caso para activarla es 'true'. tener false seria lo mismo que no activar la fase de captura o dejarlo sin tercer parametro.
*/
console.log('delagacion de eventos');
/*

// podemos usar el poder del burbugeo para implementar esta caracteristica, esto lo implementaremos en la aplicasion.
*/
console.log('DOM traversing');
/*
//# basicamente es como caminar atravez del DOM, por lo que podemos seleccinar elementos(etiquetas) en funcion de otros elementos(HIJOS , PADRES, PRIMER HIJO, ULTIMO HIJO, PRIMER PADRE ETC). el concepto de padre hijos u hermanos hace referencia al nivel que poseen las etiquetas dentro de su jerarquia los eleemntos que estan dentro de otros son los hijos y el elemento que lo posee es su padre a su vez los elementos que estan al mismo nivel son hermanos.
const h1 = document.querySelector('h1');

//VAMOS HACIA ABAJO, osea seleccionamos los elementos hijos de h1.  usamos querySelector porque no solo funciona en el document si no en los elementos tambien y no importa que tan profundo  sean los hijos siempre los encontrara, y si huvieran otros elementos con esta clase, pero no fuesen hijos de h1 No serian seleccionados.
console.log(h1.querySelectorAll('.highlight'));

//en muchas ocasiones necesitaremos todos los hijos sean directos o no directos y para  eso tenemos 'childNodes' que nos devolvera todos los nodos hijos de este elemeto RECORDAR que los nodos pueden ser cualquier cosa(texto, comentarios, etc)
console.log(h1.childNodes);
//si queremos solamente los elementos hijos directos nos devolvera los mismos elementos que 'querySelectorAll' +  <br> , pero en una 'htmlCollection' que recordemos se actualiza automaticamente
console.log(h1.children);

//AHORA EL PRIMER HIJO.
h1.firstElementChild.style.color = 'blue';

//EL ULTIMO HIJO
h1.lastElementChild.style.color = 'red';

//VAMOS HACIA ARRIBA
//similar al childNode seleccionamos el nodo padre directo
console.log(h1.parentNode);

//en este caso coincide el nodo padre directo con el elemento padre directo
console.log(h1.parentElement);

// en otras muchas ocasiones necesitaremos padres que no sean padres directos o tal vez que esten algo mas lejos, pero que tengan alguna clase en particular en este ejemplo el padre mas directo o cercanop, pero con la clase 'header'. usamos la propiedad personalizada
h1.closest('.header').style.background = 'var(--gradient-secondary)';
//tambien es posible que el atributo(clase) a encontrar coincida con el elemento que llama a la funcion closet, por lo que devolveria el mismo elemento en este caso seria h1 el elemento devuelto. commo se aprecia en el ejemplo comentado
//h1.closest('h1').style.background = 'var(--gradient-primary)';

// NOTA 'querySelector' busca hijos no importa lo lejos que esten del padre en el DOM, mientras que 'closest' busca padres no importa que tan lejos esten del hijo en el DOM. podriamos decir que son similares en el sentido de que son opuestos

//hacia los costados: hijos
// en este caso solo podemos acceder a los hijos directos, osea al anterior y el siguiente

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

//tambien podemos obtener los nodos hermanos
console.log(h1.previousSibling);
console.log(h1.nextSibling);

//si queremos obtener todos los elementos(etiquetas) hermanos podemos hacer un truco seleccionamos el padre directo y desde el padre buscamos y seleccionamos a los hijos
console.log(h1.parentElement.children);

//solo por diversion le cambiamos la escala a los hermanos. como nos devuelve un htmlCollection lo propagamos dentro de un array para luego recorrerlo y poder cambiarle la escala a todos menos al elemento en si (h1).
[...h1.parentElement.children].forEach(function (ele) {
  if (ele !== h1) ele.style.transform = 'scale(0.5)';
});
*/
console.log('componente de PESTAÑAS');
//# es un componente muy utilizado y popular hoy en dia por muchas paginas web y aplicasiones, que permite darle determinadas caracteristicas a diferentes pestañs para diferenciarlas cuando se estan manipulando
