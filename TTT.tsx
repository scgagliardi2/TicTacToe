var turn: string = 'O';
var GameWon: boolean = false;
        
function changeTurn() : void { 
    if (turn === 'O') {
        turn = 'X';
        document.getElementById("tttDisplay")!.innerHTML = turn + "'s turn.";
        return;
    }
    if (turn === 'X') {
        turn = 'O';
        document.getElementById("tttDisplay")!.innerHTML = turn + "'s turn.";
        return;
    }
}

function placeMove(id: string, letter: string) { 
    if (!GameWon) {
        if (document.getElementById(id)!.innerHTML == 'X' || document.getElementById(id)!.innerHTML == 'O'){
            document.getElementById('tttInfo')!.innerHTML = "You cannot play there."
            return;
        } 
        else {
            document.getElementById('tttInfo')!.innerHTML = "";
            document.getElementById(id)!.innerHTML = letter;
            changeTurn();
            placeWin(letter);
        }
    }
}

function placeWin(letter: string) { 
    if (document.getElementById('tl')!.innerHTML == document.getElementById('tm')!.innerHTML) {
        if (document.getElementById('tl')!.innerHTML == document.getElementById('tr')!.innerHTML) {
            if (document.getElementById('tl')!.innerHTML == 'X' || document.getElementById('tl')!.innerHTML == 'O') {
            document.getElementById('tttDisplay')!.innerHTML = letter + " wins!";
            GameWon = true;
            }
        }
    }
    if (document.getElementById('ml')!.innerHTML == document.getElementById('mm')!.innerHTML) {
        if (document.getElementById('ml')!.innerHTML == document.getElementById('mr')!.innerHTML) {
            if (document.getElementById('ml')!.innerHTML == 'X' || document.getElementById('ml')!.innerHTML == 'O') {
            document.getElementById('tttDisplay')!.innerHTML = letter + " wins!";
            GameWon = true;
            }
        }
    }
    if (document.getElementById('bl')!.innerHTML == document.getElementById('bm')!.innerHTML) {
        if (document.getElementById('bl')!.innerHTML == document.getElementById('br')!.innerHTML) {
            if (document.getElementById('bl')!.innerHTML == 'X' || document.getElementById('bl')!.innerHTML == 'O') {
            document.getElementById('tttDisplay')!.innerHTML = letter + " wins!";
            GameWon = true;
            }
        }
    }
    if (document.getElementById('tl')!.innerHTML == document.getElementById('ml')!.innerHTML) {
        if (document.getElementById('tl')!.innerHTML == document.getElementById('bl')!.innerHTML) {
            if (document.getElementById('tl')!.innerHTML == 'X' || document.getElementById('tl')!.innerHTML == 'O') {
            document.getElementById('tttDisplay')!.innerHTML = letter + " wins!";
            GameWon = true;
            }
        }
    }
    if (document.getElementById('tm')!.innerHTML == document.getElementById('mm')!.innerHTML) {
        if (document.getElementById('tm')!.innerHTML == document.getElementById('bm')!.innerHTML) {
            if (document.getElementById('tm')!.innerHTML == 'X' || document.getElementById('tm')!.innerHTML == 'O') {
            document.getElementById('tttDisplay')!.innerHTML = letter + " wins!";
            GameWon = true;
            }
        }
    }
    if (document.getElementById('tr')!.innerHTML == document.getElementById('mr')!.innerHTML) {
        if (document.getElementById('tr')!.innerHTML == document.getElementById('br')!.innerHTML) {
            if (document.getElementById('tr')!.innerHTML == 'X' || document.getElementById('tr')!.innerHTML == 'O') {
            document.getElementById('tttDisplay')!.innerHTML = letter + " wins!";
            GameWon = true;
            }
        }
    }
    if (document.getElementById('tl')!.innerHTML == document.getElementById('mm')!.innerHTML) {
        if (document.getElementById('tl')!.innerHTML == document.getElementById('br')!.innerHTML) {
            if (document.getElementById('tl')!.innerHTML == 'X' || document.getElementById('tl')!.innerHTML == 'O') {
            document.getElementById('tttDisplay')!.innerHTML = letter + " wins!";
            GameWon = true;
            }
        }
    } else if (document.getElementById('tr')!.innerHTML == document.getElementById('mm')!.innerHTML) {
        if (document.getElementById('tr')!.innerHTML == document.getElementById('bl')!.innerHTML) {
            if (document.getElementById('tr')!.innerHTML == 'X' || document.getElementById('tr')!.innerHTML == 'O') {
                document.getElementById('tttDisplay')!.innerHTML = letter + " wins!";
                GameWon = true;
            }
        }
    }
}

function reset() {
    turn = 'O';
    GameWon = false;
    document.getElementById("tttDisplay")!.innerHTML = turn + "'s turn.";
    document.getElementById('tttInfo')!.innerHTML = "";
    document.getElementById('tl')!.innerHTML = "";
    document.getElementById('tm')!.innerHTML = "";
    document.getElementById('tr')!.innerHTML = "";
    document.getElementById('ml')!.innerHTML = "";
    document.getElementById('mm')!.innerHTML = "";
    document.getElementById('mr')!.innerHTML = "";
    document.getElementById('bl')!.innerHTML = "";
    document.getElementById('bm')!.innerHTML = "";
    document.getElementById('br')!.innerHTML = "";
}