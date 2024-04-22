// ui-service.js
const TetrisGame = require('./game-service');

class TetrisUI {
  constructor() {
    this.game = new TetrisGame();
  }

  startNewGame() {
    this.game.startNewGame();
  }

}

module.exports = TetrisUI;