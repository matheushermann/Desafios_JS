//Desafio 02 - média
/* 
  Crie um array com 5 notas
  - Utilize um loop para:
       - Somar todas as notas
       - Calcular a média

    Mostrar no console/output o seguinte:
    Média da turma: 10.0
*/

/*
 let notas = [10.0, 8.5, 7.5, 6.0, 9.0]; 

 let somar = 0;
 for(resultado = 0; resultado <= notas.length; resultado++ ) {
 somar =+ + notas[resultado];
 }

 */

 const notas = [8, 7, 9, 10, 6];
 let soma = 0;

 for(let i = 0; i < notas.length; i++) {
    soma += notas[i];
 }
 // soma = 40;

 let media = soma / notas.length;
 console.log("Média da turma: ", media);