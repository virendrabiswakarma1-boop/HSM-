const quiz = [
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Mark",
      "None of these"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: [
      "HTML",
      "JQuery",
      "CSS",
      "XML"
    ],
    answer: 2
  },
  {
    question: "JavaScript is used for?",
    options: [
      "Structure",
      "Styling",
      "Database",
      "Logic & Interaction"
    ],
    answer: 3
  }
];

let current = 0;
let score = 0;
let time = 10;
let timerInterval;

function loadQuestion(){
  clearInterval(timerInterval);
  time = 10;
  document.getElementById("timer").innerText = "⏱️ " + time;

  document.getElementById("result").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("restartBtn").style.display = "none";

  document.getElementById("qcount").innerText =
    `Q ${current+1}/${quiz.length}`;
  document.getElementById("score").innerText =
    `Score: ${score}`;

  document.getElementById("question").innerText =
    quiz[current].question;

  for(let i=0;i<4;i++){
    document.getElementById("opt"+i).innerText =
      quiz[current].options[i];
  }

  startTimer();
}

function startTimer(){
  timerInterval = setInterval(()=>{
    time--;
    document.getElementById("timer").innerText = "⏱️ " + time;
    if(time === 0){
      clearInterval(timerInterval);
      document.getElementById("result").innerText = "Time Up ⏰";
      document.getElementById("nextBtn").style.display = "inline-block";
    }
  },1000);
}

function checkAnswer(choice){
  clearInterval(timerInterval);
  if(choice === quiz[current].answer){
    document.getElementById("result").innerText = "Correct 🎉";
    score++;
  }else{
    document.getElementById("result").innerText = "Wrong ❌";
  }
  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion(){
  current++;
  if(current < quiz.length){
    loadQuestion();
  }else{
    finishQuiz();
  }
}

function finishQuiz(){
  document.getElementById("question").innerText =
    "Quiz Finished!";
  document.querySelector(".options").style.display = "none";
  document.getElementById("result").innerText =
    `Final Score: ${score}/${quiz.length}`;
  document.getElementById("restartBtn").style.display = "inline-block";
}

function restartQuiz(){
  current = 0;
  score = 0;
  document.querySelector(".options").style.display = "block";
  loadQuestion();
}

loadQuestion();
