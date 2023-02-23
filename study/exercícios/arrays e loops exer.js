//EXERCÍCIO

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < copa.length; i++) {
  console.log(`o Brasil ganhou a copa de ${copa[i]}`);
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['banana', 'maçã', 'pera', 'uva', 'melãncia'];
for( var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] == 'pera') {
    break
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var lastFruit = frutas[frutas.length - 1];


