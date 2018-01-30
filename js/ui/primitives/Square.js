import Rectangle from './Rectangle';

/**
* Defines the Square primitive for drawing on screen
*/
export default class Square extends Rectangle {
  constructor(x, y, length, game, graphics = game.add.graphics()) {
    super(x, y, length, length, game, graphics);
  }

  // Draws the square to the supplier graphics
  draw(graphics = this.graphics) {
    super.draw(graphics);
  }

  // Clear the graphics on screen
  clear() {
    super.clear();
  }
}
