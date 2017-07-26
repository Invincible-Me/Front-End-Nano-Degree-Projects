// Enemies our player must avoid
var Enemy = function(x, y, movement) {
    
     this.x = x;
     this.y = y;
     this.movement = movement;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.movement * dt;

    if (this.x > 550) {
        this.x = -100;
        this.movement = 100 + Math.floor(Math.random() * 512);//The Math.floor() function returns the largest integer less than or equal to a given number.
    }

    if (player.x < this.x + 60 && player.x + 37 > this.x && player.y < this.y + 25 && 30 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y, movement) {
    this.x = x;
    this.y = y;
    this.movement = movement;
    this.sprite = 'images/char-boy.png';
};
//update() method
Player.prototype.update = function() {
  
    if (this.y > 380) {
        this.y = 380;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // Checking if the player is winning or not
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
};

// handleInput() method for button functioning
// for providing movements to the key
Player.prototype.handleInput = function(button) {
    switch (button) {
        case 'left':
            this.x = this.x - (this.movement + 50);
            break;
        case 'up':
            this.y = this.y - (this.movement + 30);
            break;
        case 'right':
            this.x = this.x + (this.movement + 50);
            break;
        case 'down':
            this.y = this.y + (this.movement + 30);
            break;
    }
};
// render() method
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var allEnemies = [];

var enemyPosition = [60, 140, 220];
var player = new Player(200, 380, 50);
var enemy;

enemyPosition.forEach(function(posY) {
    enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
