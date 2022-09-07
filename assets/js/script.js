// HTML elements
const timer = document.querySelector("#timer");
const viewHighScores = document.querySelector("#high-scores");
const start = document.querySelector("#start");
const startBtn = document.querySelector("#start-button");
const questionTitle = document.querySelector("#title");
const questionsSection = document.querySelector("#questions-section");
const newQuestion = document.querySelector("#new-question");
const optionsList = document.querySelector("#options-list");
const grade = document.querySelector("#grade");
const finalScreen = document.querySelector("#final-screen");
const saveScoreBtn = document.querySelector("#save-score");
const initials = document.querySelector("#initials");

let countdown;
let timeLeft = 100;
let qIndex = 0;

// Tracks the timer once the quiz begins
function quizTime() {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
        endQuiz();
    }
}

// Starts the quiz when the start button is clicked
function beginQuiz() {
    start.setAttribute("class", "hidden");
    questionsSection.removeAttribute("class");
    countdown = setInterval(quizTime, 1000);
    timer.textContent = timeLeft;
    // Posts the next question when the current one is answered
    postQuestion();
}

// Posts the question to the page/
function postQuestion() {
    let currentQ = questions[qIndex];
    newQuestion.textContent = currentQ.question;
    optionsList.innerHTML = "";

    // Populates the answer options underneath the question
    for (let i = 0; i < currentQ.options.length; i++) {
        let option = currentQ.options[i];
        let userOption = document.createElement("button");
        userOption.textContent = i + 1 + ": " + option;
        userOption.setAttribute("value", option);
        userOption.setAttribute("class", "option");

        // Adds an event listener to each option and checks if the user is right or wrong
        userOption.addEventListener("click", (e) => {
            if (e.target.value !== questions[qIndex].answer) {
                timeLeft -= 10;
                if (timeLeft <= 0) {
                    timeLeft = 0;
                }
                timer.textContent = timeLeft;
                grade.textContent = "wrong!";
            } else {
                grade.textContent = "Right!";
            }

            // Displays if the user is right or wrong for one second
            grade.setAttribute("class", "grade");
            setTimeout(() => {
                grade.setAttribute("class", "grade hidden");
            }, 1000);

            // Used to move to the next question
            qIndex++;

            // Checks the time and if the user is at the end of the quiz, then ends the quiz if true, otherwise it moves to the next question
            if (timeLeft <= 0 || qIndex === questions.length) {
                endQuiz();
            } else {
                postQuestion();
            }
        });
        // Appends each option to the list of options
        optionsList.appendChild(userOption);
    }
}
