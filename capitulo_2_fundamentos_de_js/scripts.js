// 1 - let e const
if (true) {
  let blockScoped = "Eu sou limitado ao escopo deste bloco";
  console.log(blockScoped); // Funciona
}
// console.log(blockScoped); // Erro! blockScoped não está definido fora do bloco

const myObj = { name: "Matheus" };
myObj.name = "Hora de Codar"; // Funciona, pois estamos modificando uma propriedade do objeto e não a constante em si.
// myObj = {}; // Erro! Não podemos reatribuir uma constante

function greet(name) {
  return "Olá, " + name + "!";
}

const greet2 = (name) => "Olá, " + name + "!";

function Timer() {
  this.seconds = 0;
  setInterval(function () {
    this.seconds++; // Aqui, `this` não se refere ao objeto Timer, mas a um outro contexto (global ou undefined em modo estrito)
  }, 1000);
}

const timer = new Timer();
// setTimeout(() => console.log(timer.seconds), 3100); // Esperado 3, mas imprime 0

// Usando arrow function para resolver o problema
function CorrectTimer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++; // Aqui, `this` se refere ao objeto CorrectTimer, como esperado
  }, 1000);
}

const correctTimer = new CorrectTimer();
// setTimeout(() => console.log(correctTimer.seconds), 3100); // Imprime 3, como esperado

// 4 - Destructuring
const person = {
  firstName: "João",
  lastName: "Silva",
  age: 30,
};

const { firstName, age } = person;

console.log(firstName); // João
console.log(age); // 30

const { firstName: fName, age: yearsOld } = person;

console.log(fName); // João
console.log(yearsOld); // 30

const colors = ["vermelho", "azul", "verde"];

const [firstColor, secondColor] = colors;

console.log(firstColor); // vermelho
console.log(secondColor); // azul

const [, , thirdColor] = colors;

console.log(thirdColor); // verde

function displayInfo({ firstName, age }) {
  console.log(`${firstName} tem ${age} anos.`);
}

const personInfo = {
  firstName: "Maria",
  lastName: "Fernandes",
  age: 25,
};

displayInfo(personInfo); // Maria tem 25 anos.

// 5 - Promises e async/await
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Dados recebidos!");
    // reject("Erro ao buscar os dados!");
  }, 2000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Houve um erro:", error);
  }
}

fetchData();

// 6 - map, filter e reduce
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const numbers2 = [1, 2, 3, 4, 5];
const evens = numbers2.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]

const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

// 7 - Exercícios
const nome = "React";
const versao = "17.0.2";
console.log(`Estudando ${nome} na versão ${versao}`);

const somar = (a, b) => a + b;
console.log(somar(5, 3)); // 8

const [primeiro, , terceiro] = [3, 5, 7];
console.log(primeiro, terceiro); // 3 7

const { nomeLib, empresa } = {
  nomeLib: "React",
  tipo: "Biblioteca",
  empresa: "Facebook",
};
console.log(nomeLib, empresa); // React Facebook

const numeros = [2, 4, 6];
const triplicados = numeros.map((num) => num * 3);
console.log(triplicados); // [6, 12, 18]

const valores = [3, 5, 8, 10, 15];
const pares = valores.filter((valor) => valor % 2 === 0);
console.log(pares); // [8, 10]

const numeros2 = [1, 2, 3, 4];
const soma = numeros2.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma); // 10
