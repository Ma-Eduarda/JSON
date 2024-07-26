/* O JSON (JavaScript Object Notation) 

- Um JSON é geralmente representado como um objeto JavaScript
- As chaves devem ser strings e devem estar entre aspas duplas.
- Os valores podem ser strings, números, objetos, arrays, booleanos (true ou false) ou null.
- Os pares chave-valor são separados por dois-pontos (:).
- Os pares chave-valor em um objeto JSON ou elementos em um array JSON são separados por vírgulas.

*/

// Exemplo:
const dados = {
  "nome": "Eduarda", 
  "idade": 24,
  "solteira": true,
  "telefone": null,
  "hobbies": ["Ouvir músicas", "Assistir séries", "Jogar videogames"],
  "endereco": {
    "rua": "Rua .....",
    "cidade": "Alagoinha - PB",
    "cep": "12345-678"
  }
};

console.log(dados);
console.log(dados.nome); // saida: Eduarda