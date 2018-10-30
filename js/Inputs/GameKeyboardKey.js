import Phaser from 'phaser';

/**
 * See https://photonstorm.github.io/phaser-ce/Phaser.Key.html#update
 */
export default class GameKeyboardKey extends Phaser.Key {
  constructor(keyboard, keycode) {
    super(GameKeyboardKey.game, keycode);

    this.GameKeyboardKey = keyboard;
  }
}
