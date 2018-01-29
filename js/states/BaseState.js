import Phaser from 'phaser';
import BaseClassConstructedError from '../Errors/BaseClassConstructedError';
import MethodNotImplementedError from '../Errors/MethodNotImplementedError';

export default class BaseState extends Phaser.State {
  constructor() {
    super();
    if (this.constructor === BaseState) {
      throw new BaseClassConstructedError();
    }
  }

  /*eslint-disable */
  load() {
    throw new MethodNotImplementedError();
  }

  init() {
    throw new MethodNotImplementedError();
  }

  create() {
    throw new MethodNotImplementedError();
  }

  render() {
    throw new MethodNotImplementedError();
  }

  update() {
    throw new MethodNotImplementedError();
  }
  /* eslint-enable */
}
