var bullet,speed,weight
var wall, thickness    

function setup() {
  createCanvas(1600,400);
//thickness of wall
  thickness=random(22,83)
//bullet's weight and speed
  speed=random(223,320)
  weight=random(30,52)

  bullet = createSprite(40, 200, 60, 30);
  bullet.shapeColor=color(250,250,250)
  
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
 
}

function draw() {
  background(0,0,0);
  
   if(hasCollided(bullet,wall))
 {
   bullet.velocityX=speed;
   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

   if(damage>10)
   {
    wall.shapeColor=color(255,0,0)
    textSize(35)
    text("Danger",600,height/2)
   } 
 
   if(damage<10)
   {
    wall.shapeColor=color(0,255,0)
    textSize(35)
    text("Okk",600,height/2)
   }
 }
  
  drawSprites();
}
