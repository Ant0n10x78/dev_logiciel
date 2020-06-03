


let listener = true;
let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
  }
  //Create a Pixi Application
  let app = new PIXI.Application({width: 500, height: 500});

      //Init the score
      
      let score = 0;
      let colorCuber = 0x000000;
      //Init of the cookies
      if (document.cookie==null){
      
      document.cookie = "point="+score;
      document.cookie = "color="+colorCuber;
      }

      //Init color of Cuber
      colorCuber = document.cookie.split('; ').find(row => row.startsWith('color')).split('=')[1];




  let style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fill: "white",
    stroke: '#ff3300',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  });
  let message = new PIXI.Text(score, style);
  message.position.set(410, 75);
  app.stage.addChild(message);

  let m_loose = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fill: "white",
    stroke: '#ff3300',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  });
  let loose = new PIXI.Text("GAME OVER", m_loose);
  loose.position.set(150, 200);
  
let rect0 = new PIXI.Graphics();
rect0.lineStyle(4, 0x000000, 1);
rect0.beginFill(0xFFFFFF);
rect0.drawRect(0, 0, 50, 50);
rect0.endFill();
rect0.y = null;

let rect1 = new PIXI.Graphics();
rect1.lineStyle(4, 0x000000, 1);
rect1.beginFill(0xFFFFFF);
rect1.drawRect(0, 0, 50, 50);
rect1.endFill();
rect1.y = null;


let rect2 = new PIXI.Graphics();
rect2.lineStyle(4, 0x000000, 1);
rect2.beginFill(0xFFFFFF);
rect2.drawRect(0, 0, 50, 50);
rect2.endFill();


let rect3 = new PIXI.Graphics();
rect3.lineStyle(4, 0x000000, 1);
rect3.beginFill(0xFFFFFF);
rect3.drawRect(0, 0, 50, 50);
rect3.endFill();



let rect4 = new PIXI.Graphics();
rect4.lineStyle(4, 0x000000, 1);
rect4.beginFill(0xFFFFFF);
rect4.drawRect(0, 0, 50, 50);
rect4.endFill();



let rect5 = new PIXI.Graphics();
rect5.lineStyle(4, 0x000000, 1);
rect5.beginFill(0xFFFFFF);
rect5.drawRect(0, 0, 50, 50);
rect5.endFill();


let speedBullet = 4;
let speedCube = 1;
let speedSpown=2000;

let i_sBullet = 0;
let i_sCube = 0;
let i_sSpown = 0;


let end = 0;

//setInterval(createRect,2000);
let tableau =[rect0,rect1,rect2,rect3,rect4,rect5];
