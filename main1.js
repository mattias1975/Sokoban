"use strict";

const player = {
    yRow: -1,
    xCell: -1
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



    function MovePlayer(moveX, moveY)//gör en function move i x och y led
    {
        let newY;
        let newX;

        newY = player.yRow + moveY;//flyttar i yaxel
        newX = player.xCell + moveX;//flyttar i x axel

        let MovePlayer = document.getElementById("y" + player.yRow + "x" + player.xCell);//constant playerElement get y och x axel
        console.log(MovePlayer);
        //nästa block
        
        let Movenext = document.getElementById("y" + newY + "x" + newX);//constant playerElement get y och x axel
        console.log(Movenext);
        Movenext.classList.add("Player");
        console.log(Movenext.className);


    }

    function MoveCrate(moveCX, moveCY) {
        let newCY;
        let newCX;

        newCY = Crate.yRow + moveCY;//flyttar i x axel
        newCX = Crate.xCell + moveCX;//flyttar i x axel


        let CrateMove = document.getElementById("Cy" + newCY + "CY" + newCY);//moveToCube får värde från new y och new x



        // const infrontOfCrate = Document.getElementById("y" + newY + "x" + newX);

        let moveY;
        let moveX;
        let newY = player.yRow + moveY;//flyttar i x axel
        let newX = player.xCell + moveX;
        moveY = player.Yrow + 1;
        moveX = player.xCell + 1;

        let MoveToCube = document.getElementById("y" + newCY + "x" + newCX);//moveToCube får värde från new y och new x
        console.log(moveToCube);
        if (MoveToCube.classList.Contains("floor") || MoveToCube.classList.Contains("Goal")) {
            let moveToCube = document.getElementById("y" + newY + "x" + newX);//moveToCube får värde från new y och new x

            //flytta
            playerElement.classList.remove("Player");//tar bort spelarens gamla possition 
            player.yRow = newY;//flyttar spelaren till nya y positionen
            player.xCell = newX;//flyttar spelaren till nya x poaitionwn
            moveToCube.classList.add("Player");//addar ny position
        }
        let createElement = document.getElementById("y" + newY + "x" + newY);
        if (MoveCrate.classList.contains("floor") || MoveCrate.classList.contains("Goal") && player.xCell == Crate.xCell - 1 && Crate != "wall") {

            CrateElement.classList.remove("Crate");//tar bort block
            Crate.yRow = newCY;//ger Crate ny y pos
            Crate.xCell = newCX;// ger Crate ny x pos
            MoveCrate.classList.add("Crate"); //lägger till en ny Crate på nya postionen
        }
    }
}

DrawMap();