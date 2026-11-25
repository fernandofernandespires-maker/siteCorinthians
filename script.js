const botao = document.getElementById('btn-acao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {
  mensagem.textContent = 'Tudo funcionando perfeitamente!';
});
