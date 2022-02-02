//initializing variables
const tab = document.getElementById('table');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
let currPlayer = 'red';
let playerCheck = 0;
let innaRow = 0;
let innaCol = 0;
let winner = false;
let cellCoords = [];







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

                    //passes coordinates into an array that will be use for winner function
                    cellCoords.push(col);
                    cellCoords.push((i - 1));
                    // alert(cellCoords);
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

});


// function winnerWinnerChickenDinner(arr) {
//     //check each row for winner
//     for (let k = 0; k < 7; k++) {
//         if (true) {
//             innaRow++;
//             if (innaRow == 4) {
//                 winner = true;
//             }
//         }
//         else {

//         }
//     }

// }






