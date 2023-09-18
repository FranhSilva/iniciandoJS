console.log(`Trabalhando com condicionais:`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 19;
console.log(`Destinos possíveis:`);

if(idadeComprador >= 18){
    console.log(`Comprador é maior de idade`);
    listaDeDestinos.splice(1,1);
}else{
    console.log(`Não é maior de idade e não posso vender`);
}


console.log(listaDeDestinos);
