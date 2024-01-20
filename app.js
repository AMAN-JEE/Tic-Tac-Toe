let boxes = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector("#reset-game");
let startBtn = document.querySelector("#start-game");
let winner = document.querySelector("#winner");
let h2 = document.querySelector("div");
let container = document.querySelector(".container");

let turnO = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    if (turnO) {
      boxes.innerText = "O";
      turnO = false;
      boxes.style.color = "#007BA7";
      count++;
    } else {
      boxes.innerText = "X";
      turnO = true;
      boxes.style.color = "#000f89";
      count++;
    }
    boxes.disabled = true;
    checkWinner();
    if (count == 9) {
      showDraw();
    }
  });
});

let showWinner = (arg) => {
  winner.innerText = `Congratulations! 🙌 The winner is ${arg}`;
  h2.classList.remove("hide");
  boxes.forEach((boxes) => {
    //to lock the game after winning
    boxes.disabled = true;
    container.classList.add("hide");
  });
};

let showDraw = () => {
  winner.innerText = `Oops! The Game got Draw`;
  h2.classList.remove("hide");
  boxes.forEach((boxes) => {
    //to lock the game after winning
    boxes.disabled = true;
    container.classList.add("hide");
  });
};

let checkWinner = () => {
  for (let i of winPatterns) {
    let val1 = boxes[i[0]].innerText;
    let val2 = boxes[i[1]].innerText;
    let val3 = boxes[i[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
      }
    }
  }
};

resetBtn.addEventListener("click", () => {
  boxes.forEach((boxes) => {
    boxes.innerText = "";
    boxes.disabled = false;
    h2.classList.add("hide");
    turnO = true;
    container.classList.remove("hide");
    count = 0;
  });
});

startBtn.addEventListener("click", () => {
  boxes.forEach((boxes) => {
    boxes.innerText = "";
    boxes.disabled = false;
    h2.classList.add("hide");
    turnO = true;
    container.classList.remove("hide");
    count = 0;
  });
});
