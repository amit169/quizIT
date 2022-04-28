
//Declare constants
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// The following Array is the list of questions.
//Each question has four possible answers
//The correct answer is indicated by the index (e.g. answer: 1)
let questions = [
    {
        question: 'What is the full form of HTML ?',
        choice1: 'Hypertext Markup Language',
        choice2: 'Helpful Text Markup Language',
        choice3: 'Hypertext Markup Library ',
        choice4: 'Hypertext Transfer Language',
        answer: 1,
    },
    {
        question: "Who is making the Web standards?",
        choice1: "Google",
        choice2: "The World Wide Web Consortium",
        choice3: "Microsoft",
        choice4: "The World Wide Web Forum",
        answer: 2,
    },
    {
        question: "Choose the correct HTML element for the largest heading?",
        choice1: "<<head>>",
        choice2: "<<heading>>",
        choice3: "<H1>",
        choice4: "<H6>",
        answer: 3,
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        choice1: "<break>",
        choice2: "<lb>",
        choice3: "<linebr>",
        choice4: "<br>",
        answer: 3,
    },
    {
        question: "Which is not a valid attribute for <<body>>?",
        choice1: "vlink",
        choice2: "onload",
        choice3: "onfocus",
        choice4: "paragraph",
        answer: 4,
    },
    {
        question: "What is the correct HTML syntax for adding a background the color yellow?",
        choice1: "<<body>yellow</body>>",
        choice2: "<<body bg=”yellow”>",
        choice3: "<<body bgcolor=yellow>",
        choice4: "<<bground yellow>",
        answer: 2,
    },
    {
        question: "What is the correct HTML syntax for creating a hyperlink?",
        choice1: "<<a href=\"index.html\">Quiz HTML</a>",
        choice2: "<<a ulr=\"index.html\">Quiz HTML</a>",
        choice3: "<<alink=\"index.html\">Quiz HTML</a>",
        choice4: "<<aweb=\"index.html\">Quiz HTML</a>",
        answer: 1,
    },
    {
        question: "Which character is used to indicate an end tag?",
        choice1: "<",
        choice2: "%",
        choice3: "&",
        choice4: "/",
        answer: 4,
    },
    {
        question: "Which of these elements are all <table> elements?",
        choice1: "<table><tr><td>",
        choice2: "<tx><td><tf> ",
        choice3: "<table><ti><tr> ",
        choice4: "<tx><td><tr>",
        answer: 1,
    }

]



let currQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


const SCORE_POINTS = 100
const MAX_QUESTIONS = 9

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('../html/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currQuestion = availableQuestions[questionsIndex]
    question.innerText = currQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()