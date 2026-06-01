// Desafio 01 - Cadastro de pessoa

/* 
 Crie um objeto chamado pessoa contendo:
  - nome
  - idade
  - cidade

  Após a criação:
   - Altere a idade
   - Adicione uma profissão
   - Remova a cidade

   No fim, exiba o objeto final.
*/
const pessoa =  { 
    nome: "Matheus",
    idade: 17,
    cidade: "Capanema"
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);


pessoa.idade = 18;
console.log(pessoa);

pessoa.profissão = "eletrecista";
console.log(pessoa);

delete pessoa.cidade;
console.log(pessoa);
