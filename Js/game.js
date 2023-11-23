// !Imports

import formatData from "./formatter.js";


// !Variables & Selectors

const loader = document.getElementById("loader");
const containerBox = document.getElementById("container");

const URL = "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple";
let formattedData = null;

// !Functions

const fetchData = async () => {

    const response = await fetch(URL);
    const json = await response.json();
    formattedData = formatData(json.results);
    console.log (formattedData);
    start();

}

const start = () => {
    loader.style.display = "none";
    containerBox.style.display = "block";
}


// !EventListeners

window.addEventListener("load",fetchData);