console.log(`\n Trabalhando com condicionais:`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = true;


console.log(`\n Destinos possíveis:`);
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada){
    console.log(`Boa Viagem`);
    listaDeDestinos.splice(1,1);
    temPassagemComprada = true;
}else{
        console.log(`Não é maior de idade e não posso vender`);
        temPassagemComprada = false;
    }

    console.log(listaDeDestinos);