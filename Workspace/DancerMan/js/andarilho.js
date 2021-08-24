var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
var dx = 50;//a taxa de variação (velocidade) horizontal do objeto
var x = 30;//posição horizontal do objeto (com valor inicial)
var y = 0;//posição vertical do objeto (com valor inicial)
var WIDTH = 1000;//largura da área retangular
var HEIGHT = 340;//altura da área retangular
var tile1 = new Image();//Imagem que será carregada e desenhada na canvas
var posicao = 0;//Indicador da posição atual do personagem
var NUM_POSICOES = 7;//Quantidade de imagens que compõem o movimento


function KeyDown(evt){
    switch (evt.keyCode) {
        case 39:  /*seta para direita*/
            if (x + dx < WIDTH){
                x += dx;
                posicao++;
                if(posicao == NUM_POSICOES)
                    posicao = 1;
            }
            break;           
    }
}



function Desenhar() {   
    tile1.src = "image/andarilho" + posicao + ".png";
    ctx.drawImage(tile1, x, y);
}



function LimparTela() {
    ctx.fillStyle = "rgb(233,233,233)";   
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();   
}


function Atualizar() {
    LimparTela();    
    Desenhar();
}

function Iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 100);
}


window.addEventListener('keydown', KeyDown);
Iniciar();
