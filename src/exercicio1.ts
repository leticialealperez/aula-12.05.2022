/*

Crie um algoritmo que armazene três valores, para cada um dos lados
de um triângulo: A, B e C. Verifique SE os lados fornecidos formam
realmente um triângulo. Se formar, deve mostrar no console o tipo de
triângulo: isósceles, escaleno ou equilátero.

a. Para verificar se os lados fornecidos formam um triângulo: 
(A < B + C) e (B < A + C) e (C < A + B).
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C);


*/

let ladoA: number = Number(prompt("Digite o lado A"));
let ladoB: number = Number(prompt("Digite o lado B"));
let ladoC: number = Number(prompt("Digite o lado C"));

if (ladoA === NaN || ladoB === NaN || ladoC === NaN) {
  console.log("Você digitou algum valor incorreto!");
} else if (
  ladoA < ladoB + ladoC &&
  ladoB < ladoA + ladoC &&
  ladoC < ladoA + ladoB
) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Triângulo equilátero!");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Triângulo isósceles!");
  } else {
    console.log("Triângulo escaleno!");
  }
} else {
  console.log("Valores não formam um triângulo!");
}
