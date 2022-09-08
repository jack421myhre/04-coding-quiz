const highScores = document.querySelector("#high-scores-list");

let highScoresList =
    JSON.parse(window.localStorage.getItem("highScoresList")) || [];
console.log(highScoresList);

for (let i = 0; i < highScoresList.length; i++) {
    let scoreEl = document.createElement("li");
    scoreEl.textContent = `User: ${highScoresList[i].initials} - Score: ${highScoresList[i].score}`;
    highScores.appendChild(scoreEl);
}
