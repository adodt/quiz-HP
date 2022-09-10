const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const scoreText = document.getElementById('score');
const counterText = document.getElementbyId('counterText')

//setting current question as object & true
let currentQuestion = {};
let acceptingAnswers = true;
//starting score is 0
let score = 0;
//question counter starts at 0
let questionCounter = 0;

//quiz questions
let questions = [
    {
        question: "What is the name of Harry's owl?",
        choice1: "Hedwig",
        choice2: "Hufflepuff",
        choice3: "Shadowfax",
        choice4: "Barnie",
        answer: 1
    },
    {
        question: "What type of plant will not stop crying when pulled?",
        choice1: "Gillyweed",
        choice2: "Devil's Snare",
        choice3: "Mandrake",
        choice4: "Tentacula",
        answer: 3
    },
    {
        question: "What breed of dragon is Norbert?",
        choice1: "Chinese Fireball",
        choice2: "Hungarian Horntail",
        choice3: "Swedish Short-Snout",
        choice4: "Norwegian Ridgeback",
        answer: 4
    },
    {
        question: "What is Hermione's patronus?",
        choice1: "horse",
        choice2: "Jack Russel Terrier",
        choice3: "otter",
        choice4: "cat",
        answer: 3
    }

];  

//Constants
//points go up by 10
const CorrectPoints = 10;
//total number of questions is 4
const TotalQuestions = 4;

//Game function
startGame = () => {
    questionCounter + 0;
    score = 0;
    //choose questions from question array
    availableQuestions = [...questions]
    //print question to console and run getNewQuestion function to populate next question
    console.log(availableQuestions);
    getNewQuestion();
}

getNewQuestion = () => {
    //if no more questions, go to end page
    if(availableQuestions.lenth === 0 || questionCounter >= TotalQuestions){
    localStorage.setItem('mostRecentScore', score);
    //locate end page
    return window.location.assign('gameover.html');
    }

    
}