import BaseState from './BaseState';
import Square from '../ui/primitives/Square';

export default class Sandbox extends BaseState {
  constructor() {
    super();
    this.setStateName('Sandbox');
  }

  create() {
    const square = new Square(10, 10, 200, this.game);
    square.draw();
  }
}
