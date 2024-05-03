const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let playerX = 50;
const playerY = canvas.height - 30;
let playerSpeed = 5;

let obstacles = [];
let coins = [];
let score = 0;

function drawPlayer() {
  ctx.fillStyle = '#00F';
  ctx.fillRect(playerX, playerY, 30, 30);
}


function drawObstacles() {
  ctx.fillStyle = '#F00';
  for (let obstacle of obstacles) {
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }
}

function drawCoins() {
  ctx.fillStyle = '#FFD700';
  for (let coin of coins) {
    ctx.beginPath();
    ctx.arc(coin.x, coin.y, coin.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function drawScore() {
  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Score: ' + score, 10, 30);
}

function update() {
  playerX += playerSpeed;

  if (playerX < 0) {
    playerX = 0;
  } else if (playerX + 30 > canvas.width) {
    playerX = canvas.width - 30;
  }

  drawPlayer();

  for (let obstacle of obstacles) {
    obstacle.y += 5; 

    if (
      playerX < obstacle.x + obstacle.width &&
      playerX + 30 > obstacle.x &&
      playerY < obstacle.y + obstacle.height &&
      playerY + 30 > obstacle.y
    ) {
      
      alert('Game Over! Your Score: ' + score);
      resetGame();
    }
  }


  for (let coin of coins) {
    coin.y += 5; 

    
    if (
      playerX < coin.x + coin.radius &&
      playerX + 30 > coin.x - coin.radius &&
      playerY < coin.y + coin.radius &&
      playerY + 30 > coin.y - coin.radius
    ) {
     
      score += 10;
      coins.splice(coins.indexOf(coin), 1);
    }
  }

  drawObstacles();
  drawCoins();
  drawScore();
}

function generateObstacle() {
  const obstacleWidth = Math.random() * 50 + 20; 
  const obstacleX = Math.random() * (canvas.width - obstacleWidth);
  const obstacleY = -30; 
  const obstacleHeight = 30; 

  obstacles.push({ x: obstacleX, y: obstacleY, width: obstacleWidth, height: obstacleHeight });
}

function generateCoin() {
  const coinRadius = 15; 
  const coinX = Math.random() * (canvas.width - coinRadius * 2) + coinRadius;
  const coinY = -30; 

  coins.push({ x: coinX, y: coinY, radius: coinRadius });
}

function resetGame() {
  obstacles = [];
  coins = [];
  score = 0;
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  update();

  if (Math.random() < 0.02) {
    generateObstacle();
  }

  if (Math.random() < 0.01) {
    generateCoin();
  }

  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    playerSpeed = 5;
  } else if (event.key === 'ArrowLeft') {
    playerSpeed = -5;
  }
});

document.addEventListener('keyup', () => {
  playerSpeed = 0;
});

gameLoop();
