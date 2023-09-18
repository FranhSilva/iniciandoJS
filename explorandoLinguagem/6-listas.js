console.log(`Trabalhando com listas:`);


// primeiro criamos a lista
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // agora vamos adicionar mais itens na lista

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // remove item da lista;
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); // imprime item específico da lista;

