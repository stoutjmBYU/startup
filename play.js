
class Game {
    constructor() {
        this.score = 0;
        // 0=not started, 1=playing, 2=ready to restart
        this.game_mode = 0;
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = localStorage.getItem('userName') ?? 'MISSINGNO.';
        // This is the only button, multipurpose.
        this.button = document.querySelector('.game-button')
    }
    onButtonPress() {
        // Reload the page if the game is ready for restart.
        if (this.game_mode === 2) {
            location.reload();
        }
        // Start the game if it hasn't started yet.
        if (this.game_mode === 0) {
            this.button.textContent = "INCREASE POWER"
            const instruct_text = document.querySelector('#instruct-text')
            instruct_text.textContent = "GO! GO! GOOO!"
            setTimeout(this.timeup.bind(this), 5000);            
        }
        console.log('button pressed.')
        this.score += 1;
        this.updateScore();
    }
    updateScore() {
        const scoreEl = document.querySelector('#score');
        scoreEl.textContent = this.score;
      }
    timeup() {
        this.button.textContent = "Time's up."
        this.button.disabled = true;
        const instruct_text = document.querySelector('#instruct-text')
        instruct_text.textContent = "Great job! To see your score on the global boards, go to the scores tab. Or refresh the page to play again."
        // TODO save current score to the database.
    }
}

const game = new Game();
