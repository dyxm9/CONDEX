// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    backgroundColor: '#87CEEB',
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 1 }, // Gravity for realistic jumps
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let player;
let platforms;
let bullets;
let cursors;
let score = 0;
let scoreText;
let lastFired = 0;  // Control fire rate
let fireRate = 300; // 300ms between shots

// Initialize game
const game = new Phaser.Game(config);

// Preload assets
function preload() {
    this.load.image('background', 'path_to_background_image');
    this.load.image('platform', 'path_to_platform_image');
    this.load.image('player', 'path_to_player_image');
    this.load.image('bullet', 'path_to_bullet_image'); // Bullet image
}

// Create game objects
function create() {
    // Add background and platforms
    this.add.image(512, 384, 'background');
    platforms = this.matter.add.staticGroup();
    platforms.create(512, 750, 'platform').setScale(2).refreshBody(); // Ground
    platforms.create(300, 600, 'platform');
    platforms.create(700, 400, 'platform');
    platforms.create(500, 250, 'platform');

    // Create player
    player = this.matter.add.sprite(100, 500, 'player');
    player.setBounce(0.2);
    player.setFrictionAir(0.02);
    player.setFixedRotation();

    // Create bullets group
    bullets = this.physics.add.group({
        defaultKey: 'bullet',
        maxSize: 10,
        runChildUpdate: true
    });

    // Create score text
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#FFF' });

    // Create controls
    cursors = this.input.keyboard.createCursorKeys();

    // Camera follow player
    this.cameras.main.startFollow(player, true, 0.05, 0.05);
    this.cameras.main.setZoom(1.5);

    // Shooting on spacebar press
    this.input.keyboard.on('keydown-SPACE', shootBullet, this);
}

// Update game loop
function update(time, delta) {
    // Player controls
    if (cursors.left.isDown) {
        player.setVelocityX(-5);
    } else if (cursors.right.isDown) {
        player.setVelocityX(5);
    } else {
        player.setVelocityX(0);
    }

    // Jump if player is on the ground
    if (cursors.up.isDown && player.body.velocity.y === 0) {
        player.setVelocityY(-10); // Jumping
    }

    // Update score continuously
    score += 1;
    scoreText.setText('Score: ' + score);
}

// Function to shoot bullets
function shootBullet() {
    const bullet = bullets.get();
    if (bullet && game.time.now > lastFired) {
        bullet.fire(player.x, player.y);
        lastFired = game.time.now + fireRate; // Control fire rate
    }
}

// Bullet class
class Bullet extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y) {
        super(scene, x, y, 'bullet');
    }

    fire(x, y) {
        this.setPosition(x, y - 20);
        this.setActive(true);
        this.setVisible(true);
        this.body.velocity.y = -300; // Shoot upward
    }

    update(time, delta) {
        if (this.y < 0) {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}