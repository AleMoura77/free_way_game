//Variaveis dos Carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let lCarro = 50;
let hCarro = 40;
let veloCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];


function mostraCarro(){
  for(let i = 0; i < imCarros.length ; i++){
    image(imCarros[i], xCarros[i], yCarros[i], lCarro, hCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < xCarros.length ; i++){
    xCarros[i] -= veloCarros[i];
  }
}

function voltaInicio(){
  for(let i = 0; i < xCarros.length ; i++){
    if (passouTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTela(xCarro){
  return xCarro < -50;
}

