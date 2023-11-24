// !Variables and Selectors

const backBtn = document.getElementById("back-to-home");
const score = JSON.parse(localStorage.getItem("score"));
const scoreEle = document.getElementById("score");
const saveBtn = document.getElementById("save-btn");
const nameInput = document.getElementById("name-input");

scoreEle.innerText = score;


// !Handlers

const backHandler = () => {
    
    window.location.assign("/index.html")
}

const saveHandler = () => {

    const playerName = nameInput.value;
    console.log(playerName);
}


// !Event

backBtn.addEventListener("click", backHandler);
saveBtn.addEventListener("click", saveHandler);