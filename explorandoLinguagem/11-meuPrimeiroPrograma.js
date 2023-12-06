console.log("Meu Primeiro Programa: Trabalhando com variáveis");

const anoAtual = 2023;
const anoNascimento = 1991;
const anosFuturos = 30;
const descobrir = 2075;
const idadeAtual = anoAtual - anoNascimento;
const idadeFutura = idadeAtual + anosFuturos;
const resultado = idadeAtual + (descobrir - anoAtual);
const pessoa = "Francielle";

console.log("Qual é a idade de " + pessoa + " hoje?");
console.log("A idade de " + pessoa + " é: " + idadeAtual + " anos");

console.log("Quantos anos " + pessoa + " terá daqui há " + anosFuturos + " anos?");
console.log(pessoa + " terá: " + idadeFutura + " anos.");

console.log("Quantos anos " + pessoa + " terá em " + descobrir + "?");
console.log("Francielle terá " + resultado + " anos");