
class Game {
    constructor() {
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = localStorage.getItem('userName') ?? 'MISSINGNO.';
        // This is the only button, multipurpose.
        let button = document.querySelector('.game-button')
        button.textContent = "INCREASE POWER"
    }
    onButtonPress() {
        console.log('button pressed.')
    }
}

const game = new Game();
