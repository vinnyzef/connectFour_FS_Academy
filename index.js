//initializing variables

//html connections
const tab = document.getElementById('table');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
//player vars
let currPlayer = 'red';
let playerCheck = 0;
//count variables for winner function
let innaRow = 0;
let innaCol = 0;
let innaSlant = 0;
//boolean for winner func
let winner = false;







//onClick function for dropping checkers into the board
tab.addEventListener('click', function (e) {
    let cell = e.target.closest('td');
    let col = cell.cellIndex;
    //array to grab grid coordinates to use later on in chickenDinner func


    text2.innerHTML = "";

    if (tab.rows[0].cells[col].innerHTML == '<img src="blank.png" alt="checker">') {
        if (currPlayer == 'red') {

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
        if (currPlayer == 'blue') {

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

        if (playerCheck % 2 == 0) {
            currPlayer = 'blue';
        }
        else {
            currPlayer = 'red';
        }
        playerCheck++;
        text1.innerHTML = "It's " + currPlayer + " player's" + " turn.";

    }

    else {
        text1.innerHTML = "This column is full, pick another one!";
        text2.innerHTML = "It's still " + currPlayer + " player's" + " turn.";

    }
    redWinner();
    blueWinner();
});


function redWinner() {
    // //checks for a winning row after a red token is dropped
    // for (let j = 0; j < 6; j++) {
    //     for (let k = 0; k < 7; k++) {
    //         if (tab.rows[j].cells[k].innerHTML == '<img src="red.png" alt="checker">') {
    //             innaRow++;
    //             if (innaRow == 4) {
    //                 alert("winner!!!!");
    //             }
    //         }
    //         else {
    //             innaRow = 0;
    //         }
    //     }

    // }
    // //checks for a winning column after a token is dropped
    // for (let l = 0; l < 7; l++) {
    //     for (let m = 0; m < 6; m++) {
    //         if (tab.rows[m].cells[l].innerHTML == '<img src="red.png" alt="checker">') {
    //             innaCol++;
    //             if (innaCol == 4) {
    //                 alert("winner!!!!");
    //             }
    //         }
    //         else {
    //             innaCol = 0;
    //         }
    //     }
    // }

    //2 different for loops for going diagonaly down to the right

//     for (let count = 0; count < 4; count++) {
//         //this set always sets the start column(y) at 0
//         let o = 0;
//         //reset slant counter
//         innaSlant = 0;
//         //srart of loop for first diagonal "row"
//         for (n = count; n < 6; n++) {
//             if (tab.rows[n].cells[o].innerHTML == '<img src="red.png" alt="checker">') {
//                 innaSlant++;
//                 if (innaSlant == 4) {
//                     alert("winner!!!!");
//                 }
//             }
//             else {
//                 innaSlant = 0;

//             }
//             //move one column over
//             o++;
//         }
//     }

// ////////////////////////////////////////////////////////

// for (let count = 1; count < 4; count++) {
//     //this set always sets the start column(y) at 0
//     let o = 0;
//     //reset slant counter
//     innaSlant = 0;
//     //srart of loop for first diagonal "row"
//     for (n = count; n < 7; n++) {
//         if (tab.rows[o].cells[n].innerHTML == '<img src="red.png" alt="checker">') {
//             innaSlant++;
//             if (innaSlant == 4) {
//                 alert("winner!!!!");
//             }
//         }
//         else {
//             innaSlant = 0;

//         }
//         //move one row down
//         o++;
//     }
// }


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
                alert("winner!!!!");
            }
        }
        else {
            innaSlant = 0;

        }
        //move one column over
        o++;
    }
}


}














// function blueWinner() {
//     //checks for a winning row after a red token is dropped
//     for (let j = 0; j < 6; j++) {
//         for (let k = 0; k < 7; k++) {
//             if (tab.rows[j].cells[k].innerHTML == '<img src="blue.png" alt="checker">') {
//                 innaRow++;
//                 if (innaRow == 4) {
//                     alert("winner!!!!");
//                 }
//             }
//             else {
//                 innaRow = 0;
//             }
//         }

//     }
//     //checks for a winning column after a token is dropped
//     for (let l = 0; l < 7; l++) {
//         for (let m = 0; m < 6; m++) {
//             if (tab.rows[m].cells[l].innerHTML == '<img src="blue.png" alt="checker">') {
//                 innaCol++;
//                 if (innaCol == 4) {
//                     alert("winner!!!!");
//                 }
//             }
//             else {
//                 innaCol = 0;
//             }
//         }

//     }


// }





