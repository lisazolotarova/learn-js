class Player extends Entity {
  /**
   * Singleton instance
   */
  static instance;

  controller;

  constructor(position, controller) {
    super(position);
    this.element.style.top = "";
    this.element.style.bottom = "0px";
    this.element.className = "player";

    this.controller = controller;

    /**
     * Add keyboard event listener
     * Tracks user input (move DOM object left/right)
     */
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.move(-20);
          break;
        case "ArrowRight":
          this.move(20);
          break;
        case " ":
          this.shoot();
      }
    });
  }

  shoot() {
    let bullet = new Shoot(
      {
        y: this.position.y,
        x: this.position.x + 20,
      },
      "UP"
    );

    bullet.draw();
    this.controller.bullets.push(bullet);
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
      this.instance = new Player({ x: 850, y: 900 }, controller);
    }

    return this.instance;
  }
}
