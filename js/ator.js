//Variaveis referente ao Ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imAtor, xAtor, yAtor, 30, 30);  
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], lCarro, hCarro, xAtor, yAtor, 15);
    if(colisao){
      voltaAtor();
      somColisao.play();
      if(pontosMaiorQueZero()){
         meusPontos--;
      }
    }
  }
}

function voltaAtor(){
  yAtor = 366;
}

function pontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos, width/5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos++;
    somPonto.play();
    voltaAtor();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;     
}

function podeSeMover(){
  return yAtor < 366;
}
