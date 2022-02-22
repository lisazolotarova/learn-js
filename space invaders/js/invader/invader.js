import { Entity } from "../entity.js";
import { conf } from "../../config.js";
import { Shoot } from "../shoot/shoot.js";

export class Invader extends Entity {
  type;
  createBullet;

  constructor(position, createBullet) {
    super(position);
    this.element.className = "invader";
    this.createBullet = createBullet;

    this.shoot = this.shoot.bind(this);

    setInterval(this.shoot, conf.difficulty.invaderShootInterval);
  }

  // TODO:  Move shoot logic to the main controller. Implement one shoot per invader
  shoot() {
    let shootProbability = Math.random();

    if (shootProbability > 0.8) {
      let bullet = new Shoot({
        y: this.position.y + this.element.offsetHeight,
        x: this.position.x + conf.invaderSize.width / 2,
      });

      bullet.draw();

      this.createBullet(bullet);
    }

    return bullet;
  }
}
