function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  voltaInicio();
  verificaColisao();
  pontos();
  marcaPonto();
}




