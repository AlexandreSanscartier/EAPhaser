/**
 * Defines an Enum
 * ==============================
 *  Example usage
 *  this.KeyStates = new Enum({
      UP: 0,
      PRESSED: 1,
      DOWN: 2,
    });
 */
/*eslint-disable */
export default class Enum {
  constructor(values) {
    const enumValues = Object.keys(values).reduce((k, v) => (k[values[v]] = v, k), {});
    this.enums = Object.freeze(Object.keys(values).reduce((k, v) => (k[v] = values[v], o), a => enumValues[a]));
  }
}
/* eslint-enable */
