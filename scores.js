function loadScores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    console.log("hello");
    if (scoresText) {
      scores = JSON.parse(scoresText);
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