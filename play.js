
class Game {
    constructor() {
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = localStorage.getItem('userName') ?? 'MISSINGNO.';
    }
}

const game = new Game();
