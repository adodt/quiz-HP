const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parsel(localStorage.getItem('highScores')) || [];

highScores.map( score => {
    console.log(`${score.username}-${score.score}`);
});