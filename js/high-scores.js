//Declare the constants for score list and high scores
const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []
//get the data from the local storage
highScoresList.innerHTML =
    highScores.map(score => {
        //return the name and score element
        return `<li class="high-score">${score.name} - ${score.score}</li>`
    }).join("")