class Controller {
  enemies = [];
  enemyMoveDistance = 10;
  player;

  startGame() {
    if (!this.player) {
      this.player = new Player(850, 900);
      this.player.draw();
    } else {
      this.player = null;
    }

    for (let i = 0; i < 8; i++) {
      this.enemies.push(new Invader(80 * i, 20));
      //   enemy.draw();
    }

    this.update = this.update.bind(this);
    //
    var intervalID = setInterval(this.update, 16);

    console.log(this.enemies);
  }

  update() {
    let last = this.enemies[this.enemies.length - 1];
    let first = this.enemies[0];

    if (
      this.enemyMoveDistance > 0 &&
      last.x + last.element.offsetWidth >= window.innerWidth
    ) {
      this.enemyMoveDistance = -10;
    }

    if (this.enemyMoveDistance < 0 && first.x < 0) {
      this.enemyMoveDistance = 10;
    }

    this.enemies.forEach((enemy, index) => {
      enemy.move(this.enemyMoveDistance, 0);
    });
  }
}
