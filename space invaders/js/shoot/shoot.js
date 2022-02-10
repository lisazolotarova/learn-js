class Shoot extends Entity {
  // could be 'UP' or 'DOWN'
  moveDirection;

  constructor(position, moveDirection) {
    super(position);
    this.moveDirection = moveDirection;

    this.element.className = "shoot";
  }

  move() {
    let y = this.moveDirection === "UP" ? -30 : 30;

    super.move(undefined, y);
  }
}