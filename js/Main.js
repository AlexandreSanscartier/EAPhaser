import Phaser from 'phaser';
import BaseState from './states/BaseState';

export default class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, '', null, false, false, {
      arcade: true,
      matter: false,
      p2: false,
      ninja: false
    });

    // Add the States your game has.
    // this.state.add("Boot", Boot);
    // this.state.add("Menu", Menu);
    // this.state.add("Preload", Preload);
    // this.state.add('sandbox', sandbox);
    this.state.add('BaseState', BaseState);

    this.state.start('BaseState');
  }
}

window.game = new Game();
