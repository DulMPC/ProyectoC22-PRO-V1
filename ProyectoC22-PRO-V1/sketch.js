var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var fairyImg,fairy;
var fairyImg1, fairyImg2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
	fairyImg = loadImage("images/fairy.png");
	fairyImg = loadAnimaion("images/fairyImg1.png","images/fairyImg2.png");
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
	fairyVoice = loadSound("sound/JoyMusic.mp3");

	//crea el sprite del hada, y agrega la animación para el hada
    fairy = createSprite(100,70);
	fairy.setAnimation();

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if (star.y > 470 && starBody.position.y > 470 ){
	Matter.Body.setStatic(starBody,true);
  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if (KeyDown(LEFT_ARROW)){
		moveBy.fairyImg
	}
	if (KeyDown(RIGTH_ARROW)){
		moveBy.fairyImg
	}
}
