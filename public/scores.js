async function loadScores() {
    let scores = [];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/scores');
      scores = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('scores', JSON.stringify(scores));
      console.log('Loaded service scores successfully.')
    } catch {
      console.log('Failed to load service scores. Load local scores.')
      // If there was an error then just use the last saved scores
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
    }
    scores.forEach(score => displayScore(score));
  }
  
function displayScore(score_record) {
    let highScoresList = document.querySelector(".high-scores");
    let newItem = document.createElement("li");
    newItem.textContent = score_record.name + ": " + score_record.score + " clicks.";
    newItem.classList.add("score");
    highScoresList.appendChild(newItem);
}
  
function displayQuote(data) {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}

loadScores();
displayQuote();
