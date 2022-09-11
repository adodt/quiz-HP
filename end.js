const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

//print and convert array object out of local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES =  5;
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button");
    e.preventDefault();

const score = {
    //retains high scores
    score: mostRecentScore,
    name: username.value
};
    //add score to array
    highScores.push(score);
    //sorted array of high scores
    highScores.sort( (a,b) => b.score - a.score) 
    //keeps max amount of scores at 5
    highScores.splice(5);

    //update local storage with high scores and stringify
    localStorage.setItem('highScores', JSON.stringify(highScores));
    //go back home
    window.location.assign('highscores.html');
    console.log(highScores);
};