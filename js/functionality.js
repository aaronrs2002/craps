let diceArr = [];
let diceTotal = Number();
let pointTotal = null;
let playerTotalMoney = 500;
if (localStorage.getItem("balance") && Number(localStorage.getItem("balance"))) {
    playerTotalMoney = Number(localStorage.getItem("balance"));
}
document.getElementById("playerTotalMoney").innerHTML = "Balance: $" + playerTotalMoney;
let betAmount = 0;

function reset(winLose) {
    if (winLose === "win") {
        playerTotalMoney = playerTotalMoney + betAmount;
    } else {
        playerTotalMoney = playerTotalMoney - betAmount;
    }
    localStorage.setItem("balance", playerTotalMoney);
    document.getElementById("playerTotalMoney").innerHTML = "Balance: $" + playerTotalMoney;
    document.getElementById("rollBt").classList.add("hide");
    document.getElementById("playAgainBt").classList.remove("hide");

    return false;
}

function playAgain() {
    diceArr = [];
    diceTotal = Number();
    pointTotal = null;
    document.getElementById("pointNumber").innerHTML = null;
    document.getElementById("currentBet").innerHTML = "Place your bet.";

    if (document.querySelectorAll(".alert")) {
        [].forEach.call(document.querySelectorAll(".alert-light"), function (e) {
            e.classList.add("hide");
        })
    }



    [].forEach.call(document.querySelectorAll(".betAmount"), function (e) {
        e.classList.remove("active");
        e.removeAttribute('disabled');
    });
    document.getElementById("diceToggle").classList.add("hide");
    document.getElementById("playAgainBt").classList.add("hide");
}


function calculate(diceTotal) {
    let status = "";
    if (!Number(pointTotal)) {
        if (diceTotal === 7 || diceTotal === 11) {
            status = "You Win";
            reset("win");
        }
        if (diceTotal === 2 || diceTotal === 3 || diceTotal === 12) {
            status = "You Lost.";
            reset("lose");
        }

        if (diceTotal === 4 || diceTotal === 5 || diceTotal === 6 || diceTotal === 8 || diceTotal === 9 || diceTotal === 10) {
            status = "Your Point number is " + diceTotal;
            pointTotal = diceTotal;
            document.getElementById("pointNumber").innerHTML = "Point Number: " + pointTotal;
        }
    } else {
        if (diceTotal === 7) {
            status = "You Lost";
            reset("lose");
        } else {
            if (Number(diceTotal) === Number(pointTotal)) {
                status = "Your Point number is " + diceTotal + ". You Win!";
                reset("win");
            } else {
                status = "Roll Again.";
            }
        }
    }
    document.getElementById("rollStatus").innerHTML = status;
}



function rollDice() {
    if (document.querySelectorAll(".alert")) {
        [].forEach.call(document.querySelectorAll("div.hide"), function (e) {
            e.classList.remove("hide");
        });
    }
    diceTotal = Number();
    diceArr = []
    for (let i = 0; i < 2; i++) {
        diceArr.push(Math.floor(Math.random() * 6));
    }
    const diceOne = (diceArr[0] + 1);
    const diceTwo = (diceArr[1] + 1);
    diceTotal = diceOne + diceTwo;
    document.getElementById("diceOne").setAttribute("data-num", diceOne);
    document.getElementById("diceTwo").setAttribute("data-num", diceTwo);
    document.getElementById("diceTotal").innerHTML = "Rolled: " + diceTotal;
    calculate(diceTotal);
}

function bet(amount) {
    document.getElementById("diceTotal").innerHTML = "";
    [].forEach.call(document.querySelectorAll(".betAmount"), function (e) {
        e.classList.remove("active");
        e.setAttribute('disabled', 'true');
    });
    document.getElementById("currentBet").innerHTML = "Current Bet: $" + amount;
    document.querySelector(".betAmount[alt='" + amount + "']").classList.add("active");
    document.getElementById("rollBt").classList.remove("hide");
    document.getElementById("diceToggle").classList.remove("hide");
    betAmount = amount;
}