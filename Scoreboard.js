class Scoreboard {
    constructor() {
      this.scores = [];
    }
  
    loadScores() {
    }
  
    saveScores() {
    }
  
    addScore(playerName, score) {
    }
  
    getTopScores(num = 10) {
    }
  }
  
  const scoreboard = new Scoreboard();
  scoreboard.addScore("Player1", 100);
  scoreboard.addScore("Player2", 150);
  const topScores = scoreboard.getTopScores();
  console.log(topScores);