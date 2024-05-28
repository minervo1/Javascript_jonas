console.log('Desafio 1');
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
const bmiMark = (massMark / heightMark) * heightMark;
const bmiJohn = (massJohn / heightJohn) * heightJohn;
//3- Registre el valor de BMIMarky BMIJohnen la consola.
console.log(bmiMark, bmiJohn);
//4- BONIFICACIÓN : cree una variable booleana markHigherBMI que contenga información sobre si Mark tiene un IMC más alto que John. Regístrelo en la consola también

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
