console.log("Trabalhando com loops");

const listaDeDestinos = ["Salvador","São Paulo","Rio de Janeiro"];

const passagemComprada = true;
const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Lista de destinos possíveis");
console.log(listaDeDestinos);

if(passagemComprada && (idadeComprador >= 18 || estaAcompanhada)){
    console.log(`Você comprou ${listaDeDestinos[1]}. Destinos restantes:`);
    listaDeDestinos.splice(1,1);
    console.log(listaDeDestinos);
} else {
    console.log("Não há listas disponíveis. Idade do comprador não permitida.");
};

