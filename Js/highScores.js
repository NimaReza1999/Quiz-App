// ! Variables and Selectors

const homeBtn = document.getElementById("home");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const rankingTable = document.querySelector("table")

const tableRows = highScores.map((score, index) => {

    return `
   <tr>
    <td class="rank">
        ${index+1}
    </td>
    <td>
        ${score.name}
    </td>
    <td>
        ${score.score}
    </td>
    </tr>`
});

rankingTable.innerHTML = tableRows.join("");


// !Functions & Handlers

const homeHandler = () => {
    window.location.assign("/index.html");
}

// !Event listeners

homeBtn.addEventListener("click", homeHandler);

