// !Variables & Selectors

const actionBtns = document.querySelectorAll(".level");
const homeBtn = document.getElementById("home-btn");


// !Functions & Handlers

const homeHandler = () => {
    window.location.assign("/")
}

const difficultySelectorHandler = (event) => {
    
    const level = event.target.innerText.toLowerCase();
    localStorage.setItem("level", level);
    window.location.assign("/");
}


// !eventListners


homeBtn.addEventListener("click", homeHandler);
actionBtns.forEach(button => button.addEventListener("click", difficultySelectorHandler));