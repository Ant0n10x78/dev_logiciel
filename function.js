

   //Create bullet
   function createBullet(xrect){
        console.log("JA");
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
      var id = setInterval(frame, 10);
      function frame() {
    if (pos == 500) {
      clearInterval(id);
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


    function createRect(rect,x){

      rect.x = x;
      rect.y = 0;
      
        //Function move down
        function myMove() {  
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
      if (pos == 500) {
        clearInterval(id);
        return false;
      } else {
        let plus =1;
        pos+=plus; 
        rect.y +=plus;
        //console.log(rect.y);
        document.body.appendChild(app.view);
      }
      }
      }
      myMove();
      app.stage.addChild(rect);
      return rect;
      
      }


            //xone is the shoot ,parametre en fonction de largeur et hauteur
            function hitTest(xone,xtwo){
              console.log("xxxxxxxx");
                if (xone.y==xtwo.y+50 || xone.y==xtwo.y+51 || xone.y==xtwo.y+49){
                  if (xtwo.x-1 <= xone.x && xtwo.x-51 >= xone.x ){
                    score += 20;
                    //console.log("hit!!!!Score::"+score);
                    xtwo.y = 500;
                  }
                  if (xtwo.x <= xone.x && xtwo.x+50 >= xone.x ){
                    score += 20;
                    //console.log("hit!!!!Score::"+score);
                    xtwo.y = 500;
                  }
                  if (xtwo.x+1 <= xone.x && xtwo.x+51 >= xone.x ){
                    score += 20;
                    console.log("hit!!!!Score::"+score);
                    xtwo.y = 500;
                  }
                  message.text = score;
                  }
              }
              //Random generator ,0 to max only integer
              function getRandom(max){
                return Math.floor(Math.random() * Math.floor(max));
              }
              
              function callBlock(){
              let aleatoire = getRandom(6);
              if (aleatoire == 0){createRect(rect0,100);}
              if (aleatoire == 1){createRect(rect1,150);}
              if (aleatoire == 2){createRect(rect2,200);}
              if (aleatoire == 3){createRect(rect3,250);}
              if (aleatoire == 4){createRect(rect4,300);}
              if (aleatoire == 5){createRect(rect5,350);}
              setTimeout(callBlock,1000);
              }

              //fonction qui détermine la position en pixel en celle du tableau
              function position_tbl(tableau,cuber){
                let position = (cuber.x/50)-2;
                //console.log(position);
                //console.log(tableau[position]);
                return tableau[position];
              }