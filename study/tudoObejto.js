// TUDO É OBJETO

// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = 'Yan';

nome.length; // 5
nome.charAt(1); // 'a'
nome.replace('Y', 'Ry'); // 'Ryan'
nome; // 'Yan'

// Um string herda propriedades e métodos do construtor String()


//NÚMEROS

var altura = 1.65;

altura.toString(); // '1.65'
altura.toFixed(); // '2'

// Por um breve momento o número é envolvido em um Objeto (coerção),
//tendo acesso assim as suas propriedades e métodos


// FUNÇÕES

//também possuem métodos e propriedades
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
// "function areaQuadrado(lado) {
//  return lado * lado;
// }"

areaQuadrado.length; // 1


// ELEMENTOS DO DOM

var btn = document.querySelector('.btn');

btn.classList.add('ativo'); // adiciona a classe 'ativo'
btn.innerText; // 'click'
btn.addEventListener('click', ()=>{console.log('clicou')}); // 'clicou'

// Praticamente todos os efeitos com JS são feitos utilizando propriedades
//e métodos de objetos do DOM

// Obetos revolucionaram a programação, Web API's são métodos e propriedades
//que permitem a interação JavaScript e Browser.