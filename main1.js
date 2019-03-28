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

        let newCY;
        let newCX;
        let newCXx;
        let newCYy;

        newY = player.yRow + moveY;//flyttar i yaxel
        newX = player.xCell + moveX;//flyttar i x axel

        newYy = player.yRow + moveY + moveY;//flyttar i yaxel
        newXx = player.xCell + moveX + moveX;//flyttar i x axel

        newCY = Crate.yRow + moveY;//flyttar i yaxel
        newCX = Crate.xCell + moveX;//flyttar i x axel

        newYy = player.yRow + moveY + moveY;//flyttar i yaxel
        newXx = player.xCell + moveX + moveX;//flyttar i x axel

        let MovePlayer = document.getElementById("y" + player.yRow + "x" + player.xCell);//constant playerElement get y och x axel

        let Movenext = document.getElementById("y" + newY + "x" + newX);//constant playerElement get y och x axel


        let Movenextnext = document.getElementById("y" + newYy + "x" + newXx);//constant playerElement get y och x axel


        
        if (Movenext.classList.contains("Floor") || Movenext.classList.contains("Goal")&& !Movenextnext.classList.contains("Crate")) {
            MovePlayer.classList.remove("Player");
            Movenext.classList.add("Player");

            player.xCell = newX;
            player.yRow = newY;

            if(!Movenextnext.classList.contains("wall"))
            {
            if(Movenext.classList.contains("Crate"))
                       {
            if (!Movenextnext.classList.contains("Crate") ) {
               
                {
          
                console.log("move Carte");
                Movenext.classList.remove("Crate");

                Movenextnext.classList.add("Crate")
                }

            }
      
        }
    }
    
    }
  
    }

    }

DrawMap();