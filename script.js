const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const pointsElem = document.getElementById("yourpoints") //elem för p elementet

let shuffledQuestions, currentQuestionIndex

let points = 0; //current points

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    points = 0;
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0

    questionContainerElement.classList.remove("hide")
    setNextQuestion()
    pointsElem.innerText = ""
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
         nextButton.classList.remove("hide")
    }   else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")

        callPoints()
    }
}
function callPoints() {
    pointsElem.innerText = "Thank you for playing" 
}

function setStatusClass(element, correct) {
    clearStatusClass(element)  
    if (correct) {       
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
//alla questions 
const questions = [
    {
        question: "Vilken lärare säger, 'Ja hejsan'?",
        answers: [
            { text: "Kalle", correct: false },
            { text: "Rebecka", correct: false },
            { text: "Romain", correct: false },
            { text: "Rune", correct: true }
        ]
    },
    {
        question: "Which building are the class interactive media and webtechnologies usually in?",
        answers: [
            { text: "K-building", correct: false},
            { text: "M-building", correct: false },
            { text: "D-building", correct: true },
            { text: "N-building", correct: false }
        ]
    },
    {
        question: "How old is Sven?",
        answers: [
            { text: "24", correct: true },
            { text: "23", correct: false },
            { text: "25", correct: false },
            { text: "too old", correct: false }
        ]
    },
    {
        question: "When is Svens birthday?",
        answers: [
            { text: "November, 24", correct: false},
            { text: "December, 27", correct: false },
            { text: "November, 27", correct: true },
            { text: "January, 2", correct: false },
        ]
    },
    {
        question: "How do you say hello in Russian?",
        answers: [
            { text: "Privjyt", correct: false },
            { text: "Privjet", correct: false },
            { text: "Privyt", correct: false },
            { text: "Privet", correct: true }
        ]
    },
    {
        question: "What did Baran the rapper say in his song Demons",
        answers: [
            { text: "ja glum", correct: false},
            { text: "Låt mig sjunga för dig", correct: true },
            { text: "Hämta faden", correct: false },
            { text: "äger en glock", correct: false },
        ]
    },
    {
        question: "What is Elijahs favorite food?",
        answers: [
            { text: "Bönor och Brunsås", correct: false },
            { text: "Kebab", correct: false },
            { text: "FuFu (FooFoo)", correct: true },
            { text: "Pizza", correct: false }
        ]
    },
    {
        question: "What is Svens favorite Chocolate right now?",
        answers: [
            { text: "Kinder Maxi", correct: true},
            { text: "Marabou", correct: false },
            { text: "Kinder Bueno", correct: false },
            { text: "ICA Basic", correct: false },
        ]
    },
    {
        question: "What does Sven drink too much of?",
        answers: [
            { text: "Alcohol", correct: true},
            { text: "Coffee", correct: true },
            { text: "Pepsi Max", correct: true },
            { text: "Energy Drinks", correct: true },
        ]
    },
    {
        question: "Svens Sister is what?",
        answers: [
            { text: "Best at everything she does", correct: false},
            { text: "Younger then Sven", correct: false },
            { text: "Cool", correct: false },
            { text: "The best sister in the world", correct: true },
        ]
    },
    {
        question: "What did Sven spend most of his time doing in High School?",
        answers: [
            { text: "Study", correct: false},
            { text: "Socialising with his classmates", correct: false },
            { text: "Playing video-games", correct: true },
            { text: "Going to school", correct: false },
        ]
    },
]