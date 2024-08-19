'use strict';

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
