let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/firefox-icon.png') {
      minhaImagem.setAttribute ('src','imagens/imagem001.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/imagem2.png');
    }
}
