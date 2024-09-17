'use strict';
console.log('DESAFIO N° 1');
/*
//¡Creemos una aplicación de encuesta sencilla! Una encuesta tiene una pregunta, una serie de opciones entre las que la gente puede elegir y una Matriz con el número de respuestas para cada opción. Estos datos se almacenan en el motor de arranque.objeto 'encuesta' a continuación.

//1. Cree un método llamado 'registerNewAnswer' en el objeto 'encuesta'. El método hace 2 cosas:
//1.1. Muestra una ventana que solicita al usuario que ingrese el número del
//opción seleccionada. El mensaje debería verse así:
//¿Cuál es tu lenguaje de programación favorito?
//0: JavaScript
//1: pitón
//2: óxido
//3:C++
//(Escribir número de opción)

//1.2. Según el número de entrada, actualice la propiedad de la matriz 'respuestas'. Para Por ejemplo, si la opción es 3, aumente el valor en la posición 3 de la matriz en 1. Asegúrese de verificar si la entrada es un número y si el número hace sentido (por ejemplo, la respuesta 52 no tendría sentido, ¿verdad?)
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  //creamoas el metodo
  registerNewAnswer() {
    const respuesta = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          '\n'
        )} \n Escriba el numero de su opcion`
      )
    );
    //evaluamos si la respuesta es realmente un numero y si ese numero corresponde a un numero valido y luego usamos el cortocircuito para incrementar el valor segun sea la respuesta RECORDAR que para usar una variable como propiedad debemos usar corchetes
    typeof respuesta === 'number' &&
      //RECORDAR que el cortocircuito para el operador '&&' funciona cuando se encuentra un valor falso si no hay ningun valor falso ejecutara la ultima opcion
      respuesta < this.options.length &&
      this.answers[respuesta]++;
    console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  //asi establecemos un parametro de forma predeterminada
  displayResults(tipo = 'array') {
    if (tipo === 'array') {
      console.log(this.answers);
    } else if (tipo === 'string') {
      console.log(
        `los resultados de la encuesta son : ${this.answers.join(', ')}`
      );
    }
  },
};

//2. Llame a este método cada vez que el usuario haga clic en el botón "Responder encuesta". RECORDAR que cuando utilizamos un objeto con un listener la palabra THIS apuntara al elemento al cual esta atado es por eso que usamos bind porque necesitamos que apunte al objeto 'poll'.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//3. Cree un método 'displayResults' que muestre los resultados de la encuesta. El método toma una cadena como entrada (llamada 'tipo'), que puede ser 'cadena' o 'matriz'. Si el tipo es 'matriz', simplemente muestre la matriz de resultados tal como está, usando consola.log(). Esta debería ser la opción predeterminada. Si el tipo es 'cadena', muestra una cadena como "Los resultados de la encuesta son 13, 2, 4, 1".

//4. Ejecute el método 'displayResults' al final de cada Llamada al método 'registerNewAnswer'.
//5. Bonificación: utilice el método 'displayResults' para mostrar las 2 matrices en la prueba datos. Utilice la opción 'matriz' y 'cadena'. No pongas los arrays en la encuesta. ¡objeto! Entonces, ¿cómo debería verse la palabra clave this en esta situación?

//Datos de prueba para bonificación:
//§ Dato 1: [5, 2, 3]
//§ Dato 2: [1, 5, 3, 9, 6, 1]
//Sugerencias: utilice muchas de las herramientas que aprendió en esta y la última sección.

//como la palabra this esta apuntando el objeto 'POLL' debemos hacer que apunte a nuestro array y para eso usamos el metodo call le pasamos el objeto al cual quiero que apunte.
poll.displayResults.call({ answers: [5, 2, 3] });
*/
console.log('DESAFIO N° 2');
//Esto es más un desafío de pensamiento que un desafío de codificación 🤓

//1. Tome el IIFE(devolucion de funcion expresiva inmediata) a continuación y al final de la función, adjunte un detector de eventos que cambia el color del elemento h1 seleccionado ('encabezado') a azul, cada vez Se hace clic en el elemento del cuerpo. ¡No vuelvas a seleccionar el elemento h1!
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

//2. ¡Y ahora explícate a ti mismo (o a alguien a tu alrededor) por qué funcionó esto! Toma todo el tiempo que necesitas. Piense en cuándo se ejecuta exactamente la función de devolución de llamada, y qué significa eso para las variables involucradas en este ejemplo.

//basicamente se pudo realizar el cambio de color gracias al cierre este se produjo cuando y porque al momento de ejecutar la funcion esta se ejecuta solo una vez y nunca mas entonces en esta ejecusion se establecen los parametros y todo, pero al momento de realizar la accion 'click' esta funcion ya no esta en el callStack aun asi la callback funcion puede utilizar la variable header para cambiar el color.
