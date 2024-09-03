'use strict';

console.log('DESAFIO # 1');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
//¡Estamos creando una aplicación de apuestas de fútbol. Supongamos que obtenemos datos de un servicio web sobre un determinado juego (variable 'juego' en página siguiente). En este desafío vamos a trabajar con esos datos.

//1. Cree una matriz de jugadores para cada equipo (variables 'jugadores1' y 'jugadores2')
const [jugadores1, jugadores2] = game.players;
console.log(jugadores1);
console.log(jugadores2);

//2. El primer jugador en cualquier conjunto de jugadores es el portero y los demás son de campo. Para el Bayern de Múnich (equipo 1), cree una variable ('gk') con el nombre del portero y una matriz ('fieldPlayers') con los 10 restantes jugadores de campo.
const [gt, ...fieldPlayers] = jugadores1;
console.log(gt);
console.log(fieldPlayers);

//3. Cree una matriz 'todos los jugadores' que contenga todos los jugadores de ambos equipos (22 jugadores)
const todosLosJugadores = [...jugadores1, ...jugadores2];
console.log(todosLosJugadores);

//4. Durante el partido, el Bayern de Múnich (equipo 1) utilizó 3 jugadores suplentes. Así que crea un nueva matriz ('players1Final') que contiene todos los jugadores originales del equipo1 más 'Thiago', 'Coutinho' y 'Perisic'
const players1Final = [...jugadores1, 'Thiago', 'Coutinho', 'Périsic'];
console.log(players1Final);

//5. Según el objeto game.odds, cree una variable para cada cuota (llamada 'equipo1', 'empate' y 'equipo2')
const { team1: equipo1, x: empate, team2: equipo2 } = game.odds;
console.log(equipo1, empate, equipo2);

//otra opcion podria ser esta
const {
  odds: { team1, x, team2 },
} = game;
console.log(team1, x, team2);

//6. Escribe una función ('printGoals') que reciba un número arbitrario de jugadores. nombres (no una matriz) e imprime cada uno de ellos en la consola, junto con el número de goles que se marcaron en total (número de nombres de jugadores ingresados)
//*no queremos un array perse, por eso usamos el operador de resto y funcionara como resto, porque recibe un array que hay que desenpaquetar
const printGoals = function (...jugadores) {
  console.log(`${jugadores.length} goles en total de los jugadores ${jugadores}`);
};
//*podemos hacerlo de manera normal como se muestra, pero lo que queremos es hacerlo con lo que hemos aprendido (destructuracion, operador de propagacion y operador de resto)
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
//*como queremos los valores individuales usamos el operador de propagacion(para sacarlos del array)
printGoals(...game.scored);
//# INPORTANTE estos 3 puntos funcionaran de una u otra manera(propagacion= desenpaque, resto=empaca) dependieno de como reciba estos valores u como los queremos
//7. El equipo con la cuota más baja tiene más probabilidades de ganar. Imprimir en la consola que El equipo tiene más probabilidades de ganar, sin usar una declaración if/else o el ternario. operador.
//* debemos recordar que el cortocircuito para el operador || funciona devolviendo el primer valor true que encuentre y para el operador  && devolvera el priemer false que encuentre, pero si no se encuentra nunguno de estos devolveran el ultimo.
team1 > team2 || console.log('el equipo 2 tiene mas probabilidades de ganar');
team2 > team1 && console.log('el equipo 1 tiene mas probabilidades de ganar');

//Datos de prueba para 6.: Primero, utilice a los jugadores 'Davies', 'Muller', 'Lewandowski' y 'Kimmich'. Luego, llama nuevamente a la función con jugadores de game.scored
*/
console.log('DESAFIO # 2');
/*
//¡Sigamos con nuestra aplicación de apuestas de fútbol! Sigue usando la variable 'juego' de antes.

//1. Recorra la matriz game.scored e imprima el nombre de cada jugador en la consola. junto con el número del gol (Ejemplo: "Gol 1: Lewandowski")
for (const valor of game.scored.entries()) {
  console.log(` Gol N° ${valor[0] + 1}: ${valor[1]} `);
}

//2. Utilice un bucle para calcular la impar promedio y regístrelo en la consola (ya estudié cómo calcular promedios, puedes ir a verificar si no lo recuerdas)
let contador = 0;
for (const valor of Object.values(game.odds)) {
  contador += valor;
}
console.log(contador / Object.values(game.odds).length);

//3. Imprime las 3 probabilidades en la consola, pero en un formato agradable, exactamente así: Cuota de victoria Bayern Múnich: 1,33 Cuota de empate: 3,25 Cuota de victoria Borrussia Dortmund: 6,5. Obtenga los nombres de los equipos directamente del objeto del juego, no los codifique (excepto "empate"). Sugerencia: observe cómo las probabilidades y los objetos del juego tienen la mismos nombres de propiedad 😉
for (const [team, odds] of Object.entries(game.odds)) {
  const str = team === 'x' ? 'empate' : `victoria ${game[team]}`;
  console.log(`probabilidad de ${str}: ${odds}`);
}

//# NOTA fijarse que para los array usamos el metodo 'entries' directamente, pero para los objetos usamos el objeto 'Object'
//4. Bonificación: crea un objeto llamado 'puntuadores' que contiene los nombres de los jugadores que marcaron como propiedades, y el número de goles como valor. en esto
// juego, se verá así:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
const scorers = {};
for (const player of game.scored) {
  //en cada iteracion creamos la clase (jugador) si es que no existiera, si ya existe ese jugador se le suma uno, como en la primera iteracion el array esta vacio tomara el valor del else y pasara  a crear al jugador 'Lewandowski' como ya existe este jugador la segunda vez que se tope con el pasara al if y se le sumara otro 1.
  scorers[player] ? scorers[player]++ : scorers[player];
}
console.log(scorers);
*/
console.log('DESAFIO N° 3');
/*
//¡Sigamos con nuestra aplicación de apuestas de fútbol! Esta vez, tenemos un mapa llamado 'gameEvents' (ver más abajo) con un registro de los eventos que ocurrieron durante el juego. Los valores son los acontecimientos mismos, y las claves son los minutos en los que sucedió cada evento (un partido de fútbol tiene 90 minutos más algo de tiempo extra).

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1. Cree una matriz de 'eventos' de los diferentes eventos del juego que sucedieron (no duplicados)
const eventos = [...new Set(gameEvents.values())];
console.log(eventos);
//console.log([...eventos]);

//2. Una vez finalizado el partido se constató la tarjeta amarilla del minuto 64. fue injusto. Así que elimina este evento del registro de eventos del juego.
gameEvents.delete(64);
console.log(gameEvents);

//3. Calcule y registre la siguiente cadena en la consola: "Ocurrió un evento, el promedio, cada 9 minutos" (ten en cuenta que un partido tiene 90 minutos)
console.log(`ocurrio un evento en promedio cada ${90 / gameEvents.size} minutos`);

//ahora esto lo podemos hacer de manera dinamica dependiendo de cuanto hayya durado en realidad el juego. obtenemos las llaves primero(porque los minutos son las llaves) y con el metodo pop eliminamos la ultima llave (que corresponde al ultimo minuto del partido). esto nos devuelve ese valor (llave) ya que el metodo pop lo elimina si no que tambien lo retorna.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`ocurrio un evento en promedio cada ${time / gameEvents.size} minutos`);

//4. Recorra 'gameEvents' y registre cada elemento en la consola, marcando ya sea en la primera o segunda mitad (después de 45 min) del juego, así:[PRIMERA MITAD] 17:⚽META
for (const [key, valor] of gameEvents) {
  const mitad = key <= 45 ? 'PRIMERA' : 'SEGUNDA';
  console.log(`[${mitad} MITAD] ${key} : ${valor}`);

  //2 formas de realizar el mismo ejercicio

  if (key <= 45) {
    console.log(`[PRIMERA MITAD] ${key}: ${valor}`);
  } else {
    console.log(`[SEGUNDA MITAD] ${key}: ${valor}`);
  }
}
*/
console.log('DESAFIO N° 4');
//Escriba un programa que reciba una lista de nombres de variables escritas en subrayado_case y convertirlos a camelCase. La entrada provendrá de un área de texto insertada en el DOM (consulte el código a continuación para inserte los elementos), y la conversión se producirá cuando se presione el botón.

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

////Consejos:
//§ Recuerda qué carácter define una nueva línea en el área de texto 😉
//§ La solución solo necesita funcionar para una variable formada por 2 palabras, como a_b
//§ Empieza sin preocuparte por el ✅. Aborde eso solo después de tener la variable la conversión de nombre funciona 😉
//§ Este desafío es difícil a propósito, así que comience a observar la solución en caso de que estás estancado. ¡Entonces haz una pausa y continúa!

//¡Después, pruebe con sus propios datos de prueba!

/*Datos de prueba (pegados en el área de texto, incluidos espacios):
subrayado_case
 primer_nombre
alguna_variable
 calcular_AGE
salida_retrasada
*/

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const filas = text.split('\n');
  for (const [i, valor] of filas.entries()) {
    const [primera, segunda] = valor.toLowerCase().trim().split('_');
    //console.log(valor, primera, segunda);

    const salida = `${primera}${segunda.replace(segunda[0], segunda[0].toUpperCase())}`;
    console.log(`${salida.padEnd(20)}${'✔'.repeat(i + 1)}`);
  }
});

//Debería producir este resultado (5 salidas separadas de console.log):
//subrayadoCase     ✅
//primerNombre      ✅✅
//algunaVariable    ✅✅✅
//calcularEdad      ✅✅✅✅
//SalidaRetrasada   ✅✅✅✅✅
