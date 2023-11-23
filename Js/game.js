// !Variables & Selectors

const URL = "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple";
const loader = document.getElementById("loader");
const containerBox = document.getElementById("container");

// !Functions

const fetchData = async () => {

    const response = await fetch(URL);
    const json = await response.json();
    console.log(json);
    start();

}

const start = () => {
    loader.style.display = "none";
    containerBox.style.display = "inline";
}


// !EventListeners

window.addEventListener("load",fetchData);