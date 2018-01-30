import Phaser from 'phaser';
import BaseClassConstructedError from '../Errors/BaseClassConstructedError';

export default class BaseState extends Phaser.State {
  constructor() {
    super();
    if (this.constructor === BaseState) {
      throw new BaseClassConstructedError();
    }
  }

  setStateName(stateName) {
    this.stateName = stateName;
  }

  getStateName() {
    return this.stateName;
  }
}
