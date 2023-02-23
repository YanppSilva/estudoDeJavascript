// EXERCÍCIO

// nomeie 3 propriedades ou métodos de strings
var i = 'teste';

i.charAt;
i.replace;
i.length;

// nomeie 5 propriedades ou métodos de elementos do DOM
btn.innerText;
btn.addEventListener;
btn.appendChild;
btn.querySelector;
btn.querySelectorAll;

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// Para ler o conteúdo atual da área de transferência
navigator.clipboard.readText().then(text => {
  console.log('Conteúdo da área de transferência:', text);
});

// Para definir um novo conteúdo na área de transferência
const novoConteudo = 'Isso é um novo conteúdo para a área de transferência';
navigator.clipboard.writeText(novoConteudo).then(() => {
  console.log('Novo conteúdo copiado para a área de transferência');
});

