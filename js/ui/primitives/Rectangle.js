/**
* Defines the Rectangle primitive for drawing on screen
*/
export default class Rectangle {
  constructor(x, y, width, height, game, graphics = game.add.graphics()) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.graphics = graphics;
  }

  /**
  * Draws the rectnalge on screen
  * with the supplied graphics or the default graphics
  */
  draw(graphics = this.graphics) {
    this.graphocs = graphics;
    graphics.lineStyle(2, 0xFFFFFF, 1);
    graphics.drawRect(this.x, this.y, this.width, this.height);
  }

  // Clears the image on screen
  clear() {
    this.graphics.clear();
  }
}
