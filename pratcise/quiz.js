const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language",
    ],
    correct: 0,
  },

  {
    question: "Which language is used to style web pages?",
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    correct: 1,
  },

  {
    question: "Which method selects an element by its ID?",
    answers: [
      "querySelector()",
      "getElementById()",
      "getElement()",
      "selectById()",
    ],
    correct: 1,
  },

  {
    question: "Which method converts a JSON string into a JavaScript object?",
    answers: [
      "JSON.convert()",
      "JSON.parse()",
      "JSON.object()",
      "JSON.stringify()",
    ],
    correct: 1,
  },

  {
    question: "Which keyword declares a variable that cannot be reassigned?",
    answers: ["let", "var", "const", "static"],
    correct: 2,
  },
];

let question = document.querySelector("#question");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let result = document.querySelector("#result");
let next = document.querySelector("#next");
let timerDisplay = document.querySelector("#timer");

let currentQuestion = 0;
let score = 0;
let time = 10;
let timer;

function showQuestion() {
  let current = questions[currentQuestion];

  question.textContent = current.question;
  answer1.textContent = current.answers[0];
  answer2.textContent = current.answers[1];
  answer3.textContent = current.answers[2];
  answer4.textContent = current.answers[3];

  result.textContent = "";
  time = 10;
  timerDisplay.textContent = `Time: ${time}`;

  clearInterval(timer);
  timer = setInterval(function () {
    time--;
    timerDisplay.textContent = `Time: ${time}`;

    if (time === 0) {
      clearInterval(timer);
      currentQuestion++;

      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        question.textContent = `Quiz finished--Final score=${score}/${questions.length}`;
        answer1.textContent = "none";
        answer2.textContent = "none";
        answer3.textContent = "none";
        answer4.textContent = "none";
        timerDisplay.style.display = "none";
        next.style.display = "none";
      }
    }
  }, 1000);
}

function checkAnswer(selected) {
  let current = questions[currentQuestion];
  if (selected === current.correct) {
    score++;
    result.textContent = "Correct!";
  } else {
    result.textContent = "Wrong!";
  }
  clearInterval(timer);
}

answer1.addEventListener("click", function () {
  checkAnswer(0);
});
answer2.addEventListener("click", function () {
  checkAnswer(1);
});
answer3.addEventListener("click", function () {
  checkAnswer(2);
});
answer4.addEventListener("click", function () {
  checkAnswer(3);
});

next.addEventListener("click", function () {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    question.textContent = `Quiz Finished! Score: ${score}/${questions.length}`;

    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    next.style.display = "none";
    timerDisplay.style.display = "none";
  }
});


showQuestion();
