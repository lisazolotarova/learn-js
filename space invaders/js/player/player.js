class Player extends Entity {

  /**
   * Singleton instance
   */
  static instance;


  constructor(position) {
    super(position);
    this.element.style.top = "";
    this.element.style.bottom = "0px";
    this.element.className = "player";

    /**
     * Add keyboard event listener 
     * Tracks user input (move DOM object left/right)
     */
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.move(-20)
          break;
        case "ArrowRight":
          this.move(20);
          break;
      }
    });
  }

  /**
   * `Singleton` get method
   */
  static getInstance() {
    /**
    *  Check to ensure that there is only ONE object
    *  of this class has been created(per application)
    */
    if (!this.instance) {
      this.instance = new Player({ x: 850, y: 900 });
    }

    return this.instance;
  }
}



