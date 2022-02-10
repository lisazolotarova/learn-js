class Entity {
  /**
   * Sprite coordinates (NOT Css, just internal state)
   */
  position = {
    x: 0,
    y: 0,
  };

  /**
   * Reference to the HTML element
   */
  element;

  constructor(position) {
    this.position = position;
    this.element = document.createElement("div");
    document.body.appendChild(this.element);
  }

  /**
   * Actually updating CSS styles
   */
  draw() {
    this.element.style.left = `${this.position.x}px`;
    this.element.style.top = `${this.position.y}px`;
  }

  /**
   * Updates state of object position
   */
  move(divX, divY) {
    if (divX !== undefined) {
      this.position.x += divX;
    }

    if (divY !== undefined) {
      this.position.y += divY;
    }

    this.draw();
  }

  shoot() {}

  die() {
    this.element.remove();
  }
}
