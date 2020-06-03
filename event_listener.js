    //function listen(listener){
    //if (listener = true){

    
      //Add a keypress event at the key 'q'
          document.addEventListener("keypress", function (e) {
        if(e.keyCode=='113'){
          if(cuber.x > 100){cuber.x -= 50} //
          document.body.appendChild(app.view);
  
        }
        });
      //Add a keypress event at the key 'd'
      document.addEventListener("keypress", function (e) {
        if(e.keyCode=='100'){
          if(cuber.x < 350){cuber.x +=50;}
          document.body.appendChild(app.view);
        }
      });
      //Add a keypress event at the key 'space'
      document.addEventListener("keypress", function (e) {
        if(e.keyCode=='32'){
            let xrect = position_tbl(tableau,cuber);
            createBullet(xrect);
        }
        });
      //}
    //}
    
      document.addEventListener("keypress", function (e) {
      if(e.keyCode=='101'){
        stop();
      }
      });
      