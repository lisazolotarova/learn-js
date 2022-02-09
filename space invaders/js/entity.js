class Entity {
  x = 0;
  y = 0;
  element;

  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.element = document.createElement("div");
    document.body.appendChild(this.element);
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
  }

  draw() {
    // this.element.style.left = this.x;
    // this.element.style.top = this.y;
  }

  move(divX, divY) {
    this.x = this.x + divX;
    this.y += divY;

    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";

    // window.addEventListener("load", () => {
    //   enemy.style.position = "absolute";
    //   enemy.style.left = 0;
    //   enemy.style.top = 0;
    // });
  }

  shoot() {}
}
