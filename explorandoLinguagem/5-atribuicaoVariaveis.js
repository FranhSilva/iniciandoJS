console.log("Trabalhando com atribuição de variáveis");

const idade = 29;
const nome = "Francielle";
const sobrenome = "Silva";

console.log(nome +" "+ sobrenome);
console.log(nome, sobrenome);
//essas duas opções acima dão o mesmo resultado;

//nova forma de escrever texto no javascript:
console.log(`Meu nome é ${nome}`); //usamos crase para escrever o texto e ${} para chamar variável;
console.log(`Meu nome é ${nome} ${sobrenome}`);

const nomeCompleto = nome + sobrenome;

console.log(`Meu nome é ${nomeCompleto}`);