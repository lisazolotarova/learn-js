class Entity {
  x = 0;
  y = 0;
  element;
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.element = document.createElement("div");
    this.element.className = "invader";
  }

  draw() {
    document.body.append(this.element);
  }
  move() {}
  shoot() {}
}
