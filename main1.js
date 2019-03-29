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
            MovePlayer(0, -1);

            break;

        case "ArrowDown":
            MovePlayer(0, 1);
            break;

        case "ArrowLeft":

            MovePlayer(-1, 0);

            break;

        case "ArrowRight":
            MovePlayer(1, 0);

            break;
    }



    function MovePlayer(moveX, moveY, )//gör en function move i x och y led

    {

        let newY;
        let newX;
        let newXx;
        let newYy;
        let newPXx;
        let newPYy;

        let newCY;
        let newCX;
        let newCXx;
        let newCYy;
        let check=true;

        newY = player.yRow + moveY;//flyttar i yaxel
        newX = player.xCell + moveX;//flyttar i x axel

        newYy = player.yRow + moveY + moveY+moveY;//flyttar i yaxel
        newXx = player.xCell + moveX + moveX+moveX;//flyttar i x axel

        newCY = Crate.yRow + moveY;//flyttar i yaxel
        newCX = Crate.xCell + moveX;//flyttar i x axel

        newYy = player.yRow + moveY + moveY;//flyttar i yaxel
        newXx = player.xCell + moveX + moveX;//flyttar i x axel

        newPYy =Crate.yRow + moveY + moveY;//flyttar i yaxel
        newPXx = Crate.xCell + moveX + moveX;//flyttar i x axel
        let MovePlayer = document.getElementById("y" + player.yRow + "x" + player.xCell);//constant playerElement get y och x axel
        let MoveCarte=document.getElementById("y" + Crate.yRow +newY +"x" + Crate.xCell+newX);
        let Movenext = document.getElementById("y" + newY + "x" + newX);//constant playerElement get y och x axel


        let Movenextnext = document.getElementById("y" + newYy + "x" + newXx);//constant playerElement get y och x axel
        let PlayerMovenextnext = document.getElementById("y" + moveY+moveY + "x" + moveX+moveX);//constant playerElement get y och x axel
        
        
       
        if ((Movenext.classList.contains("Floor") || Movenext.classList.contains("Goal")) && !Movenext.classList.contains("Carte"))  {
          
            {
                if (Movenext.contains("Carte")&&(!Movenextnext.contains("Crate"))) {
            MovePlayer.classList.remove("Player");
            Movenext.classList.add("Player");

            player.xCell = newX;
            player.yRow = newY;
                }

            if(!Movenext.classList.contains("wall") )
            {
               
           
                console.log("innan if")
                  if (Movenextnext.classList.contains("Crate")) { {    
                    console.log("If början")
           {
               console.log("Lägga till ta bort Carte")
                {
          
                console.log("move Carte");
                MoveCarte.classList.remove("Crate");
                Movenext.classList.add("Carte");

               // Movenextnext.classList.add("Crate")
                }
            }

            }
        }
      
        }
    }
    
}

}
    }
  
    

    

DrawMap();