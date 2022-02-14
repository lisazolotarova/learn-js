import { Entity } from "./js/entity.js";

class Invader extends Entity {
  type;

  constructor(position, type) {
    super(position);
    this.element.className = "invader";
  }
}
