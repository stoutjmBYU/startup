class Game {

    constructor() {
        this.score = 0;
        // 0=not started, 1=started
        this.game_started = false;
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
        // This is the only button, multipurpose.
        this.button = document.querySelector('.game-button');
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'MISSINGNO.';
    }

    onButtonPress() {
        // Start the game if it hasn't started yet.
        if (this.game_started === false) {
            this.button.textContent = "INCREASE POWER"
            const instruct_text = document.querySelector('#instruct-text')
            instruct_text.textContent = "GO! GO! GOOO!"
            setTimeout(this.timeup.bind(this), 5000);         
            this.game_started = true;
        }
        console.log('button pressed.')
        this.score += 1;
        this.setScore();
    }

    setScore() {
        const scoreEl = document.querySelector('#score');
        scoreEl.textContent = this.score;
      }

    timeup() {
        this.button.textContent = "Time's up."
        this.button.disabled = true;
        const instruct_text = document.querySelector('#instruct-text')
        instruct_text.textContent = "Great job! To see your score on the global boards, go to the scores tab. Or refresh the page to play again."
        
        this.saveScore();
    }

    saveScore(score) {
        const userName = this.getPlayerName();
        let scores = [];
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
          scores = JSON.parse(scoresText);
        }
        scores = this.updateScores(userName, this.score, scores);
    
        localStorage.setItem('scores', JSON.stringify(scores));
      }
    
      updateScores(userName, score, scores) {
        const date = new Date().toLocaleDateString();
        const newScore = { name: userName, score: score, date: date };
    
        let found = false;
        for (const [i, prevScore] of scores.entries()) {
          if (score > prevScore.score) {
            scores.splice(i, 0, newScore);
            found = true;
            break;
          }
        }
    
        if (!found) {
          scores.push(newScore);
        }
    
        if (scores.length > 10) {
          scores.length = 10;
        }
    
        return scores;
      }
}

const game = new Game();
