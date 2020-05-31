    //Add a keypress event at the key 'z'
    document.addEventListener("keypress", function (e) {
        if(e.keyCode=='122'){
          if(cuber.y > 0){cuber.y -= 50;}
          document.body.appendChild(app.view);
        }
        });
      //Add a keypress event at the key 'q'
          document.addEventListener("keypress", function (e) {
        if(e.keyCode=='113'){
          if(cuber.x > 100){cuber.x -= 50}
          document.body.appendChild(app.view);
  
        }
        });
      //Add a keypress event at the key 's'
      document.addEventListener("keypress", function (e) {
        if(e.keyCode=='115'){
          if (cuber.y<460){cuber.y += 50;}
          document.body.appendChild(app.view);
        }
        });
      //Add a keypress event at the key 'd'
      document.addEventListener("keypress", function (e) {
        if(e.keyCode=='100'){
          if(cuber.x < 480){cuber.x +=50;}
          document.body.appendChild(app.view);
        }
      });
      //Add a keypress event at the key 'space'
        document.addEventListener("keypress", function (e) {
        if(e.keyCode=='32'){
            let xrect = position_tbl(tableau,cuber);
            createBullet(xrect);
            createBullet(xrect);

            

        }
        });
  