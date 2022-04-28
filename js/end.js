//prepare constants for high score
//var today = new Date();
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
//get the file from local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
//set the max limit for high scores so only top 10 displays
const MAX_HIGH_SCORES = 10

finalScore.innerText = mostRecentScore
//save the current score the to list
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()
// store the current score , username and current date
    const score = {
        score: mostRecentScore,
        name: username.value,
        //today: today
    }

    highScores.push(score)
   // sort the scores from high to low
    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('../index.html')


}