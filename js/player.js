// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.dx = 100;
    this.dy = 80;
    this.playerMove = false;
    this.playerWon = false;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function () {
    if (this.playerMove) {
        this.x += this.dx;
        this.y += this.dy;
        this.playerMove = false;
    }
    if (this.playerWon) {
        this.reset(200, 400);
    }
};

Player.prototype.handleInput = function (key) {
    /*console.log(key);*/
    var dx = 100, dy = 80;
    this.playerMove = true;
    switch (key) {
        case 'left': if ((this.x - dx) < 0) {
            this.playerMove = false;
        } else {
            this.dx = -dx;
        }
            this.dy = 0;
            break;
        case 'right': if ((this.x + dx) > 400) {
            this.playerMove = false;
        } else {
            this.dx = dx;
        }
            this.dy = 0;
            break;
        case 'up': if ((this.y - dy) < 80) {
            this.playerMove = false;
            this.playerWon = true;
        } else {
            this.dy = -dy;
        }
            this.dx = 0;
            break;
        case 'down': if ((this.y + dy) > 400) {
            this.playerMove = false;
        } else {
            this.dy = dy;
        }
            this.dx = 0;
            break;
    }
};

Player.prototype.reset = function (x, y) {
    this.x = x;
    this.y = y;
    this.playerWon = false;
}