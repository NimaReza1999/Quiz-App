// !Variables and Selectors

const backBtn = document.getElementById("back-to-home");
const score = JSON.parse(localStorage.getItem("score"));
const scoreEle = document.getElementById("score");
const saveBtn = document.getElementById("save-btn");
const nameInput = document.getElementById("name-input");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

scoreEle.innerText = score;


// !Handlers

const backHandler = () => {
    
    window.location.assign("/index.html")
}

const saveHandler = () => {

    if (!nameInput.value || !score) {
        alert("Invalid Name or Score");
    } else {
    const playerName = nameInput.value;
    const finalScore = {
        name: playerName,
        score,
    }
    highScores.push(finalScore);
    highScores.sort ((a, b) => b.score - a.score);
    highScores.splice(10);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.removeItem("Score");
    window.location.assign("/");   
}
}


// !Event

backBtn.addEventListener("click", backHandler);
saveBtn.addEventListener("click", saveHandler);