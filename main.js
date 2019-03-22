"use strict";

const player = {
    yRow: -1,
    xCell: -1
}
const Crate = {
    yRow: -1,
    xCell: -1
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

            console.log()

        }
    }
}


function keyConverter(e) {

    switch (e.key) {

        case "ArrowUp":
         MovePlayer(0, -1) ;
        if(crate.yRow=player.yRow)
        {
            crate.yRow=crate.yRow+1;
        }

{
    console.log("same")
}

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
    
    



    }


    function MovePlayer(moveX, moveY)//gör en function move i x och y led
    {

        let newY = player.yRow + moveY;//flyttar i x axel
        let newX = player.xCell + moveX;//flyttar i y axel
        let newYY = player.yRow + moveY + moveY;
        let newXX = player.xCell + moveX + moveX;
     
        const playerElement = document.getElementById("y" + player.yRow + "x" + player.xCell);//constant playerElement get y och x axel
        const moveToCube = document.getElementById("y" + newY + "x" + newX);//moveToCube får värde från new y och new x
    }
  


        if (moveToCube.classList.contains("Floor") || moveToCube.classList.contains("Goal")) {

            //flytta
            playerElement.classList.remove("Player");//tar bort spelarens gamla possition 
            moveToCube.classList.add("Player");//addar ny position

            player.yRow = newY;//flyttar spelaren till nya y positionen
            player.xCell = newX;//flyttar spelaren till nya x poaitionwn
        }
        else {
            console.log("what was a wall")
        }
        
    
    DrawMap();






