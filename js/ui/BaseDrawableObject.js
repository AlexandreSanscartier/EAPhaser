import BaseClassConstructedError from '../Errors/BaseClassConstructedError';
import MethodNotImplementedError from '../Errors/MethodNotImplementedError';

export default class BaseDrawableObject {
  constructor(game) {
    this.game = game;
    if (this.constructor === BaseDrawableObject) { throw new BaseClassConstructedError(); }
  }

  // Defines a method that must be overridden
  /*eslint-disable */
  fixedToCamera(fixedToCamera) {
    throw new MethodNotImplementedError();
  }
  /* eslint-enable */
}
