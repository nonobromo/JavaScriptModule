const divs = document.querySelectorAll("#board>div");
let isX = true;
let isGameOver = false;

let winX;
let winO;
let xScore = 0;
let oScore = 0;

// לולאה העוברת על כל המשבצות
divs.forEach(div => {
    // הוספת פונקציה המופעלת בעת לחיצה על אחת המשבצות
    div.addEventListener("click", function (ev) {
        if (isGameOver) {
            return;
        }

        // האלמנט שעליו לחץ השחקן
        const elem = ev.target;

        // אם המשבצת מלאה, הפונקציה נעצרת
        if (elem.innerText) {
            return;
        }

        if (isX) {
            elem.innerText = "X";
        } else {
            elem.innerText = "O";
        }

        // שינוי תור
        isX = !isX;
        // הפעלת הפונקציה של המחווה הויזואלית
        showTurn();
        checkWinner();
    });
})

/**
 * פונקציה הנותנת מחווה של איזה שחקן התור הנוכחי
 */
function showTurn() {
    // קודם כל, הסרנו את הקלאס מהשחקן האחרון
    document.querySelector('.currentTurn').classList.remove('currentTurn');

    // שם את הקלאס בהתאם לתור השחקן
    if (isX) {
        document.querySelector("#players>div:first-child").classList.add('currentTurn');
    } else {
        document.querySelector("#players>div:last-child").classList.add('currentTurn');
    }
}

function checkWinner() {
    // מערך של מערכים של מיקומים אפשריים לניצחון
    const options = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // רץ על המערך של כל האופציות
    for (const op of options) {
        // בודק את המיקומים של כל מערך
        if (op.every(myIndex => divs[myIndex].innerText === 'X')) {
            winner(op, 'X');
            xScore++;
            updateScore();
            setTimeout(clearTiles, 3000)
            winX = true;
            setTimeout(resetGame, 3000)
            break;
        } else if (op.every(myIndex => divs[myIndex].innerText === 'O')) {
            winner(op, 'O');
            oScore++;
            updateScore();
            setTimeout(clearTiles, 3000);
            winO = true;
            setTimeout(resetGame, 3000)
            break;
        }
    }
}


function winner(op, win) {
    setTimeout(() => alert(win + " is winner!"), 50);

    op.forEach(x => divs[x].classList.add('win'));

    isGameOver = true;
}

function clearTiles() {
    for (const div of divs) {
        div.innerHTML = "";
        div.style.backgroundColor = "white";
    }
}



function resetGame() {
    isGameOver = false;
    if (winX) {
        isX = true;
    } else if (winO) {
        isX = false;
    }
    showTurn();
}

function updateScore() {
    document.querySelector("#x-score").innerHTML = "score is: " + xScore;
    document.querySelector("#o-score").innerHTML = "score is: " + oScore;
}

const btnScore = document.getElementById("reset-score");

btnScore.addEventListener("click", function () {
    xScore = 0;
    oScore = 0;
    document.querySelector("#x-score").innerHTML = "score is: " + xScore;
    document.querySelector("#o-score").innerHTML = "score is: " + oScore;

})

/** 
יש לצבור נקודות לכל שחקן
המנצח הוא הראשון במשחק הבא
כשמסתיים משחק יש לאפשר להתחיל משחק חדש
להתייחס לאפשרות שאין אף מנצח
יש לאפשר לאפס ניקוד

בונוס!
יש להציג בצורה וויזואלית הודעה עם המנצח
אפשרות ליעד של נקודות
יש לשמור את הנתונים ב - localStorage
*/

