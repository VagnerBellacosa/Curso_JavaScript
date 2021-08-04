var img = document.querySelector('img');

var pos = 0;
var largura = 1229;
var altura = 100;

function prox() {
    
	pos++;
	    
	if (pos == 18) pos = 0;
    
	var linha = Math.floor(pos / 18) * altura;
    
	console.log(linha);
	var coluna = pos % 18 * largura;
    
	img.style.marginTop = -linha + 'px';
    
	img.style.marginLeft = -coluna + 'px';
	
}

setInterval(prox, 10);