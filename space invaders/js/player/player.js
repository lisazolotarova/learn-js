class Player extends Entity {
  constructor(x, y) {
    super(x, y);

    this.element.style.top = "";
    this.element.style.bottom = "0px";

    this.element.className = "player";

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.element.style.left =
            parseInt(this.element.style.left) - 20 + "px";
          break;
        case "ArrowRight":
          this.element.style.left =
            parseInt(this.element.style.left) + 20 + "px";
          break;
      }
    });
  }

  move() {}

  shoot() {}
}
