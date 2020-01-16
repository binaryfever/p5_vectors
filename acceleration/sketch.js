class Mover {
	location = null;
	velocity = null;
	acceleration = null;

	constructor(){
	  this.location = createVector(width/2, height/2);
	  this.velocity = createVector(0, 0);
	  this.acceleration = createVector(0, 0);
	}
	
	update(){
	  //random acceleration 
	  //this.acceleration = p5.Vector.random2D();
	  let mouse = createVector(mouseX, mouseY);
	  mouse.sub(this.location);
	  mouse.setMag(0.2);
	  this.acceleration = mouse;
	  this.velocity.add(this.acceleration);
	  this.location.add(this.velocity);
	  this.velocity.limit(5);
	}
	
	edges(){
	  if(this.location.x > width) this.location.x = 0;
	  if(this.location.x < 0) this.location.x = width;
	  if(this.location.y > height) this.location.y = 0;
	  if(this.location.y < 0) this.location.y = height;
	}
	
	display(){
	  stroke(0);
	  strokeWeight(2);
	  fill(127);
	  ellipse(this.location.x, this.location.y, 48, 48);
	}
	
}


let m = null;

function setup() {
	createCanvas(windowWidth, windowHeight);
	m = new Mover();
}

function draw() {
	background(255);
	m.update();
	//m.edges();
	m.display();
}