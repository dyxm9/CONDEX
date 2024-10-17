// Setting up canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game settings
const shipWidth = 40;
const shipHeight = 20;
const bullets = [];
const asteroids = [];
let gameOver = false;
let score = 0;

// Ship object
const ship = {
    x: canvas.width / 2 - shipWidth / 2,
    y: canvas.height - shipHeight - 10,
    width: shipWidth,
    height: shipHeight,
    dx: 5,
    moveLeft: false,
    moveRight: false
};

// Event listeners for controls
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') ship.moveLeft = true;
    if (e.key === 'ArrowRight') ship.moveRight = true;
    if (e.key === ' ') shoot();
});
document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') ship.moveLeft = false;
    if (e.key === 'ArrowRight') ship.moveRight = false;
});

// Shooting function
function shoot() {
    bullets.push({ x: ship.x + ship.width / 2 - 2.5, y: ship.y, width: 5, height: 10, dy: -5 });
}

// Asteroid creation
function createAsteroid() {
    const size = Math.random() * 40 + 10;
    const x = Math.random() * (canvas.width - size);
    asteroids.push({ x, y: -size, width: size, height: size, dy: Math.random() * 2 + 1 });
}

// Update game objects
function update() {
    if (ship.moveLeft && ship.x > 0) {
        ship.x -= ship.dx;
    } else if (ship.moveRight && ship.x + ship.width < canvas.width) {
        ship.x += ship.dx;
    }

    bullets.forEach((bullet, index) => {
        bullet.y += bullet.dy;
        if (bullet.y < 0) bullets.splice(index, 1);
    });

    asteroids.forEach((asteroid, index) => {
        asteroid.y += asteroid.dy;
        if (asteroid.y > canvas.height) asteroids.splice(index, 1);

        // Check for collision between bullet and asteroid
        bullets.forEach((bullet, bIndex) => {
            if (
                bullet.x < asteroid.x + asteroid.width &&
                bullet.x + bullet.width > asteroid.x &&
                bullet.y < asteroid.y + asteroid.height &&
                bullet.y + bullet.height > asteroid.y
            ) {
                bullets.splice(bIndex, 1);
                asteroids.splice(index, 1);
                score += 10;
            }
        });

        // Check for collision between ship and asteroid
        if (
            ship.x < asteroid.x + asteroid.width &&
            ship.x + ship.width > asteroid.x &&
            ship.y < asteroid.y + asteroid.height &&
            ship.y + ship.height > asteroid.y
        ) {
            gameOver = true;
        }
    });

    if (!gameOver) {
        setTimeout(createAsteroid, 2000); // Spawn asteroids every 2 seconds
    }
}

// Draw game objects
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw ship
    ctx.fillStyle = 'white';
    ctx.fillRect(ship.x, ship.y, ship.width, ship.height);

    // Draw bullets
    bullets.forEach(bullet => {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });

    // Draw asteroids
    asteroids.forEach(asteroid => {
        ctx.fillStyle = 'gray';
        ctx.fillRect(asteroid.x, asteroid.y, asteroid.width, asteroid.height);
    });

    // Draw score
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);

    if (gameOver) {
        ctx.fillStyle = 'red';
        ctx.font = '40px Arial';
        ctx.fillText('GAME OVER', canvas.width / 2 - 100, canvas.height / 2);
    }
}

// Main game loop
function gameLoop() {
    if (!gameOver) {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }
}

gameLoop();
setTimeout(createAsteroid, 2000);  // Start asteroid spawning