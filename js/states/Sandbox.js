import BaseState from './BaseState';
import Square from '../ui/primitives/Square';
import GameKeyboard from '../Inputs/GameKeyboard';

export default class Sandbox extends BaseState {
  constructor() {
    super();
    this.setStateName('Sandbox');
  }

  create() {
    const square = new Square(10, 10, 200, this.game);
    this.gameKeyboard = new GameKeyboard(this.game);
    square.draw();
  }

  update() {
    super.update();
  }
}
