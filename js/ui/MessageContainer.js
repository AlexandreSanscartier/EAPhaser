import Settings from '../Settings';
import BaseDrawableObject from './BaseDrawableObject';

// TODO After game jam refactor this class to seperate the logic of the autmaticScroll
// from the logic of drawing on screen. Add the abilty to have a character's portrait
// In the text as well by extending this class
export default class MessageContainer extends BaseDrawableObject {
  constructor(game, graphics, x, y, width, height, message, autmaticScroll) {
    super(game, graphics);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.words = MessageContainer.splitWords(message);
    this.canHandleInput = false;

    this.lines = [];
    this.currentWord = '';
    this.timer = undefined;

    this.automaticScroll = autmaticScroll;
    this.letterIndex = 0;
    this.wordIndex = 0;

    this.graphics.lineStyle(2, 0x0000FF, 1);
    this.graphics.beginFill(0xFFFFFF);
    this.graphics.drawRect(this.x, this.y, this.width, this.height);

    const style = { font: `${Settings.FontSize()}px ${Settings.FontStyle()}`, fill: Settings.FontColor() };
    this.text = this.game.add.text(this.x + 2, this.y + 2, '', style);
    this.text3 = this.game.add.text(this.x + 2, this.y + 2, '', style);

    this.text3.alpha = 0;

    this.timer = game.time.create(false);
    this.messageTimedEvent = this.timer.loop(20, this.nextLetter, this);
    this.timer.start();
  }

  update() {
    if (this.canHandleInput) {
      this.canHandleInput = false;
      this.text.text = '';
      this.text3.text = '';
      this.lineIndex = 1;
      this.timer.resume();
    }
  }

  // Automatic write the words letter by letter
  nextLetter() {
    this.currentWord = this.words[this.wordIndex];

    // Check to make sure we haven't hit the end of our message yet
    if (this.words.length > this.wordIndex) {
      const actualLine = this.text3.text;

      // This means we're at a new word
      if (this.letterIndex === 0) {
        this.text3.text = `${this.text3.text}${this.currentWord} `;
      }

      // We've hit the maximum amount of words we
      // can fit on a line. It's time to skip a line
      if (this.text3.width > this.width + 2) {
        this.lines.push(actualLine);
        this.text3.text = '';
        this.text.text = `${this.text.text}\n`;

        // We've hit the maximum amount of words we can fit
        // in our viewport time to do some clean up
        if ((this.text3.height * (this.lines.length + 1)) > this.height) {
          // this.timer.pause();
          this.lines.shift();
          this.text.text = this.lines.join('\n');

          this.text3.text = '';
          this.text.text = `${this.text.text}\n`;
          // this.canHandleInput = true;
        }
      } else {
        // Check to see if we've printed all the letters or not
        if (this.currentWord.length > this.letterIndex) {
          this.text.text = `${this.text.text}${this.currentWord[this.letterIndex]}`;
          this.letterIndex += 1;
        } else {
          this.letterIndex = 0;
        }
        if (this.letterIndex === 0) {
          this.text.text = `${this.text.text} `;
          this.wordIndex += 1;
        }
      }
    } else {
      this.timer.stop();
    }
  }

  // automatically print paragraphs word by word
  nextWord() {
    this.currentWord = this.words[this.wordIndex];
    // Check to make sure we haven't hit the end of our message yet
    if (this.words.length > this.wordIndex) {
      const actualLine = this.text3.text;
      this.text3.text = `${this.text3.text}${this.currentWord} `;

      // We've hit the maximum amount of words we
      // can fit on a line. It's time to skip a line
      if (this.text3.width > this.width + 2) {
        this.lines.push(actualLine);
        this.text3.text = `${this.currentWord} `;

        // We've hit the maximum amount of words we can fit
        // in our viewport time to do some clean up
        if ((this.text3.height * (this.lines.length + 1)) > this.height) {
          // this.timer.pause();
          this.lines.shift();
          this.text.text = this.lines.join('\n');

          this.text3.text = `${this.currentWord} `;
          this.text.text = `${this.text.text}\n${this.currentWord} `;
          this.wordIndex += 1;
          // this.canHandleInput = true;
        } else {
          this.text.text = `${this.text.text}\n${this.currentWord} `;
          this.text3.text = `${this.currentWord} `;
          this.wordIndex += 1;
        }
      } else {
        this.text.text = `${this.text.text}${this.currentWord} `;
        this.wordIndex += 1;
      }
    } else {
      this.timer.stop();
    }
  }

  fixedToCamera(fixedToCamera) {
    this.text.fixedToCamera = fixedToCamera;
    this.graphics.fixedToCamera = fixedToCamera;
  }

  // split the text into words array
  static splitWords(text) {
    const words = text.split(' ');
    return words;
  }
}
