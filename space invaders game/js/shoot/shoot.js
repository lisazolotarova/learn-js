import { Entity } from "../entity.js";
import { conf } from "../../config.js";

export class Shoot extends Entity {
  // could be 'UP' or 'DOWN'
  moveDirection;

  constructor(position, moveDirection) {
    super(position);
    this.moveDirection = moveDirection;

    this.element.className = "shoot";
  }

  move() {
    let y =
      this.moveDirection === "UP"
        ? -conf.bulletMoveSpeed
        : conf.bulletMoveSpeed;

    super.move(undefined, y);
  }
}
