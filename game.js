// game.js - Snake Logic with Touch Support
const gameSection = document.getElementById('game');
gameSection.innerHTML = `
    <h2>Mini Game: Snake</h2>
    <p>Use Arrow Keys or Buttons below. Pixel Art Style.</p>
    <div id="game-container">
        <canvas id="snakeGame" width="400" height="400"></canvas>
    </div>
    <div class="game-info" style="text-align:center;">
        <h3>Score: <span id="score">0</span></h3>
        <button id="restartBtn" class="cta-btn">Restart</button>
    </div>
    <div class="game-controls">
        <button class="game-btn" id="upBtn">↑</button>
        <div style="display:flex; gap:1rem;">
            <button class="game-btn" id="leftBtn">←</button>
            <button class="game-btn" id="downBtn">↓</button>
            <button class="game-btn" id="rightBtn">→</button>
        </div>
    </div>
`;

const canvas = document.getElementById('snakeGame');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');

let score = 0;
let snake = [{x: 200, y: 200}];
let food = {x: 0, y: 0};
let dx = 20;
let dy = 0;
let gameInterval;

function createFood() {
    food.x = Math.floor(Math.random() * 19) * 20;
    food.y = Math.floor(Math.random() * 19) * 20;
}

function draw() {
    ctx.fillStyle = '#1A1F1C';
    ctx.fillRect(0, 0, 400, 400);

    // Food (Lavender)
    ctx.fillStyle = '#E6E6FA';
    ctx.fillRect(food.x, food.y, 18, 18);

    // Snake (Purple)
    ctx.fillStyle = '#9370DB';
    snake.forEach(part => ctx.fillRect(part.x, part.y, 18, 18));

    moveSnake();
    if (checkEnd()) {
        clearInterval(gameInterval);
        alert("Your pet looks sad... click faster next time! Final Score: " + score);
    }
}

function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreEl.innerText = score;
        createFood();
        if(score === 100) alert("Your pet is overjoyed! 🎉 Happiness x2 unlocked!");
    } else {
        snake.pop();
    }
}

function checkEnd() {
    const head = snake[0];
    return head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400 ||
           snake.slice(1).some(p => p.x === head.x && p.y === head.y);
}

function changeDir(nx, ny) {
    if ((nx === -dx) || (ny === -dy)) return;
    dx = nx; dy = ny;
}

// Controls
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') changeDir(0, -20);
    if (e.key === 'ArrowDown') changeDir(0, 20);
    if (e.key === 'ArrowLeft') changeDir(-20, 0);
    if (e.key === 'ArrowRight') changeDir(20, 0);
});

document.getElementById('upBtn').onclick = () => changeDir(0, -20);
document.getElementById('downBtn').onclick = () => changeDir(0, 20);
document.getElementById('leftBtn').onclick = () => changeDir(-20, 0);
document.getElementById('rightBtn').onclick = () => changeDir(20, 0);

restartBtn.onclick = () => {
    score = 0; scoreEl.innerText = 0;
    snake = [{x: 200, y: 200}];
    dx = 20; dy = 0;
    createFood();
    clearInterval(gameInterval);
    gameInterval = setInterval(draw, 150);
};

createFood();
gameInterval = setInterval(draw, 150);