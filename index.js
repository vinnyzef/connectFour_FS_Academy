//initializing variables

//html connections
const tab = document.getElementById('table');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
//player vars
//count variables for winner function
let innaRow = 0;
let innaCol = 0;
let innaSlant = 0;
//boolean for winner func / draw var
let winner = false;
let drawCount = 0;
let startButton = document.getElementById('start');
let playerArr = [];
let winCheck;

startButton.addEventListener('click', function (e) {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    playerArr = [p1, p2];
    if (!p2) {
        playerArr = [p1, "Computer"];
        document.getElementById('p2').value = "Computer";
    }
    startButton.disabled = true;
    currPlayer = playerArr[Math.floor(Math.random() * 2)];
    text1.innerHTML = "It is " + currPlayer + "'s turn";

    if (currPlayer != "Computer") {
        text2.innerHTML = "Click Your desired column to drop your checker";
    }
    else {
        text2.innerHTML = "Click anywhere on the board to make the computer go!";
    }
    //add number to keep track of current player to pass through to end game function

});



//onClick function for dropping checkers into the board
tab.addEventListener('click', function (e) {
    if (winner != true && playerArr[1]) {

        let cell = e.target.closest('td');
        let col = cell.cellIndex;
        //array to grab grid coordinates to use later on in chickenDinner func


        text2.innerHTML = "";

        if (tab.rows[0].cells[col].innerHTML == '<img src="blank.png" alt="checker">') {
            if (currPlayer == "Computer") {
                col = Math.floor(Math.random() * 7);
                for (let i = 0; i < 6; i++) {
                    if (tab.rows[i].cells[col].innerHTML != '<img src="blank.png" alt="checker">') {
                        tab.rows[i - 1].cells[col].innerHTML = '<img src="blue.png" alt="checker">';
                        break;

                    }

                }
                //if bottom slot is empty fill checker automatically
                if (tab.rows[5].cells[col].innerHTML == '<img src="blank.png" alt="checker">') {
                    tab.rows[5].cells[col].innerHTML = '<img src="blue.png" alt="checker">'
                }


            }
            if (currPlayer == playerArr[0]) {

                for (let i = 0; i < 6; i++) {
                    if (tab.rows[i].cells[col].innerHTML != '<img src="blank.png" alt="checker">') {
                        tab.rows[i - 1].cells[col].innerHTML = '<img src="red.png" alt="checker">';
                        break;

                    }

                }
                //if bottom slot is empty fill checker automatically
                if (tab.rows[5].cells[col].innerHTML == '<img src="blank.png" alt="checker">') {
                    tab.rows[5].cells[col].innerHTML = '<img src="red.png" alt="checker">'
                }
            }
            if (currPlayer == playerArr[1] && playerArr[1] != "Computer") {

                for (let i = 0; i < 6; i++) {
                    if (tab.rows[i].cells[col].innerHTML != '<img src="blank.png" alt="checker">') {
                        tab.rows[i - 1].cells[col].innerHTML = '<img src="blue.png" alt="checker">';
                        break;
                    }

                }
                //if bottom slot is empty fill checker automatically
                if (tab.rows[5].cells[col].innerHTML == '<img src="blank.png" alt="checker">') {
                    tab.rows[5].cells[col].innerHTML = '<img src="blue.png" alt="checker">'
                }

            }

            if (currPlayer == playerArr[0]) {
                winCheck = 0;
                currPlayer = playerArr[1];
                text2.innerHTML = "Click Your desired column to drop your checker (Your color is 🔵)";
            }
            else {
                winCheck = 1;
                currPlayer = playerArr[0];
                text2.innerHTML = "Click Your desired column to drop your checker (Your color is 🔴)";
            }
            text1.innerHTML = "It's " + currPlayer + "'s" + " turn.";
            if (currPlayer == "Computer") {
                text2.innerHTML = "Click anywhere on board to make the computer take it's turn";
            }
        }

        else {
            text1.innerHTML = "This column is full, pick another one!";
            text2.innerHTML = "It's still " + currPlayer + "'s" + " turn.";

        }
        redWinner(winCheck);
        blueWinner(winCheck);
    }
});


function redWinner(playerIndex) {

    //checks for a winning row after a red token is dropped
    for (let j = 0; j < 6; j++) {
        for (let k = 0; k < 7; k++) {
            if (tab.rows[j].cells[k].innerHTML == '<img src="red.png" alt="checker">') {
                innaRow++;
                if (innaRow == 4) {
                    endGame(playerArr[playerIndex]);
                }
            }
            else {
                innaRow = 0;
            }
        }

    }
    //checks for a winning column after a token is dropped
    for (let l = 0; l < 7; l++) {
        for (let m = 0; m < 6; m++) {
            if (tab.rows[m].cells[l].innerHTML == '<img src="red.png" alt="checker">') {
                innaCol++;
                if (innaCol == 4) {
                    endGame(playerArr[playerIndex]);
                }
            }
            else {
                innaCol = 0;
            }
        }
    }

    //2 different for loops for going diagonaly down to the right

    for (let count = 0; count < 4; count++) {
        //this set always sets the start column(y) at 0
        let o = 0;
        //reset slant counter
        innaSlant = 0;
        //srart of loop for first diagonal "row"
        for (n = count; n < 6; n++) {
            if (tab.rows[n].cells[o].innerHTML == '<img src="red.png" alt="checker">') {
                innaSlant++;
                if (innaSlant == 4) {
                    endGame(playerArr[playerIndex]);
                }
            }
            else {
                innaSlant = 0;

            }
            //move one column over
            o++;
        }
    }

    // ////////////////////////////////////////////////////////

    for (let count = 1; count < 4; count++) {
        //this set always sets the start column(y) at 0
        let o = 0;
        //reset slant counter
        innaSlant = 0;
        //srart of loop for first diagonal "row"
        for (n = count; n < 7; n++) {
            if (tab.rows[o].cells[n].innerHTML == '<img src="red.png" alt="checker">') {
                innaSlant++;
                if (innaSlant == 4) {
                    endGame(playerArr[playerIndex]);
                }
            }
            else {
                innaSlant = 0;

            }
            //move one row down
            o++;
        }
    }


    //2 for loops going up and to the right for diagonal matches
    for (let count = 3; count < 6; count++) {
        //this set always sets the start column(y) at 0
        let o = 0;
        //reset slant counter
        innaSlant = 0;
        //srart of loop for first diagonal "row"
        for (n = count; n >= 0; n--) {
            if (tab.rows[n].cells[o].innerHTML == '<img src="red.png" alt="checker">') {
                innaSlant++;
                if (innaSlant == 4) {
                    endGame(playerArr[playerIndex]);
                }
            }
            else {
                innaSlant = 0;

            }
            //move one column over
            o++;
        }
    }
    //last diagonal loop
    for (let count = 1; count < 4; count++) {
        //this set always sets the start column(y) at 5
        let o = 5;
        //reset slant counter
        innaSlant = 0;
        //srart of loop for first diagonal "row"
        for (n = count; n < 7; n++) {
            if (tab.rows[o].cells[n].innerHTML == '<img src="red.png" alt="checker">') {
                innaSlant++;
                if (innaSlant == 4) {
                    endGame(playerArr[playerIndex]);
                }
            }
            else {
                innaSlant = 0;

            }
            //move one row up
            o--;
        }
    }


}














function blueWinner() {

    //checks for a winning row after a blue token is dropped
    for (let j = 0; j < 6; j++) {
        for (let k = 0; k < 7; k++) {
            if (tab.rows[j].cells[k].innerHTML == '<img src="blue.png" alt="checker">') {
                innaRow++;
                if (innaRow == 4) {
                    endGame("Blue");
                }
            }
            else {
                innaRow = 0;
            }
        }

    }
    //checks for a winning column after a token is dropped
    for (let l = 0; l < 7; l++) {
        for (let m = 0; m < 6; m++) {
            if (tab.rows[m].cells[l].innerHTML == '<img src="blue.png" alt="checker">') {
                innaCol++;
                if (innaCol == 4) {
                    endGame("Blue");
                }
            }
            else {
                innaCol = 0;
            }
        }
    }

    //2 different for loops for going diagonaly down to the right

    for (let count = 0; count < 4; count++) {
        //this set always sets the start column(y) at 0
        let o = 0;
        //reset slant counter
        innaSlant = 0;
        //srart of loop for first diagonal "row"
        for (n = count; n < 6; n++) {
            if (tab.rows[n].cells[o].innerHTML == '<img src="blue.png" alt="checker">') {
                innaSlant++;
                if (innaSlant == 4) {
                    endGame("Blue");
                }
            }
            else {
                innaSlant = 0;

            }
            //move one column over
            o++;
        }
    }

    // ////////////////////////////////////////////////////////

    for (let count = 1; count < 4; count++) {
        //this set always sets the start column(y) at 0
        let o = 0;
        //reset slant counter
        innaSlant = 0;
        //srart of loop for first diagonal "row"
        for (n = count; n < 7; n++) {
            if (tab.rows[o].cells[n].innerHTML == '<img src="blue.png" alt="checker">') {
                innaSlant++;
                if (innaSlant == 4) {
                    endGame("Blue");
                }
            }
            else {
                innaSlant = 0;

            }
            //move one row down
            o++;
        }
    }


    //2 for loops going up and to the right for diagonal matches
    for (let count = 3; count < 6; count++) {
        //this set always sets the start column(y) at 0
        let o = 0;
        //reset slant counter
        innaSlant = 0;
        //srart of loop for first diagonal "row"
        for (n = count; n >= 0; n--) {
            if (tab.rows[n].cells[o].innerHTML == '<img src="blue.png" alt="checker">') {
                innaSlant++;
                if (innaSlant == 4) {
                    endGame("Blue");
                }
            }
            else {
                innaSlant = 0;

            }
            //move one column over
            o++;
        }
    }
    //last diagonal loop
    for (let count = 1; count < 4; count++) {
        //this set always sets the start column(y) at 5
        let o = 5;
        //reset slant counter
        innaSlant = 0;
        //srart of loop for first diagonal "row"
        for (n = count; n < 7; n++) {
            if (tab.rows[o].cells[n].innerHTML == '<img src="blue.png" alt="checker">') {
                innaSlant++;
                if (innaSlant == 4) {
                    endGame("Blue");
                }
            }
            else {
                innaSlant = 0;

            }
            //move one row up
            o--;
        }
    }


}
function drawGame() {
    text1.innerHTML = "It's a draw!"
    text2.innerHTML = "Press the reset game button to play again!"
    winner = true;

}

function endGame(currentPlayer) {
    text1.innerHTML = currentPlayer + " has won the game!";
    text2.innerHTML = "Press the reset game button to play again!"
    winner = true;

}

document.getElementById("reset").addEventListener('click', function () {
    for (i = 0; i < 6; i++) {
        for (j = 0; j < 7; j++) {
            tab.rows[i].cells[j].innerHTML = '<img src="blank.png" alt="checker">';
        }
    }
    text1.innerHTML = "Enter your names";
    text2.innerHTML = "Leave second box blank for single player";
    //player vars
    //count variables for winner function
    innaRow = 0;
    innaCol = 0;
    innaSlant = 0;
    //boolean for winner func
    winner = false;
    startButton.disabled = false;
    p1.value = "";
    p2.value = "";
    playerArr = [];
});




