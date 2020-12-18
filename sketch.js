var bullet;
var wall,thickness;
var speed,weight;
var height; 

function setup() {
  createCanvas(1600,400);
  //createSprite(800, 200, 50, 50);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,40,25,10);
  bullet.shapeColor= color("white");

  wall = createSprite(1350,40,thickness/2,height/8);
  wall.shapeColor = color("brown");
}

function draw() {
  background("black");  
  drawSprites();

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }
 }
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true
  }
   return false; 
}
   

