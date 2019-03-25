"use strict";

const player = {
    yRow: -1,
    xCell: -1
    .top
}

const Crate = {
    CyRow: -1,
    CxCell: -1
}

document.body.addEventListener('keyup', keyConverter);



function DrawMap() {

    var theMap = document.getElementById("mapBox");

    theMap.style.width = (tileMap01.width * 50) + "px"

    console.log(theMap);
    for (var y = 0; y < tileMap01.mapGrid.length; y++) {
        for (var x = 0; x < tileMap01.mapGrid[y].length; x++) {
            //console.log(tileMap01.mapGrid[y][x][0]);
            var block = document.createElement("div");
            block.classList.add("Box");
            block.id = ("y" + y + "x" + x);//ger x och y kordinaterna

            switch (tileMap01.mapGrid[y][x][0]) {
                case 'W':
                    //console.log("wall case");
                    block.classList.add("Wall");
                    break;
                case ' ':
                    //console.log("floor case");
                    block.classList.add("Floor");
                    break;
                case 'B':
                    //console.log("wall case");
                    block.classList.add("Floor");
                    block.classList.add("Crate");
                    break;
                case 'P':
                    //console.log("floor case");
                    block.classList.add("Floor");
                    block.classList.add("Player");
                    player.xCell = x;
                    player.yRow = y;
                    break;
                case 'G':
                    //console.log("wall case");
                    block.classList.add("Goal");
                    break;

            }

            theMap.appendChild(block);



        }
    }
}


function keyConverter(e) {


    switch (e.key) {

        case "ArrowUp":
            console.log("loguppS")
            console.log(player.xCell);
            MovePlayer(0, -1);
            console.log(MovePlayer);


            break;
        case "ArrowDown":
        console.log("down")
           MovePlayer(0, 1);
           console.log(MovePlayer);
            break;
        case "ArrowLeft":
        console.log("logleft")
        MovePlayer(-1,0);
      
      

            break;

        case "ArrowRight":
            MovePlayer(1, 0);

            break;
    }




    function MovePlayer(moveX, moveY,)//gör en function move i x och y led
    
    {
      
        let newY;
        let newX;

        newY = player.yRow + moveY;//flyttar i yaxel
        newX = player.xCell + moveX;//flyttar i x axel
      

        let MovePlayer = document.getElementById("y" + player.yRow + "x" + player.xCell);//constant playerElement get y och x axel
      
        //nästa block
        console.log(player.xCell)
        
        let Movenext = document.getElementById("y" + newY + "x" + newX);//constant playerElement get y och x axel
      if(Movenext.classList.contains("Floor")|| Movenext.classList.contains("Goal"))
      {
        MovePlayer.classList.remove("Player");
        Movenext.classList.add("Player");
        
        player.xCell=newX;
        player.yRow=newY;
      
      }
    if(Movenext.classList.contains("Crate"))
        {
           MoveCrate.classList.contains.remove("Crate")
           MoveCrate.classList.contains.add("Crate");
            
            Crate.xCell=newX;
            Crate.yRow=newY; 
        }
    
    }
}



    function MoveCrate(moveCX, moveCY) {
       
        {
      
            let newY;
            let newX;
    
            newY = Crate.yRow + moveY;//flyttar i yaxel
            newX = Crate.xCell + moveX;//flyttar i x axel
          
    
            let MoveCrate= document.getElementById("y" + Crate.yRow + "x" + Crate.xCell);//constant playerElement get y och x axel
          
            //nästa block
            console.log(Crate.xCell)
            
            let Movenext = document.getElementById("y" + newY + "x" + newX);//constant playerElement get y och x axel
          if(MoveCrate.classList.contains("Player"))
          {
            MoveCrate.classList.remove("Crate");
            MoveCrate.classList.add("Crate");
            
            Crate.xCell=newX;
            Crate.yRow=newY;
          
          }
            
        
        }
    }

    


DrawMap();