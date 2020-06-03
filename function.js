

   //Create bullet
   function createBullet(xrect){
    let auto = true; 
       let bullet = new PIXI.Graphics();
       bullet.lineStyle(4, 0xFF3300, 1);
       bullet.beginFill(0x66CCFF);
       bullet.drawRect(0, 0, 1, 20);
       bullet.endFill();
    bullet.x = cuber.x+25;
    bullet.y = cuber.y-20;

      //Function move up
      function myMove() {  
      var pos = 0;
      bullet.id = setInterval(frame, speedBullet);
      function frame() {
    if (pos == 500) {
      
    } else {
        hitTest(bullet,xrect);
      pos++; 
      bullet.y -=1;
      document.body.appendChild(app.view);
    }
    }
    }
    myMove();
    app.stage.addChild(bullet);
    }

    //function who create the cube 
    function createRect(rect,x){
      rect.x = x;
      if (rect.id == undefined){
      if (rect.y <= 0){
        rect.y = 0;
        if (score>0){
          
        purpleColorCube(rect);
        }

        //Function move down RECT
        function myMove() { 
        rect.id = setInterval(frame, speedCube);
        function frame() {
      if (rect.y == 500 && end == 0) {
        console.log(end);
        app.stage.addChild(loose); //write game over
        end =1 ;
        console.log(end);
      } else {
        rect.y +=speedCube;
        document.body.appendChild(app.view);
      }
      }
      }
      myMove();
      app.stage.addChild(rect);
      }
      }
      }


//xone is the shoot ,xtwo is the cube
function hitTest(xone,xtwo){
              
if (xone.y==xtwo.y+48 || xone.y==xtwo.y+49 || xone.y==xtwo.y+50 || xone.y==xtwo.y+51){
if (xtwo.x-1 <= xone.x && xtwo.x-51 >= xone.x ){
  if (score > 0){
    if (score%80==0){fspeedSpown();}
    if (score%120==0){fspeedBullet();}
  }score += 10;
      
}
else if (xtwo.x <= xone.x && xtwo.x+50 >= xone.x ){
  if (score > 0){
      if (score%80==0){fspeedSpown();}
      if (score%120==0){fspeedBullet();}
  }score += 10;               
}
else if (xtwo.x <= xone.x && xtwo.x+51 >= xone.x ){
  if (score > 0){
    if (score%80==0){fspeedSpown();}
    if (score%120==0){fspeedBullet();}
  }score += 10;       
}
clearInterval(xtwo.id);
clearInterval(xone.id);
xone.y = -1000;
xone = null;
 if(end == 0){message.text = score;}

xtwo.id = undefined;
xtwo.y = -10000;
document.body.appendChild(app.view);
}
}
//Random generator ,0 to max only integer
function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max));
}
              
//function who call a random cube every "speedSpown" ms
function callBlock(){
if (app != null){
let aleatoire = getRandom(6);
if (aleatoire == 0){createRect(rect0,100);}
if (aleatoire == 1){createRect(rect1,150);}
if (aleatoire == 2){createRect(rect2,200);}
if (aleatoire == 3){createRect(rect3,250);}
if (aleatoire == 4){createRect(rect4,300);}
if (aleatoire == 5){createRect(rect5,350);}
setTimeout(callBlock,speedSpown);
  }
 }

//fonction qui détermine la position en pixel en celle du tableau
function position_tbl(tableau,cuber){
let position = (cuber.x/50)-2;
 return tableau[position];
}
function shoot(){
let xrect = position_tbl(tableau,cuber);
createBullet(xrect);
setTimeout(shoot,500);
 }

//function that manages the speed of the spowns
function fspeedSpown(){
 speedSpown = 500;
 setTimeout(speedS,5000);
}
function speedS(){
 speedSpown = 2000;
}

//function that manages the speed of the bullets
function fspeedBullet(){
  speedBullet = 20;
  setTimeout(speedB,5000);
}
function speedB(){
  speedBullet = 4;
}

function purpleColorCube(rect){
  if (score%80==0){ //condition to change color of a cube
    console.log("yalaaa");
    rect.lineStyle(4, 0x000000, 1);
    rect.beginFill(0x891133);
    rect.drawRect(0, 0, 50, 50);
    rect.endFill();
    
  }else{
    rect.lineStyle(4, 0x000000, 1);
    rect.beginFill(0xFFFFFF);
    rect.drawRect(0, 0, 50, 50);
    rect.endFill();
  }
}


/*function getCookie(){
  let cookie = document.cookie;
  console.log(document.cookie);
  let x = "";
    for (let i = 0; i < cookie.length; i++){
      if (cookie[i] == '='){
        for (let k = i +1; k < cookie.length; k++){
           x += cookie[k];
        }
      }
    }
    console.log(parseInt(x));
    return x;
}*/

function stop(){
  console.log(end);
  if (end == 0){
  document.cookie = "point="+score;
  alert("Vous allez etre redirigez vers le menu avec un total de :"+score+"point(s)");
  location.href = "menu.html"; 
}
}

function yellow(){
  
}