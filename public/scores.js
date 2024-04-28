async function loadScores() {
    let scores = [];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/scores');
      scores = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just use the last saved scores
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
    }
    scores.forEach(score => displayScore(score));
  }
  
function displayScore(score_record) {
    console.log('one');
    let highScoresList = document.querySelector(".high-scores");
    let newItem = document.createElement("li");
    let playerName = localStorage.getItem('userName') ?? 'MISSINGNO.';
    newItem.textContent = score_record.name + ": " + score_record.score + " clicks.";
    newItem.classList.add("score");
    highScoresList.appendChild(newItem);
}
  
loadScores();