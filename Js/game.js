// !Imports

import formatData from "./formatter.js";


// !Selectors & Variables

const loader = document.getElementById("loader");
const containerBox = document.getElementById("container");
const questionBox = document.getElementById("question");
const nextBtn = document.getElementById("next-question");
const answerList = document.querySelectorAll(".answer--text");
const scoreCalculator = document.getElementById("your--score_span");
const questionNo = document.getElementById("question--number_span");
const finishBtn = document.getElementById("finish-game");


const CORRECT_BONUS = 10;
const URL = "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple";

let formattedData = null;
let questionIndex = 0;
let correctAnswer = null;
let score = 0;
let isAccepted = true;

// !Functions

const fetchData = async () => {

    const response = await fetch(URL);
    const json = await response.json();
    formattedData = formatData(json.results);
    start();

}
const start = () => {

    questionTextUpdater()
    loader.style.display = "none";
    containerBox.style.display = "block";
}

const questionTextUpdater = () => {
    
    const {question, answers, correctAnswerIndex} = 
    formattedData[questionIndex];
    questionNo.innerText = questionIndex+1;
    correctAnswer = correctAnswerIndex;
    questionBox.innerText = question;
    answerList.forEach((item, index) => {
        item.innerText = answers[index];
    })

}

const checkAnswer = (event, index) => {

    if(!isAccepted) return;
    isAccepted = false;

    const isCorrect = index === correctAnswer ? true : false;
    if ( isCorrect ) {
        event.target.classList.add("correct");
        score += CORRECT_BONUS;
        scoreCalculator.innerText = score;
    } else { 
        event.target.classList.add("incorrect");
        answerList[correctAnswer].classList.add("correct");
    }
}

const nextQuestionHandler = () => {
    
    if ( questionIndex < formattedData.length - 1) {
        questionIndex++;
        isAccepted = true;
        removeClassHandler();
        questionTextUpdater();
    } else {
        finishHandler();
    }
}

const removeClassHandler = () => {
    answerList.forEach(button => button.classList="answer--text")
}

const finishHandler = () => {

    localStorage.setItem("score", JSON.stringify(score));
    window.location.assign("/end.html");
}




// !EventListeners

window.addEventListener("load",fetchData);
answerList.forEach((button, index) => {
    button.addEventListener("click", (event) => checkAnswer(event, index))
});
nextBtn.addEventListener("click", nextQuestionHandler);
finishBtn.addEventListener("click", finishHandler);
