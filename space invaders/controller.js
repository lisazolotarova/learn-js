class Controller {
  // array of enemies
  enemies = [];

  // array of bullets
  bullets = [];

  // move distance
  enemyMoveDistance = 10;

  // player instance
  player = Player.getInstance(this);

  /**
   *  Creates array of invaders
   */
  drawInvaders() {
    for (let i = 0; i < 8; i++) {
      this.enemies.push(new Invader({ x: 80 * i, y: 20 }));
    }
  }

  /**
   * Initial setup
   */
  startGame() {
    this.player.draw();
    this.drawInvaders();

    this.update = this.update.bind(this);
    var intervalID = setInterval(this.update, 16);

    console.log(this.enemies);
  }

  /**
   * Main game loop
   */
  update() {
    //------------------move invaders---------------------

    let first = this.enemies[0];
    let last = this.enemies[this.enemies.length - 1];

    // switch direction of enemies movement
    if (
      // condition to change direction to the LEFT
      this.enemyMoveDistance > 0 &&
      last.position.x + last.element.offsetWidth >= window.innerWidth
    ) {
      this.enemyMoveDistance = -10;
    }
    // condition to change direction to the RIGHT
    if (this.enemyMoveDistance < 0 && first.position.x < 0) {
      this.enemyMoveDistance = 10;
    }

    // just draw each invader
    this.enemies.forEach((enemy, index) => {
      enemy.move(this.enemyMoveDistance, 0);
    });
    //---------------------------------------

    //-------------------move bullets--------------------
    this.bullets.forEach((bullet) => {
      bullet.move();
    });
  }
}
