const button = document.createElement("button");
button.innerText = "Press to start!";
document.body.prepend(button);
button.classList.add("button");

const p = document.createElement("p");
p.textContent = "When your score is 100 - you win!";
document.body.prepend(p);
p.classList.add("p");

const holes = [...document.querySelectorAll(".hole")];

let score = 0;
let score1 = document.querySelector(".score span");
let gameOver = false;

const resetGame = () => {
  score = 0;
  score1.textContent = score;
  gameOver = false;
};

const startGame = () => {
  if (gameOver) return;

  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];

  const mole = document.createElement("img");
  mole.classList.add("mole");
  mole.src = "./assets/mole.png";

  hole.appendChild(mole);

  mole.addEventListener("click", () => {
    if (gameOver) return;
    score += 10;
    score1.textContent = score;
    if (score >= 100) {
      gameOver = true;
      alert("You won!");
    }
  });

  setTimeout(() => {
    if (hole.contains(mole)) {
      hole.removeChild(mole);
    }
    if (!gameOver) {
      startGame();
    }
  }, 1500);
};

button.addEventListener("click", () => {
  resetGame();
  startGame();
});