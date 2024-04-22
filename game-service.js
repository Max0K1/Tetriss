// game-service.js
class TetrisGame {
    constructor() {
      this.score = 0;
      this.level = 1;
    }
  
    startNewGame() {
      console.log("Гра почалася!");
    }
  
    updateScore(linesCleared) {
      this.score += linesCleared * 100;
      console.log(`Рахунок гравця оновлено: ${this.score}`);
    }
  
    increaseLevel() {
      this.level++;
      console.log(`Рівень гри збільшено: ${this.level}`);
    }
  }
  
  module.exports = TetrisGame;