// *** FUNÇÕES ***

// bloco de códido que pode ser executada e reutilizada. Valores podem ser passados por um função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

// chamada de function declaration

function pi() {
  return 3.14;
}

var total = 5 * pi(); //15.7

// Parênteses () executam uma função

// PARÂMETROS E ARGUMENTOS

// Ao criar um função, você pode definir parâmentros.
// Ao executar um função, você pode passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(86, 1.65) // 86 e 1.65 são os argumentos

// Separar por vírgula cada parâmetro. Você pode definir mais de uma parâmetro ou nenhum também

//PARÊNTESES EXECUTA A FUNÇÃO

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Você gosta de azul';
  } else if (cor === 'vermelho') {
    return 'Você gosta de vermelho';
  } else if (cor === 'verde') {
    return 'Você gosta de verde';
  } else {
    return 'Você não gosta de nada'
  }
}

corFavorita(); // retorna 'Você não gosta de nada'
// Se apenas definirmos a função com function e não execurtarmos a mesma, nada que estiver dentro dela irá acontecer.


// ARGUMENTOS PODEM SER FUNÇÕES

// Chamadas de Callback, geralmente são funções que ocorrem a´pos açgum evento.

addEventListener('click', function () {
  console.log('clicou');
});
// Funções anônimas são aquelas em que o nome da função não é definido, escritas como functrion(){} ou () => {} "arrow function").


// PODE OU NÃO RETORNAR UM VALOR

// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc2 = peso / (altura ** 2);
  console.log(imc2);
}
imc2(86, 1.65); // retorna o imc
console.log(imc2(86, 1.65)); // retorna o imc e undefined


// VALORES RETORNADOS

// Uma função pode retornar qualquer tipo de dado e até outras funções
function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe sua idade!';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa prática.


// ESCOPO

// Varáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function precisoVisitar(paisesVisitados) {
  const totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}


// ESCOPO LÉXICO

// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Desenvolvedor Web';

function dados() {
  var nome = 'Yan';
  var idade = 24;
  function outrosDados() {
    var endereco = 'Fortaleza';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
dados(); // Retorna 'Yan, 29, Fortaleza, Desenvolvedor Web'
// outrosDados(); // Retorna um erro


// HOSTING

// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc3(86, 1.65) // imc3 aparece no console

function imc3(peso, altura) {
  const imc3 = peso / (altura ** 2);
  console.log(imc3);
}