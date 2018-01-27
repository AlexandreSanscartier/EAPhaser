import Phaser from 'phaser';

import Level from './assets/canvas/Level';
import Map from './Map/Map';

export default class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, '', null, false, true, {
      arcade: true,
      matter: true,
      p2: true,
      ninja: true
    });

    // Add the States your game has.
    // this.state.add("Boot", Boot);
    // this.state.add("Menu", Menu);
    // this.state.add("Preload", Preload);
    this.state.add('Level', Level);

    this.state.start('Level');

    const map = new Map(20, 20, 5);
    map.debug();
  }
}

window.game = new Game();
