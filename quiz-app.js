const quiz = [
    {
        question: "Which is the most popular Programming Language is being used in Tech Industry?",
        ans1text: "C++",
        ans2text: "Java",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",

    }, {
        question: "Who is the Founder of MindChanger?",
        ans1text: "M.Talha",
        ans2text: "Mehwish",
        ans3text: "Aftab",
        ans4text: "Ubaid",
        answer: "M.Talha",

    }, {
        question: "Why Js is called as Dynamically typed Language?",
        ans1text: "Don't need to declare data type of variable",
        ans2text: "Syntax error is checked at runtime",
        ans3text: "Function can be passed as argument",
        ans4text: "Data can be passed among objects by Inheritance",
        answer: "Don't need to declare data type of variable",
    },
    {
        question: "Who is the Founder of MindChanger?",
        ans1text: "M.Talha",
        ans2text: "Mehwish",
        ans3text: "Aftab",
        ans4text: "Ubaid",
        answer: "M.Talha",

    }
]



const question = document.querySelector("#quiz-question");//Fetching the Question from DOM
const option_a = document.querySelector("#text_option_a");//Fetching the options from DOM
const option_b = document.querySelector("#text_option_b");
const option_c = document.querySelector("#text_option_c");
const option_d = document.querySelector("#text_option_d");
const answerElement = document.querySelectorAll(".answer");
const outputanswer=document.querySelector("#answer");
//Accessing Buttons
const nextbtn = document.querySelector("#next");
const submit = document.querySelector("#quiz-button");


let currentQuestion = 0;
let score = 0;


question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector("input[type='radio']:checked");//Any of the Options is Selected..
    if (checkedAns === null) {
        alert("Select an option")
    }


    else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        } else {
         
          window.location.reload();
        }
    }
}
)


/* 



*/