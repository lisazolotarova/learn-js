import { Entity } from "./js/entity";
import { Shoot } from "../shoot/shoot";

class Player extends Entity {
  /**
   * Singleton instance
   */
  static instance;

  createBullet;

  constructor(position, createBullet) {
    super(position);
    this.element.className = "player";
    this.createBullet = createBullet;
  }

  shoot() {
    let bullet = new Shoot(
      {
        y: this.position.y,
        x: this.position.x + conf.playerSize.width / 2,
      },
      "UP"
    );

    bullet.draw();
    this.createBullet(bullet);
  }

  /**
   * `Singleton` get method
   */
  static getInstance(controller) {
    /**
     *  Check to ensure that there is only ONE object
     *  of this class has been created(per application)
     */
    if (!this.instance) {
      this.instance = new Player(
        // calculate player position based on window dimensions
        { x: window.innerWidth / 2, y: window.innerHeight - 120 },
        controller
      );
    }

    return this.instance;
  }
}
