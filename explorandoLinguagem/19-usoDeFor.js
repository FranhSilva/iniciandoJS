console.log("Trabalhando com FOR");

const listaDeDestinos = ["Salvador","São Paulo","Rio de Janeiro","Curitiba","Cascavel"];

const passagemComprada = true;
const idadeComprador = 17;
const estaAcompanhada = true;
let destino = "Cascavel";

console.log(`Lista de Destinos possíveis:\n${listaDeDestinos}`);

if(!passagemComprada && (idadeComprador >= 18 || estaAcompanhada)){
    console.log(`\nVocê comprou ${listaDeDestinos[4]}. Destinos restantes:`);
    listaDeDestinos.splice(4,1);
    console.log(listaDeDestinos);
} else {
    console.log("Não há listas disponíveis. Idade do comprador não permitida ou a passagem não foi comprada.");
};

// let contador = 0;
let destinoExiste = false;

for(let contador = 0; contador <= listaDeDestinos.length; contador++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        console.log(`${destino} está disponível. \nBoa Viagem.`);
        break;
    }
}



