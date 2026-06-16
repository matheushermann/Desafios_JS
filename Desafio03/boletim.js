/*
Desafio 03 - SISTEMA DE APROVAÇÂO

Crie uma função chamada verificarAluno() que receba:
-nome
-nota

Regras:
-Nota maior ou igual a 7 -> Aprovado
-Nota maior ou igual a 5 e menor que 7 -> Recuperação
-Nota menor que 5 -> Reprovado

Exiba uma mensagem informado a situação do aluno.
*/
function verficarAluno(nome, nota) {
    if(nota >= 7){
        console.log(nome + " está aprovado(a)");
    }
   else if(nota >= 5) {
        console.log(nome + " está em Recuperação(a)");
  }
   else if(nota < 5) {
       console.log(nome + " está Reprovado(a)");
   }
}
verficarAluno("matheus", 10);
verficarAluno("vinivius jr", 5);
verficarAluno("vinicius", 0);
console.log(verficarAluno);


