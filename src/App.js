var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var contador = 30;
var pontos = 0;
var clickbox = [];
var ligaTimer = setInterval(desenhaAlvo, 1000);
var vermelho = 'red';
var branco = 'white';
var raioPadrao = 10;

function reloadPage(){location.reload();}
function desenhaCirculo(x,y,raio,cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2* Math.PI);
    pincel.fill();}

function desenhaFundo(){
    pincel.fillStyle = 'lightblue';
    pincel.fillRect(0,0,600,400);}

function limpaTela(){
    pincel.clearRect(0,0,600,400)};

function desenhaAlvo(){       
    var randomX = Math.round((Math.random()*540)+30);
    var randomY = Math.round((Math.random()*340)+30);

    limpaTela();
    desenhaFundo();
    desenhaCirculo(
        randomX, randomY, raioPadrao*3, vermelho);
    desenhaCirculo(
        randomX, randomY, raioPadrao*2, branco);
    desenhaCirculo(
        randomX, randomY, raioPadrao*1, vermelho);

    if (contador>0) {contador--}
        else{
            mostraPontos();
            clearInterval(ligaTimer); 
            ligaTimer=0;
            document.getElementById("botao0").innerHTML="<h1>JOGAR DE NOVO!</h1>"
        };

    document.getElementById("botao2").innerHTML =
     "<h1>Timer:"+ contador +"</h1>";

    clickbox = [randomX-30,randomY-30,randomX+30,randomY+30];
}


function verifica(evento){
    var cliqueX = evento.pageX - tela.offsetLeft;
    var cliqueY = evento.pageY - tela.offsetTop;
    if (
        cliqueX>clickbox[0]&&
        cliqueY>clickbox[1]&&
        cliqueX<clickbox[2]&&
        cliqueY<clickbox[3]
        ){
        pontos = pontos + 10;
       document.getElementById("botao1").innerHTML="<h1>Pontos: "+pontos+"</h1>";
    }}

function mostraPontos(){
    alert ('Você fez ' + pontos + " pontos.")}

//body:

desenhaFundo();
document.getElementById("botao1").innerHTML = 
"<h1>Pontos: "+pontos+"</h1>";
desenhaAlvo();
ligaTimer;
tela.onclick = verifica;


var botao0 = document.getElementById('botao0');
botao0.onclick = reloadPage;
var botao1 = document.getElementById('botao1');
botao1.onclick = "";
