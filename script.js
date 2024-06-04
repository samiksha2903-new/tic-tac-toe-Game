const wrapper = document.querySelector(".wrapper");
const btn = document.querySelectorAll("button");
const startBtn = document.querySelector(".start");
const quitBtn = document.querySelector(".quit");
const restart =  document.querySelector(".restart");
const table = document.querySelector("table");
let player1 = [];
let player2 = [];
let currentState = true;
let count = 0;

const arr = Array.from(btn);

function clickBtn() {
  alert("Game Starts. Good Luck!😉");
  quitBtn.classList.remove("quit");
  this.classList.add("startDisabled");
  arr.forEach((item) => {
    item.addEventListener("click", (e) => {
      count++;
      if (currentState) {
        item.style.color = "green";
        item.textContent = "X";
        e.target.disabled = true;
        currentState = false;
        player1.push(Number(item.value));
        traceCheck(player1, "X");
      } else if (currentState === false) {
        currentState = true;
        item.style.color = "red";
        item.textContent = "O";
        e.target.disabled = true;
        player2.push(Number(item.value));
        traceCheck(player2, "O");
      }

      if(count === 9) {
        createNewEle("red", `!!!Game Over!!!`);
      }
    });
  });
}

const userCheck1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [3, 6, 9],
  [1, 4, 7],
  [1, 5, 9],
  [3, 5, 7],
  [2, 5, 8],
];

function traceCheck(checkPlayer, X) {
  for (let i = 0; i < userCheck1.length; i++) {
    let matchCount = 0;
    for (let j = 0; j < userCheck1[i].length; j++) {
      if (checkPlayer.includes(userCheck1[i][j])) {
        matchCount++;
      }
    }

    if (matchCount === 3) {
      createNewEle("green", `Hurray! ${X} You Win🤩`);
    }
  }
}

startBtn.addEventListener("click", clickBtn);

quitBtn.addEventListener("click", () => {
  if(confirm("Do you want to quit game?")) {
    startBtn.classList.remove("startDisabled");
    location.reload();
  }
});

restart.addEventListener("click", () => {
  startBtn.classList.remove("startDisabled");
  window.location.reload()
});

function createNewEle(color, text) {  
  const newEle = document.createElement("div");
  newEle.textContent = text;
  newEle.style.color = color;
  newEle.classList.add("newText");
  restart.append(newEle);
  restart.style.display = "block";
  table.style.display = "none";
  document.querySelector(".btns-grp").style.display = "none";
  return;
}