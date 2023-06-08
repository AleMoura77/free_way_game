//Variaveis referente as imagens
let imEstrada;
let imAtor;
let imCarro1;
let imCarro2;
let imCarro3;

let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imEstrada = loadImage("imagens/estrada.png");
  imAtor = loadImage("imagens/ator-1.png");
  imCarro1 = loadImage("imagens/carro-1.png");
  imCarro2 = loadImage("imagens/carro-2.png");
  imCarro3 = loadImage("imagens/carro-3.png");
  imCarros = [imCarro1, imCarro2, imCarro3, imCarro1, imCarro2, imCarro3];

  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}