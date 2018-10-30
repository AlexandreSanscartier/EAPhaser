import BaseClassConstructedError from '../Errors/BaseClassConstructedError';
import MethodNotImplementedError from '../Errors/MethodNotImplementedError';

export default class BaseCommand {
  constructor() {
    if (this.constructor === BaseCommand) { throw new BaseClassConstructedError(); }
  }

  // Defines a method that must be overridden
  /*eslint-disable */
  execute() {
    throw new MethodNotImplementedError();
  }
  /* eslint-enable */
}
