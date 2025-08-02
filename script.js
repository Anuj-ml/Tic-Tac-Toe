  
let btns = document.querySelectorAll("#button");
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset");
// console.log(btns);
let turn = 1;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turn%2 != 0)    {
            msg.innerText = "Player 0's Turn";
            msg.style.backgroundColor = "lightpink";
            btn.innerText = "X";
            btn.style.backgroundColor = "lightyellow";
            turn++;
        }
        else{
            msg.innerText = "Player X's Turn";
            msg.style.backgroundColor = "lightyellow";
            btn.innerText = "0";
            btn.style.backgroundColor = "lightpink";
            turn++;
        }
        btn.disabled = true;
        checkWinner(turn);
    })
})

const checkWinner = (turn) => {
    for(let pattern of winPatterns) {
        let pos0 = btns[pattern[0]].innerText;
        let pos1 = btns[pattern[1]].innerText;
        let pos2 = btns[pattern[2]].innerText;
        if( (pos0 !== "") && (pos1 !== "") && (pos2 !== ""))    {
            if((pos0 === pos1) && (pos1 === pos2))    {
                msg.innerText = `Winner - ${pos0}`;
                if(pos0 ==="X")
                    msg.style.backgroundColor = "lightyellow";
                else
                    msg.style.backgroundColor = "lightpink";
                btnsDisabled();
                reset.innerText = "New Game";
            }   
            else if(turn == 10)    {
                msg.innerText = `Draw`;
                msg.style.backgroundColor = "white";
                reset.innerText = "New Game";
            }
        }
    }
}

const btnsDisabled = () => {
    btns.forEach((btn) => {
        btn.disabled =true;
    })
}


reset.addEventListener("click", () => {
    resetGame();
})

const btnsEnabled = () => {
    btns.forEach((btn) => {
        btn.disabled =false;
        btn.innerText = "";
        btn.style.backgroundColor = "white";
    })
}

resetGame = () => {
    btnsEnabled();
    turn = 1;
    msg.innerText = "Player X's Turn";
    msg.style.backgroundColor = "lightyellow";
    reset.innerText ="Reset";
} 