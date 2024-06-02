console.log('DESAFIO 1');
/*
//Mark y John están intentando comparar su IMC (índice de masa corporal), que se calcula mediante la fórmula: BMI = mass / height ** 2 = mass / (height * height)(masa en kg y altura en metros).

//Tu tarea es escribir un código para ayudarlos:

//DATOS DE PRUEBA 1: Marks pesa 78 kg y mide 1,69 m. Juan pesa 92 kg y mide 1,95 m.
//DATOS DE PRUEBA 2: Marks pesa 95 kg y mide 1,88 m. John pesa 85 kg y mide 1,76 m.

//1- Almacene la masa y la altura de Mark y John en variables llamadas massMark, heightMark, massJohn, heightJohn
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//2- Calcule el IMC de ambos usando la fórmula y almacene los resultados en dos variables llamadas BMIMarky BMIJohn.
const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);
//3- Registre el valor de BMIMarky BMIJohnen la consola.
console.log(bmiMark, bmiJohn);
//4- BONIFICACIÓN : cree una variable booleana markHigherBMI que contenga información sobre si Mark tiene un IMC más alto que John. Regístrelo en la consola también

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
*/
console.log('DESAFIO2 2');
/*
//Utilice el ejemplo de BMI del Desafío n.º 1 y el código que ya escribió y mejórelo:

//1. Imprima un buen resultado en la consola, indicando al usuario quién tiene el IMC más alto. El mensaje puede ser:
//"Mark's BMI is higher than John's!"o "John's BMI is higher than Mark's!".
if (bmiMark > bmiJohn) {
  console.log(`el IMC de mark es mas alto que el de john`);
} else {
  console.log(`el IMC de John es mas alto que el de mark`);
}

//2. Modifique los resultados anteriores para utilizar literales de plantilla para incluir los valores de IMC en los resultados.
//Ejemplo: "Mark's BMI (28.3) is higher than John's (23.9)!"o "John's BMI (29.1) is higher than Mark's (27)!".
if (bmiMark > bmiJohn) {
  console.log(`el IMC de mark (${bmiMark}) es mas alto que el de john (${bmiJohn})`);
} else {
  console.log(`el IMC de john (${bmiJohn}) es mas alto que el de mark (${bmiMark})`);
}
*/
console.log('DESAFIO 3');
/*
//Hay dos equipos de gimnasia: Delfines y Koalas. Compiten entre sí 3 veces. ¡El ganador con el puntaje promedio más alto gana un trofeo!

//DATOS DE PRUEBA: Los delfines obtuvieron 96, 108 y 89. Los koalas obtuvieron 88, 91 y 110.

//1. Calcule el puntaje promedio de cada equipo, utilizando los datos de las pruebas que se incluyen a continuación. Se debe asignar la puntuación promedio de los delfines a la scoreDolphins variable y la puntuación promedio de los koalas se debe asignar a la scoreKoalas variable.
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

//2. Compare las puntuaciones promedio del equipo para determinar el ganador de la competencia e imprima en la consola:
if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy');
} else {
  console.log('Both win the trophy');
}
//3. Bonificación 1: Incluir el requisito de una puntuación mínima de 100. Con esta regla, El equipo solo gana si tiene una puntuación más alta que el otro equipo, y al mismo tiempo una  puntuación de al menos 100 puntos. Sugerencia: use un operador lógico para probar el mínimo puntuación, así como múltiples bloques else-if 😉

//Bonus 2:Bonificación 2: ¡la puntuación mínima también se aplica en caso de empate! Entonces un empate sólo ocurre cuando ambos equipos tienen el mismo puntaje y ambos tienen un puntaje mayor o igual a 100 puntos. De lo contrario, ningún equipo ganará el trofeo.
if ((scoreDolphins > scoreKoalas) & (scoreDolphins >= 100)) {
  console.log('los desfines son  los ganadores');
} else if ((scoreKoalas > scoreDolphins) & (scoreKoalas >= 100)) {
  console.log('los koalas son los ganadores');
} else if ((scoreDolphins === scoreKoalas) & (scoreDolphins >= 100) & (scoreKoalas >= 100)) {
  console.log('empate de ambos equipos');
} else {
  console.log('no hay equipos ganadores');
}

// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
console.log('DESAFIO 4');
//Steven quiere construir una calculadora de propinas muy simple para cada vez que va a comer a un restaurante. En su país es habitual dejar una propina del 15% si el valor de la factura está entre 50 y 300. Si el valor es diferente, la propina es del 20%.

//Datos de prueba:
//§ Dato 1: Prueba para billetes con valores 275, 40 y 430
//Consejos:
//§ Para calcular el 20% de un valor, simplemente multiplíquelo por 20/100 = 0,2
//§ El valor X está entre 50 y 300, si es >= 50 && <= 300

//1. Calcule la propina, según el valor de la factura. Cree una variable llamada 'tip' para este. No está permitido usar una declaración if/else 😅 (Si te resulta más fácil, puedes comience con una declaración if/else y luego intente convertirla a un ternario ¡operador!)
const factura = 430;
const propina = factura >= 50 && factura <= 300 ? 275 * (15 / 100) : factura * (20 / 100);

//2. Imprime una cadena en la consola que contiene el valor de la factura, la propina y el valor final. (factura + propina). Ejemplo: “La factura fue 275, la propina fue 41,25 y el valor total 316,25”
console.log(
  `la factura salio ${factura} la propina salio ${propina} en total es ${factura + propina}`
);
