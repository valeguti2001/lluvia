let red, green, blue;
//se crea un arreglo
let nubes = []; 
let bolitas = []; 

let decoracion = [];

function setup() 
{
  createCanvas(400, 600);

  red = random(255);
   green = random(255);
   blue = random(255);

  for (let i = 0; i < 20; i++) {                                          
  					//(name, posX, posY, height, width) 
    nubes.push(new Ellipse(random(0, 400), random(0, 150), random(100, 200), random(100, 200), random(60, 65), random(70, 75), 90));
  }

  for (let i = 0; i < 15; i++) {                                          
  					//posX, posY, height, width, r, g, b
    bolitas.push(new Ellipse(random(130, 270), random(490, 550), 10, 10, 255, 255, 255));
  }

  for (let j = 0; j < 10; j++) {
  // posX, posY, height, width
  decoracion.push(new HalfEllipse(100 + j*20, 550, 20, 20))
  }

}

function draw() 
{
  background(120, 136, 151);


  for (let i = 0; i < 20; i++) 
  {
    nubes[i].mostrar();
  }

  fill(red, green, blue, 70);
  arc(190, 550, 200, 160, PI, 0);

  fill(50);
  rect(185, 550, 10, 50);

  fill(255);
  ellipse(190, 466, 15, 15);

  for (let i = 0; i < 15; i++) 
  {
    bolitas[i].mostrar();
  }

  // pone la decoración de abajo de la sombrilla
  for (let j = 0; j < 10; j++) 
  {
    decoracion[j].mostrar();
  }

}

function mousePressed() {
	red = random(255);
    green = random(255);
    blue = random(255);

}

class Ellipse
{
  constructor(posX, posY, height, width, r, g, b) 
  {
    this.x = posX;
  	this.y = posY;
    this.height = height;
    this.width = width;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  mostrar()
  {
  	noStroke();
  	fill(this.r, this.g, this.b);
  	ellipse(this.x,this.y,this.width,this.height);
  }
}

class HalfEllipse
{
  constructor(posX, posY, height, width) 
  {
    this.ax = posX;
  	this.ay = posY;
    this.aheight = height;
    this.awidth = width;
  }

  mostrar()
  {
  	noStroke();
  	fill(255);
  	// posX posY ancho alto, noc, media circunferencia
  	arc(this.ax, this.ay, this.aheight, this.awidth, 0, PI);
  }
}

