console.log(`Trabalhando com condicionais:`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 21;
const estaAcompanhada = true;

console.log(`Destinos possíveis:`);

if(idadeComprador >= 18 || estaAcompanhada){
    console.log(`Boa Viagem`);
    listaDeDestinos.splice(1,1);
}else{
        console.log(`Não é maior de idade e não posso vender`);
    }

    console.log(listaDeDestinos);
