const invaderMarginTop = 20;

class Controller {
  // array of enemies
  invaders = [];

  // array of bullets
  bullets = [];

  // player instance
  player;

  activeKeys = {};

  constructor() {
    this.addBullet = this.addBullet.bind(this);
    this.mainGameLoop = this.mainGameLoop.bind(this);

    this.player = Player.getInstance(this.addBullet);

    /**
     * Add keyboard event listener
     * Tracks user input (move DOM object left/right)
     */
    window.addEventListener("keydown", (e) => {
      let keyName = e.key == " " ? "SpaceBar" : e.key;
      this.activeKeys[keyName] = true;
    });

    window.addEventListener("keyup", (e) => {
      let keyName = e.key == " " ? "SpaceBar" : e.key;
      this.activeKeys[keyName] = false;
    });
  }

  addBullet(bullet) {
    this.bullets.push(bullet);
  }

  /**
   *  Creates array of invaders
   */
  createInvaders() {
    for (let i = 0; i < 8; i++) {
      this.invaders.push(
        new Invader({ x: conf.invaderSize.width * i, y: invaderMarginTop })
      );
    }
  }

  /**
   * Initial setup
   */
  startGame() {
    this.player.draw();
    this.createInvaders();

    /**
     * Sets interval to run mainGameLoop() method every 16ms
     */
    var intervalID = setInterval(this.mainGameLoop, conf.refreshRate);
  }

  detectCollision(obj1, obj2) {
    if (
      obj1.position.x < obj2.position.x + obj2.element.offsetWidth &&
      obj1.position.x + obj1.element.offsetWidth > obj2.position.x &&
      obj1.position.y < obj2.position.y + obj2.element.offsetHeight &&
      obj1.position.y + obj1.element.offsetHeight > obj2.position.y
    ) {
      console.log("collision");
      return true;
    } else return false;
  }

  /**
   * Main game loop
   */
  mainGameLoop() {
    //------------------keyboard reactions---------------------
    if (this.activeKeys["ArrowLeft"]) {
      this.player.move(-conf.playerMoveSpeed);
    }
    if (this.activeKeys["ArrowRight"]) {
      this.player.move(conf.playerMoveSpeed);
    }
    if (this.activeKeys["SpaceBar"]) {
      this.player.shoot();
    }

    //------------------move invaders---------------------
    let first = this.invaders[0];
    let last = this.invaders[this.invaders.length - 1];

    // switch direction of enemies movement
    if (
      // condition to change direction to the LEFT
      (conf.invaderMoveSpeed > 0 &&
        last.position.x + last.element.offsetWidth >= window.innerWidth) ||
      // condition to change direction to the RIGHT
      (conf.invaderMoveSpeed < 0 && first.position.x < 0)
    ) {
      conf.invaderMoveSpeed *= -1;
    }

    // just draw each invader
    this.invaders.forEach((enemy, index) => {
      enemy.move(conf.invaderMoveSpeed, 0);
    });
    //---------------------------------------

    /**
     * Filter bullets that are out of screen
     * and call die() method
     */
    this.bullets
      .filter((bullet) => bullet.position.y <= 0)
      .map((bullet) => bullet.die());

    /**
     * Filter only bullets that are currently on screen
     */
    this.bullets = this.bullets.filter((bullet) => bullet.position.y > 0);

    //-------------------move bullets--------------------
    this.bullets.forEach((bullet) => {
      bullet.move();
    });

    /**
     * collision detection
     *
     * Check for each invader if it is colliding with each bullet
     */
    this.invaders.forEach((invader) => {
      this.bullets.forEach((bullet) => {
        let collide = this.detectCollision(invader, bullet);

        // if collision is true, remove both objects from dom
        if (collide) {
          invader.die();
          bullet.die();
          // TODO: remove this obj form arrays `invaders` and `bullets`
        }
      });
    });
  }
}
