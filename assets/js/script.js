const questions = [
    {
        question: "Which is the WRONG way to define a variable in JavaScript?",
        option1: "let",
        option2: "const",
        option3: "var",
        option4: "def",
    },
    {
        question: "How can JavaScript access an element on a page?",
        option1: "document.querySelector()",
        option2: "document.fetchID()",
        option3: "document.getItem()",
        option4: "document.element()",
    },
    {
        question: "Which of the following is the proper format for a for loop?",
        option1: "for (let i = 0. i++. i < item.length)",
        option2: "for (let i = 0; i < item.length; i++)",
        option3: "for ({let i = 0}, {i < item.length}, {i++})",
        option4: "for (item[length]; i++; let i = 0)",
    },
    {
        question:
            "Which character correctly follows a variable declaration in JavaScript?",
        option1: "Semi colon",
        option2: "colon",
        option3: "period",
        option4: "curly brace",
    },
    {
        question:
            "Which of the following is one way to reference a property of an object?",
        option1: "object.name",
        option2: "object/name",
        option3: "object-name",
        option4: "object~name",
    },
    {
        question: "Which of the following is not a primitive data type?",
        option1: "number/int",
        option2: "string",
        option3: "boolean",
        option4: "hexcode",
    },
    {
        question: "What kind of data does JSON read?",
        option1: "objects",
        option2: "arrays",
        option3: "strings",
        option4: "loops",
    },
    {
        question: "Which of the variable declarations are not mutable?",
        option1: "x = 32",
        option2: "const y = 45",
        option3: "let z = 24",
        option4: "var a = 75",
    },
    {
        question: "How do you print data to the console in the browser?",
        option1: "print(data)",
        option2: "display(data)",
        option3: "console.show(data)",
        option4: "console.log(data)",
    },
    {
        question: "Who is the creator of JavaScript?",
        option1: "Bill Gates",
        option2: "Zima Juliapos",
        option3: "Brendan Eich",
        option4: "Mark Zuckerberg",
    },
];

// HTML elements
let timer = document.querySelector("#timer");
let viewHighScores = document.querySelector("#highScores");
let startBtn = document.querySelector("#startBtn");
let question = document.querySelector("#question-section");
let options = document.querySelector("#options");
let description = document.querySelector("#description");
// Object keys
// use a for loop to iterate for all keys in each object
let questionKeys = Object.keys(questions[0]);
console.log(questionKeys);
// event listeners

// starts the quiz
startBtn.addEventListener("click", (event) => {
    event.preventDefault();

    startBtn.setAttribute("style", "display: none;");
    description.setAttribute("style", "display: none;");

    question.textContent = questions[0].question;
});

console.log("test");
