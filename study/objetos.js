// OBJETOS

// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var dado = {
  dado1: 'texto1',
  dado2: 'texto2'
}
dado.dado1; // 'texto1'
dado.dado2; // 'texto2'
// Propriedades e métodos consistem em nome (chave) e valor.


// MÉTODOS

// É uma propriedade que possui uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: (lado) => {
    return lado * lado;
  },
  perimetro: (lado) => {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// Abreviação de area: function(){} para area() {}, no ES6+

// var quadrado = {
//   lados: 4,
//   area(lado) {
//     return lado * lado;
//   },
//   perimetro(lado) {
//     return this.lados * lado; 
//   },
// }


// ORGANIZAR O CÓDIGO

// Obejtos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI; // 3,14

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método? 


// CRIAR UM OBJETO

// Um Objeto é criado utilizando as chaves {}
var carro = {};
var pessoa = {};

typeof carro  // 'obeject'


// DOT NOTATION GET

// Acesse propriedades de um objeto utilizando a ponto.
var menu = {
  with: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'


// DOT NOTATION SET

// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
var menu = {
  with: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
menu.backgroundColor //'#000'


// ADICIONAR PROPRIEDADES E MÉTODOS

// Basta adicionar um novo nome e definir o valor.
var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';


// PALAVRA CHAVE THIS

// This irá fazer uma referência ao próprio objeto.
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60 por questão de escopo, o objeto consegue acessar variáveis criadas fora deles

// this irá retornar o próprio objeto


// PROTÓTIPO E HERENÇA

// O obejto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false

//hasOwnProperty é um método de Object