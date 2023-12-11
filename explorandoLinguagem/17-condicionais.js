console.log("Trabalhando com Condicionais");

const listaDeDestinos = ["Salvador","São Paulo","Rio de Janeiro"];

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Lista de destinos possíveis");
console.log(listaDeDestinos);


/* eu quero remover um item da lista se o comprador for maior de idade... se ele for maior de idade,
conseguirá comprar a sua passagem e dessa forma remover o item adquirido.*/

if(idadeComprador >= 18){
    console.log(`Você comprou ${listaDeDestinos[1]}. Destinos restantes:`);
    listaDeDestinos.splice(1,1);
    console.log(listaDeDestinos);
} else if(!estaAcompanhada){
    console.log(`Você comprou ${listaDeDestinos[1]}. Destinos restantes:`);
    listaDeDestinos.splice(1,1);
    console.log(listaDeDestinos);
} else {
    console.log("Não há listas disponíveis. Idade do comprador não permitida.");
}

