/* const myArray = ['canario', 'cobra'];

const cachorro = 'cachorro';
const gato = 'gato';

myArray.push(cachorro)
myArray.push(gato)

if (myArray.length === 4) {
  console.log(myArray)
} else {
  console.log(false)
} */
////////////////////////////////////////////////////////////////////////




/* const numeros = [1, 2, 3, 4];
numeros.pop();

console.log(numeros.length)

numeros.pop();

console.log(numeros.length)

console.log(numeros)
 */
////////////////////////////////////////////////////////////////////////




/* const linguagens = ["javascript", "python", "golang", "java"];

linguagens.shift();

console.log(linguagens.length);

linguagens.shift();

console.log(linguagens.length); */
////////////////////////////////////////////////////////////////////////





/* const produtos = ["sabao", "detergente", "amaciante", "alvejante", "sapolio"];

console.log(produtos.at(0))
console.log(produtos.at(2))
console.log(produtos.at(produtos.length -1)) */
/////////////////////////////////////////////////////////////////////////





/* const lista1 = ["banana", "pera", "melancia"];
const lista2 = ["alface", "tomate", "rucula"];

let listaConcat1 = lista1.concat(lista2);

console.log(listaConcat1);
console.log(listaConcat1.length);

const lista3 = ["limao", "laranja", "acerola"];
const lista4 = ["pimenta", "pimentao", "alho"];

let listaConcat2 = lista1.concat(lista2, lista3, lista4);

console.log(listaConcat2) */
/////////////////////////////////////////////////////////////////////////






/* var pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 23 },
];


let maioridade = pessoas.every((pessoa) => pessoa.idade >= 18);
let maisDe3 = pessoas.every((pessoa) => pessoa.nome.length > 3);
let idadeNome = pessoas.every((pessoa) => pessoa.nome && pessoa.idade)

console.log(maioridade)
console.log(maisDe3)
console.log(idadeNome) */
/////////////////////////////////////////////////////////////////////






/* const alunos = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 18 },
  { nome: "Maria", idade: 22 },
  { nome: "João", idade: 17 },
  { nome: "Lucas", idade: 19 },
  { nome: "Julia", idade: 21 },
];

let maioridade = alunos.filter((aluno) => aluno.idade >= 18);

let menores20 = alunos.filter((aluno) => aluno.idade < 20);

let letraJ = alunos.filter((aluno) => aluno.nome.startsWith('J'));


console.log(maioridade);
console.log(menores20);
console.log(letraJ); */
///////////////////////////////////////////////////////////////////////////////




/* const lugares = [
  { nome: "Sala de Reuniões", capacidade: 8 },
  { nome: "Auditório", capacidade: 50 },
  { nome: "Sala de Treinamento", capacidade: 20 },
  { nome: "Sala de Conferências", capacidade: 30 },
  { nome: "Sala de Estudos", capacidade: 12 },
];

let maisDe10 = lugares.find((lugar) => lugar.capacidade >= 10);

let maisDe25 = lugares.find((lugar) => lugar.capacidade >= 25);

let maisDe40 = lugares.find((lugar) => lugar.capacidade >= 40);

console.log(maisDe10);
console.log(maisDe25);
console.log(maisDe40); */
/////////////////////////////////////////////////////////////////////////////





/* const pizzas = [
  { sabor: "Mussarela", valor: 20 },
  { sabor: "Calabresa", valor: 25 },
  { sabor: "Marguerita", valor: 28 },
  { sabor: "Frango com Catupiry", valor: 32 },
  { sabor: "Portuguesa", valor: 30 },
];

let pizzaValor = pizzas.forEach((pizza) => console.log(pizza.sabor, pizza.valor)) */
//////////////////////////////////////////////////////////////////////////////////////





/* const pessoas = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

const pessoasComIMC = pessoas.map((pessoa) => {
  const imc = pessoa.peso / (pessoa.altura * pessoa.altura);
  return { nome: pessoa.nome, imc };
});

console.log(pessoasComIMC); */
//////////////////////////////////////////////////////////////////////////////////////



/* const alunos = [
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Pedro", notas: [5, 6, 7] },
  { nome: "Maria", notas: [9, 8, 10] },
  { nome: "João", notas: [6, 7, 8] },
  { nome: "Lucas", notas: [8, 9, 7] },
  { nome: "Julia", notas: [10, 8, 9] },
];

const alunoMedia = alunos.map((aluno) => {
  const somaNotas = aluno.notas.reduce((a, b) => a + b, 0);
  const media = somaNotas / aluno.notas.length;

  return {
    nome: aluno.nome,
    media: media,
  };
});

console.log(alunoMedia);  */
////////////////////////////////////////////////////////////////////////////////////////////




