const start_btn = document.querySelector(".start-button");
const levels = document.querySelector(".levels");
const main_body = document.querySelector(".main");
const level_1 = levels.querySelector(".level_1");
const level_2 = levels.querySelector(".level_2");
const canvas = document.getElementById("myCanvas");

start_btn.onclick = () => {
  levels.classList.add("activeLevels");
  main_body.style.display = "none";
  start_btn.classList.add("dismissStart");
  console.log("hh");
};

level_1.onclick = () => {
  main_body.style.display = "none";
  levels.classList.add("dismissLevels");
  draw();
  canvas.classList.add("activeCanvas");
};

level_2.onclick = () => {
  location.href = "level2.html"
};

// game code level 1-------------------------------------------------------------------------------------------------

var ctx = canvas.getContext("2d");
var ballRadius = 8;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 3;
var dy = -3;
var paddleHeight = 10;
var paddleWidth = 100;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 6;
var brickColumnCount = 4;
var brickWidth = 80;
var brickHeight = 20;
var brickPadding = 20;
var brickOffsetTop = 50;
var brickOffsetLeft = 60;
var score = 0;
var lives = 3;
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

const LOSE = new Audio();
LOSE.src = "lose.wav";

const WALL_HIT = new Audio();
WALL_HIT.src = "wall.ogg";

const LIFE_LOST = new Audio();
LIFE_LOST.src = "life.ogg";

const PADDLE_HIT = new Audio();
PADDLE_HIT.src = "paddle.ogg";

const WIN = new Audio();
WIN.src = "win.ogg";

const BRICK_HIT = new Audio();
BRICK_HIT.src = "data_pb.ogg";

const soundElement = document.getElementById("sound");
soundElement.addEventListener("click", function audio() {
  let imgSrc = soundElement.getAttribute("src");
  let SOUND_IMG = imgSrc == "sound.png" ? "mute.png" : "sound.png";
  soundElement.setAttribute("src", SOUND_IMG);

  WALL_HIT.muted = WALL_HIT.muted ? false : true;
  PADDLE_HIT.muted = PADDLE_HIT.muted ? false : true;
  BRICK_HIT.muted = BRICK_HIT.muted ? false : true;
  LIFE_LOST.muted = LIFE_LOST.muted ? false : true;
  WIN.muted = WIN.muted ? false : true;
  LOSE.muted = LOSE.muted ? false : true;
});


function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x + ballRadius > b.x &&
          x - ballRadius < b.x + brickWidth &&
          y + ballRadius > b.y &&
          y - ballRadius < b.y + brickHeight
        ) {

          if (b.status == 1 || b.status == 0) {
            BRICK_HIT.play();
          }
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            if (lives == 1 || lives == 2 || lives == 3) {
              WIN.play();
            };
            alert(`YOU WIN!
                  YOUR SCORE: ${score}`);
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#CD113B";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = r * brickWidth + brickOffsetLeft;
        var brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0A1931";
  ctx.fillText("Score: " + score, 8, 20);
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0A1931";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    WALL_HIT.play();
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    WALL_HIT.play();
    dy = -dy;
  } else if (y + dy > canvas.height - paddleHeight - ballRadius + 2) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      PADDLE_HIT.play();
      let collidePoint = x - (paddleX + paddleWidth / 2);
      collidePoint = collidePoint / (paddleWidth / 2);

      let angle = collidePoint * (Math.PI / 3);
      dy = -1 * 6 * Math.cos(angle);
      dx = 6 * Math.sin(angle);
    } else {
      lives--;
      if (lives != 0) { LIFE_LOST.play(); };
      if (!lives) {
        LOSE.play();
        alert(`GAME OVER
              YOUR SCORE: ${score}`);
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 4;
        dy = -4;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

// level 1 code ends------------------------------------------------------------------------------------

