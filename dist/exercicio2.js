"use strict";
/*

Escreva um algoritmo que armazene o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e escrever
o percentual que cada um representa em relação ao total de eleitores. O
algoritmo deve fazer uma validação para que as porcentagens dos votos
armazenados (brancos, nulos e válidos) respeitem o limite do número
total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e
válidos não seja maior que o número total de eleitores.


*/
let totalEleitores = 200;
let votosBrancos = 100;
let votosNulos = 50;
let votosValidos = 50;
if (votosBrancos + votosNulos + votosValidos === totalEleitores) {
    let percentualBrancos = (votosBrancos / totalEleitores) * 100;
    let percentualNulos = (votosNulos / totalEleitores) * 100;
    let percentualValidos = (votosValidos / totalEleitores) * 100;
    console.log(`Percentual de Votos Brancos: ${percentualBrancos.toFixed(2)}%`);
    console.log(`Percentual de Votos Nulos: ${percentualNulos.toFixed(2)}%`);
    console.log(`Percentual de Votos Válidos: ${percentualValidos.toFixed(2)}%`);
    //
}
else {
    //
    console.log("Os votos não correspondem ao total de eleitores informado");
}
