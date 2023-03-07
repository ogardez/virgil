//Con esta parte cargamos la imagen, la tenemos que guardar en una carpeta llamada assets
let img;
function preload() {
  img = loadImage('assets/virgilio.jpg');
}
function setup() {
createCanvas(496, 700); 
  frameRate(15);
  //los parametros de tint hacen más interesante el resultado con la transparencia y la colocación de la imagen tint(R,G,B, Transparencia)
  tint(255, random(76, 200), 244);
  image(img, 0, 0);
  tint(255, 76, 244 , 10);
  image(img, 20, 20);
  tint(255, 76, 244, 40);
  image(img, 40, 40);
  tint(255, 76, 244, 70);
  image(img, 60, 60);
  tint(255, 76, 244, 100);
  image(img, 80, 80);
  tint(255, 76, 244, 130);
  image(img, 100, 100);
}

function draw (){
  tint(255, random(76, 200), 244);
  image(img, 0, 0);
  tint(255, 76, 244 , 10);
  image(img, 20, 20);
  tint(255, 76, 244, 40);
  image(img, 40, 40);
  tint(255, 76, 244, 70);
  image(img, 60, 60);
  tint(255, 76, 244, 100);
  image(img, 80, 80);
  tint(255, random(50, 120), 244, 130);
  image(img, 100, 100);


  textFont("Old English text MT");
  textSize (65);
  fill (255, 252, 76, 200)
  text("bien", 150, 200)
  
  textFont("italic");
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(10), 100)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(80), 80)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(80), 120)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(80), 40)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(80), 140)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(80), 160)
  //palabras del medio
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(80, 160), 180)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(80, 160), 200)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(80, 160), 220)
  //palabras inferior derecha
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(190, 220), 240)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(210, 260), 260)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(190, 220), 280)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(190, 270), 310)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(190, 270), 320)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(190, 270), 340)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", random(190, 270), 370)
}
