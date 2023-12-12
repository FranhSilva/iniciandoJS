console.log("Trabalhando com loops");

const listaDeDestinos = ["Salvador","São Paulo","Rio de Janeiro","Curitiba","Cascavel"];

const passagemComprada = true;
const idadeComprador = 19;
const estaAcompanhada = true;
let destino = "Estados Unidos";

console.log("Lista de destinos possíveis");
console.log(listaDeDestinos);

if(passagemComprada && (idadeComprador >= 18 || !estaAcompanhada)){
    console.log(`Você comprou ${listaDeDestinos[1]}. Destinos restantes:`);
    listaDeDestinos.splice(1,1);
    console.log(listaDeDestinos);
} else {
    console.log("Não há listas disponíveis. Idade do comprador não permitida.");
};

let contador = 0;
let destinoExiste = false;
while(contador <= listaDeDestinos.length){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        console.log(`${destino} está disponível`);
        break;
    }
    contador++;
}

if(destinoExiste == false){
    console.log(`${destino} não está disponível`);
};





