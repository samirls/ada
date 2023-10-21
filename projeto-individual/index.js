const enviarEmail = require("./envia-email");
const prompt = require("prompt-sync")();

const clientsLastMonth = [
  {
    name: "Joao da Silva",
    email: "joaodasilva@gmail.com",
    allowMarketing: false,
  },
  {
    name: "Andreia Gusmao",
    email: "andreiagusmao@gmail.com",
    allowMarketing: true,
  },
  {
    name: "Anacleto Borges",
    email: "anacletoborges@gmail.com",
    allowMarketing: true,
  },
  {
    name: "Zafora da Fora",
    email: "zaforadafora@gmail.com",
    allowMarketing: true,
  },
  {
    name: "Guilherme Santiago",
    email: "guilhermesantiago@gmail.com",
    allowMarketing: false,
  },
];

function isMonday() {
  return new Date().getDay() === 1;
}

if (isMonday() === false) {
  console.log("Bem vindo ao programa de enviar emails!")
  console.log('Como hoje não é segunda, nenhum email será enviado.')
  console.log('Aplicação finalizada.')
}

function allowedMarketingEmails() {
  const defaultAddressees = clientsLastMonth
    .filter((client) => client.allowMarketing === true)
    .map((client) => client.email);

  return defaultAddressees;
}

let defaultAddressees = allowedMarketingEmails();
let defaultSubject =
  "Novos veículos, mais vendidos e promoções incríveis na CarStore!";
let defaultBody =
  "Olá caro Cliente! Como você visitou a nossa loja recentemente, gostariamos de atualizar sobre novos veículos que chegaram na nossa loja! Temos condições e preços imperdíveis!";

console.log("Bem vindo ao programa de enviar emails!");

function sendEmail() {
  if (true) {
    console.log(
      "Digite 1 para enviar um email padrão para todos os clientes que optaram por receber comunicações de marketing."
    );
    console.log(
      "Digite 2 para definir o assunto e o corpo do email antes de enviar."
    );
    console.log(
      "Digite 3 para cancelar e sair da aplicação."
    );
    let userPrompt = prompt();

    if (userPrompt === "1") {
      const result = enviarEmail(defaultAddressees, defaultSubject, defaultBody);

      console.log(result.message);
      console.log("Aplicação finalizada");

    } else if (userPrompt === "2") {
      console.log("Digite o assunto:");
      let subjectModified = prompt();

      console.log("Digite o corpo do email:");
      let bodyModified = prompt();

      const result = enviarEmail(defaultAddressees, subjectModified, bodyModified);

      if(result.status === 'Success'){
        console.log(result.message)
        console.log("Aplicação finalizada.")
      } else{
        console.log(result.message)
        sendEmail();
      }

    }else if (userPrompt === "3"){
      console.log("Aplicação finalizada.");
    } else {
      console.log("Opção inválida.");
      sendEmail();
    }
  }
}

sendEmail();


//o que são funções de declaração(hoisted) e funções de expressão (não hoisted)?