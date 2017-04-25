// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var app = function (global) {
    var allEnemies = [];
    var player;
    var enemyCount = 4;

    var instantiateEnemies = function () {
        var i;
        for (i = 1; i <= enemyCount; i++) {
            allEnemies[i] = new Enemy(-100, i * 75, Math.random() * 300);
        }
    };

    var instantiatePlayer = function () {
        player = new Player(200, 400);
    }

    var instantiateObjects = function () {
        instantiateEnemies();
        instantiatePlayer();
    }

    var reset = function () {
        var i;
        player.reset(200, 400);

        for (i = 1; i <= enemyCount; i++) {
            allEnemies[i].reset(-100, i * 75, Math.random() * 300);
        }
    };

    var checkCollisions = function () {
        var i, ex, ey;
        var px = player.x;
        var py = player.y;

        for (i = 1; i <= enemyCount; i++) {
            ex = allEnemies[i].x;
            ey = allEnemies[i].y;
            if (((px <= (ex + 75)) && (px >= (ex - 75))) && ((py <= (ey + 20)) && (py >= (ey - 20)))) {
                reset();
                console.log("CheckCollision called!");
            }
        }
    };

    instantiateObjects();

    global.allEnemies = allEnemies;
    global.player = player;
    global.checkCollisions = checkCollisions;

    // This listens for key presses and sends the keys to your
    // Player.handleInput() method. You don't need to modify this.
    document.addEventListener('keyup', function (e) {
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };

        player.handleInput(allowedKeys[e.keyCode]);
    });
}(this);
