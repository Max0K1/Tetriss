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
  
  const tetrisGame = new TetrisGame();
  tetrisGame.startNewGame();
  tetrisGame.updateScore(2);
  tetrisGame.increaseLevel();