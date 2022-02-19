import { Invader } from "./js/invader/invader.js";
import { Player } from "./js/player/player.js";
import { conf } from "./config.js";
import { detectCollision } from "./js/utils.js";

const invaderMarginTop = 20;

export class Controller {
  // Array of enemies
  invaders = [];

  // Array of bullets
  playerBullets = [];

  // Array of bullets
  invaderBullets = [];

  // player instance
  player;

  // shoot timing
  shootTimeOut = 0;

  activeKeys = {};

  constructor() {
    this.addPlayerBullet = this.addPlayerBullet.bind(this);
    this.addInvaderBullet = this.addInvaderBullet.bind(this);
    this.mainGameLoop = this.mainGameLoop.bind(this);

    this.player = Player.getInstance(this.addPlayerBullet);

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

  addPlayerBullet(bullet) {
    this.playerBullets.push(bullet);
  }

  addInvaderBullet(bullet) {
    this.invaderBullets.push(bullet);
  }

  /**
   *  Creates array of invaders
   */
  createInvaders() {
    for (let i = 0; i < 8; i++) {
      this.invaders.push(
        new Invader(
          {
            x: (conf.invaderSize.width + conf.invadersSpacing) * i,
            y: invaderMarginTop,
          },
          this.addInvaderBullet
        )
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

  movePlayer() {
    //------------------keyboard reactions/Player ---------------------

    // condition to change direction to the LEFT
    if (this.activeKeys["ArrowLeft"] && this.player.position.x > 0) {
      this.player.move(-conf.playerMoveSpeed);
    }

    // condition to change direction to the RIGHT
    if (
      this.activeKeys["ArrowRight"] &&
      this.player.position.x + this.player.element.offsetWidth <
        window.innerWidth
    ) {
      this.player.move(conf.playerMoveSpeed);
    }
    if (this.activeKeys["SpaceBar"] && this.shootTimeOut == 0) {
      this.player.shoot();
      // Set timeout after each shoot
      this.shootTimeOut = conf.playerShootInterval;
    }
  }

  moveInvaders() {
    if (this.invaders.length > 0) {
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
    }
  }

  moveBullets() {
    //-------------------move bullets--------------------
    this.playerBullets.forEach((bullet) => {
      bullet.move();
    });

    this.invaderBullets.forEach((bullet) => {
      bullet.move();
    });
  }

  /**
   * Filter bullets that are out of screen
   * and call die() method
   */
  bulletGarbageCollector() {
    this.playerBullets
      .filter((bullet) => bullet.position.y <= 0)
      .map((bullet) => bullet.die());

    /**
     * Filter only bullets that are currently on screen
     */
    this.bullets = this.playerBullets.filter((bullet) => bullet.position.y > 0);
  }

  /**
   * Check if bullets collide with invaders
   */
  shootTracking() {
    for (let i = this.invaders.length - 1; i > -1; i--) {
      for (let j = this.playerBullets.length - 1; j > -1; j--) {
        let collide = detectCollision(this.invaders[i], this.playerBullets[j]);

        // if collision is true, remove both objects from dom
        if (collide) {
          this.invaders[i].die();
          this.playerBullets[j].die();

          this.invaders.splice(i, 1);
          this.playerBullets.splice(j, 1);
        }
      }
    }
  }

  updateShootInterval() {
    // Wait for half a second before player can shoot again
    if (this.shootTimeOut > 0) {
      // this.shootTimeOut = this.shootTimeOut - 1;
      // this.shootTimeOut -= 1;
      this.shootTimeOut--;
    }
  }

  /**
   * Main game loop
   */
  mainGameLoop() {
    this.movePlayer();
    this.moveInvaders();
    this.bulletGarbageCollector();
    this.moveBullets();
    this.shootTracking();
    this.updateShootInterval();
  }
}
