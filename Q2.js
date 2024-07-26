/* Parse JSON para Objeto JavaScript:
Converte uma string JSON em um objeto JavaScript, usando a função JSON.parse() */
const jsonString = '{"nome": "Eduarda", "idade": 24}';
const objeto = JSON.parse(jsonString);
console.log(objeto.idade); // Saída: 24
console.log(objeto); 


/* Stringify Objeto JavaScript para JSON:
Converte um objeto JavaScript em uma string JSON, usando a função JSON.stringify() */
const pessoa = { nome: "Eduarda", idade: 24 };
const jsonStr = JSON.stringify(pessoa);
console.log(jsonStr); // Saída: {"nome":"Eduarda","idade":24}


/* Acessar Dados JSON:
Acessar seus dados no objeto */
const gostosPessoais = {
  banda_fav: "Arctic Monkeys",
  musica_fav: "RU Mine?"
  
};
console.log(gostosPessoais.banda_fav); // Saída: Arctic Monkeys


/* Modificar Dados JSON:
Modifica os valores de propriedades em um objeto JSON */
gostosPessoais.banda_fav = "Evanescence";
console.log(gostosPessoais); // Saída: { banda_fav: "Evanescence", musica_fav: "RU Mine?"}


/* Adicionar Propriedades JSON:
Adiciona novas propriedades a um objeto JSON */
gostosPessoais.serie_fav = "Game Of Thrones";
console.log(gostosPessoais); // Saída: {banda_fav: 'Evanescence', musica_fav: 'RU Mine?', serie_fav: 'Game Of Thrones'}


/* Remover Propriedades JSON:
Remove propriedades de um objeto JSON usando o delete */
delete gostosPessoais.serie_fav;
console.log(gostosPessoais); // Saída: {banda_fav: 'Evanescence', musica_fav: 'RU Mine?'}
