

const personagens = document.querySelectorAll('.personagem')

//forEach seria 'para cada' e com isso PARA CADA personagem dessa lista, eu quero fazer alguma coisa
personagens.forEach(personagem => {
  personagem.addEventListener('click', () => {

    const idSelecionado = personagem.attributes.id.value;

    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
    personagem.classList.add('selecionado')

    /*

  OBJETIVO2 - quando apssar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande

  - alterar a imagem do jogador 1
  - alerar o nome do jogador 1
    */

  
    
  const imagemJogador1 = document.getElementById('personagem-jogador-1')
  imagemJogador1.src = `./src/imagens/${idSelecionado}.JPG`

  const nomeJogador1 = document.getElementById('nome-jogador-1')
  const nomeSelecionado1 = personagem.getAttribute('data-name')


  nomeJogador1.innerHTML = nomeSelecionado1;

  })


})
