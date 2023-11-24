// ! Variables and Selectors

const homeBtn = document.getElementById("home");


// !Functions & Handlers

const homeHandler = () => {
    window.location.assign("/index.html");
}

// !Event listeners

homeBtn.addEventListener("click", homeHandler);