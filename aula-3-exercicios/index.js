/*
  Crie um algoritmo usando o for que leia uma lista.
  Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
  Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];
  Lista -> [1,2,3,4,5,6,7,8,9]
  [2, 4, 6, 8] -> pares
  [1, 3, 5, 7, 9] -> impares
*/

/* let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let listaPares = [];

let listaImpares = [];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] % 2 === 0) {
    listaPares.push(lista[i])
  } else {
    listaImpares.push(lista[i])
  }
}

console.log(`Lista de números pares: ${listaPares}`);
console.log(`Lista de números ímpares: ${listaImpares}`); */




/*
  Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
  que contém nome, nota1 e nota2. Use o for para percorer esse array
  e calcular a média das duas notas de cada aluno.
  Ao final, imprimir o nome do aluno e a sua média
*/
/* const listaDeAlunos = [
  { nome: "João", notas: [8, 7, 5, 4] },
  { nome: "Maria", notas: [9, 8, 5, 3] },
  { nome: "Carlos", notas: [6, 5, 3, 2] },
  { nome: "Ana", notas: [7, 6, 1] },
  { nome: "Pedro", notas: [10, 9, 9] },
  { nome: "Lúcia", notas: [8, 7, 8, 8] },
  { nome: "Fernando", notas: [7, 6] },
  { nome: "Camila", notas: [9, 8] },
  { nome: "Rafael", notas: [6, 5, 9, 8] },
  { nome: "Juliana", notas: [10, 9, 6, 9] },
];

for (let i = 0; i < listaDeAlunos.length; i++) {

  let media = 0;

  for (let j = 0; j < listaDeAlunos[i].notas.length; j++) {
    media += listaDeAlunos[i].notas[j] / listaDeAlunos[i].notas.length;
  }

  console.log(`Aluno: ${listaDeAlunos[i].nome}. Média: ${media}`)
} */




/*
  Você foi convidado para desenvolver um script para realizar os sorteios para uma casa de apostas (estilo mega sena). 
  O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60. Para gerar um número aleatório, pode-se utilizar o método 
  random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

/* numerosSorteados = [];

for (let i = 0; i < 6; i++){
  numerosSorteados.push( Math.round(Math.random() * 60) + 1)
}

console.log(numerosSorteados) */