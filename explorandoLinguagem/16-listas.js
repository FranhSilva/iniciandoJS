console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`,
);

/*ou
const listaDeDestinos2 = ["Salvador","São Paulo","Rio de Janeiro"];
console.log(listaDeDestinos2);*/


listaDeDestinos.push(`Curitiba`); //adicionar itens

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1); //remover itens: 2 = numero do item na lista; 1 = excluir somente ele;
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //imprime somente o item solicitado;
