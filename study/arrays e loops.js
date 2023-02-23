// ARRAY

// É um grupo de valores geralmente relacionados.
//Servem para guardarmos diferentes valores em uma única variável

var i = ['string0', 'string1', 'string2'];

i[0]; // string0
i[2]; // string2

// Acesse um elemento do array utilizando [n].
//lembrando que array é base 0


// MÉTODOS E PROPRIEDADES DE UMA ARRAY
i.pop(); // remove o último item e retorna ele
i.push('string3'); // adiciona ao final da array
i.length; // 3

// existem diversos outros métodos, como map, reduce, forEach [...]


// FOR LOOP

// Fazem algo repetidamente até que uma condição seja atingida.

for (var numero = 0; numero < 10; numero++) {
  console.log(numero)
} // retorna de 0 a 9 no console

// O for loop possui 3 partes, início, condição e incremento


// WHILE LOOP
var i = 0;
while(i < 10) {
  console.log(i);
  i++;
}
// retorna de 0 a 9 no console, o for loop é mais comum


// ARRAYS, LOOPS e BREAK

var videoGames = ['switch', 'ps4', 'xbox', '3ds'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === 'ps4') {
    break;
  }
}
// for loop é o mais comum


// FOR EACH

// forEach é um método que executa uma função para cada item da Array.
//É uma forma mais simples de utilizarmos um loop com arrays(ou array-like)

videoGames.forEach(function(item) {
  console.log(item);
}) // o argumento item será atribuido dinamicamente

podemos passar os seguintes parâmetros item, index e array
não confundir-se com a sintaxe
