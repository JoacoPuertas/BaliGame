let x = [], y = [], velX =[];
let cant = 8;
let m = 40;
let ys = 550;
let xs = 300;
let estado = 0;
let s = 1;
let yb = 400;
let d = 100;
let colorcito=[];
let yc = [];
let textos = [];
function setup() {
  createCanvas(600,600);
  incioAutos();
  creditos();
  colorcito[0] = color(0,100,250);
  colorcito[1] = color(255,100,0);
  textos[0] = "TP4 Tecno Multimedial";
  textos[1] = "Productor: Joaquin Roman Puertas"
  textos[2] = "Programador: Joaquin Roman Puertas"
  textos[3] = "Diseñador: Joaquin Roman Puertas"
}


function draw() {
  if (estado == 0) {
    estado0();
  } else if (estado == 1) {
      background(20,70,20);
      rectMode(CENTER);
      fill(50);
      noStroke();
      rect(300,280,width,420);
      frog();
      dibujarAutos();
      moverAutosF()
      colision();
      win();
  } else if (estado == 2) {
      background(20,70,20);
      rectMode(CENTER);
      fill(50);
      noStroke();
      rect(300,280,width,420);
      frog();
      dibujarAutos();
      moverAutosM();
      colision();
      win();
      
  } else if (estado == 3) {
      background(20,70,20);
      rectMode(CENTER);
      fill(50);
      noStroke();
      rect(300,280,width,420);
      frog();
      dibujarAutos();
      moverAutosD();
      colision();
      win();
      
  } else if (estado == 4){
      background(50);
      textAlign(CENTER,CENTER);
      textSize(40);
      fill(200,50,50);
      text("¡PERDISTE!", 300,150);
      botonesFinales();
  } else if (estado == 5){
      background(50);
      textAlign(CENTER,CENTER);
      textSize(40);
      fill(50,50,200);
      text("¡GANASTE CRACK!", 300,200);
      botonesFinales();
  } else if (estado == 6){
      background(50);
      textAlign(CENTER,CENTER);
      textSize(30);
      fill(50,50,200);
      for (let i = 0; i < 4; i++){
        text(textos[i], 300 , yc[i]); 
        yc[i] += 2;
      }
      if (yc[3] > 600) {
        fill(200,50,50);
        textAlign(CENTER,CENTER);
        noStroke();
        ellipse(300,300,d + 20);
        fill(255);
        text("RESET", 300,300);
      }
    
      
      
  } 
}
function creditos(){
  for(let i = 0; i < 4; i++){
    yc[i] = -50 - i * 150
  } 
}
function frog(){
  fill(255);
  rect(xs,ys,30,30);
}

function autos(){
  for(let i = 0; i < cant; i++){
      fill(0,0,150);
      rect(x[i],y[i], m, m);
  }
}

function dibujarAutos() {
  for ( let i=0; i<cant; i++ ) {
    //dibujo
    fill(50,40,100);
    rect(x[i], y[i], m, m);
  }
}

function incioAutos(){
  for(let i = 0; i < cant; i++ ){
    x[i] = random(0+m,width-m);
    y[i] = 100 + i + 50 * i;
    velX[i] = random(3, 9);
  }
}

function moverAutosF(){
  for(let i = 0; i < cant; i++){
    x[i] += velX[i] ;
    
    //LIMITES 
    if ( x[i] > width-m  ) {
      velX[i] = random(-4, -6);
    } else if ( x[i] < 0 + m  ){
      velX[i] = random(4, 6);
    }
  }

}

function moverAutosM(){
  for(let i = 0; i < cant; i++){
    x[i] += velX[i] ;
    
    //LIMITES 
    if ( x[i] > width-m  ) {
      velX[i] = random(-7, -9);
    } else if ( x[i] < 0 + m  ){
      velX[i] = random(7, 9);
    }
  }

}

function moverAutosD(){
  for(let i = 0; i < cant; i++){
    x[i] += velX[i] ;
    
    //LIMITES 
    if ( x[i] > width-m  ) {
      velX[i] = random(-9, -11);
    } else if ( x[i] < 0 + m  ){
      velX[i] = random(9, 11);
    }
  }

}
function win(){
  for(let i = 0; i < cant; i++){
    if (ys < 100) {
      estado = 5;
    }
  }
}
function colision(){
  for(let i = 0; i < cant; i++){
    if (xs + 30 > x[i] && xs < x[i] + 40 && ys + 30 > y[i] && ys < y[i] + 40){
      estado = 4;
    }
  }
}
function botones(){
  for(let i = 0; i < 3; i = i + 1){
    noStroke();
    ellipse(100 + 200 * i, yb, d);
  }
}

function botonesFinales(){
  for(let i = 0; i < 2; i++){
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(colorcito[i]);
    noStroke();
    ellipse(200 + 200 * i,400,d);
    fill(255);
    text("CRED", 200,400);
    text("RESET", 400,400);
  }
}
function estado0(){
  //MENU
    ys = 550;
    xs = 300;
    creditos();
    background(50);
    fill(0,40,160);
    botones();
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(20,255,255);
    text("BALI GAME",300, 200);
    fill(255);
    textSize(20);
    text("FACIL",100, 400);
    text("MEDIA",100 + 200, 400);
    text("DIFICIL",100 + 400, 400);
}
function mousePressed(){
  // BOTONES DE DIFICULTAD
  if ( estado == 0 && dist(100,400,mouseX,mouseY) < d/2) {
    estado = 1;
  } else if (estado == 0 && dist(300,400,mouseX,mouseY) < d/2) {
    estado = 2;
  } else if (estado == 0 && dist(500,400,mouseX,mouseY) < d/2) {
    estado = 3;
  }
  
  // CREDITOS Y REINICIO
  if ( estado == 4  && dist(200,400,mouseX,mouseY) < d/2) {
    estado = 6;
  } else if ( estado == 4  && dist(400,400,mouseX,mouseY) < d/2) {
    estado = 0;
  } else if ( estado == 5  && dist(200,400,mouseX,mouseY) < d/2) {
    estado = 6;
  } else if ( estado == 5  && dist(400,400,mouseX,mouseY) < d/2) {
    estado = 0;
  } else if ( estado == 6  && yc[3] > 600 && dist(300,300,mouseX,mouseY) < (d + 10)/2) {
    estado = 0;
  }
}
function keyPressed(){
  if (keyCode === UP_ARROW && ys > 50 ) {
    s = 1;
    ys = ys - 50 ;
  } else if (keyCode === DOWN_ARROW && ys < height - 50 ) {
    s = 2;
    ys = ys + 50 ;
  }  else if (keyCode === LEFT_ARROW && xs > 0 + 50 ) {
    s = 3;
    xs = xs - 50 ;
  }  else if (keyCode === RIGHT_ARROW && xs < width -50 ) {
    s = 4;
    xs = xs + 50;
  }
}
