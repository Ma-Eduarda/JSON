const dadosObj = {
  nome: "Eduarda", 
  idade: 24,
  solteira: true,
  telefone: null,
  hobbies: ["Ouvir músicas", "Assistir séries", "Jogar videogames"],
  endereco: {
    rua: "Rua .....",
    cidade: "Alagoinha - PB",
    cep: 12345-678
  }
};

//Para converter um objeto em uma string JSON, podemos usar a função JSON.stringify()
const dadosStr = JSON.stringify(dadosObj); 
console.log(dadosStr);

// Para converter uma string JSON em um objeto JavaScript, usamos a função JSON.parse() 
const jsonDados = JSON.parse(dadosStr)
console.log(jsonDados);