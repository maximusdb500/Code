const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let verPosition = 0;
let horPosition = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    verPosition = verPosition - 100;
  }
  if (e.code === "ArrowRight") {
    verPosition = verPosition + 100;
  }
  if (e.code === "ArrowDown") {
    horPosition = horPosition + 100;
  }
  if (e.code === "ArrowUp") {
    horPosition = horPosition - 100;
  }
  if (verPosition < 0) {
    verPosition = 0;
  }
  if (horPosition < 0) {
    horPosition = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = verPosition + "px";
  ball.style.right = verPosition - "px";
  ball.style.top = horPosition + "px";
  ball.style.bottom = horPosition - "px";
}
