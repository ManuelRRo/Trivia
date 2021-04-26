const btnLogin = document.getElementById('btnLogin');

const btnTopic = document.querySelectorAll('.topic');

const btnAnswer = document.querySelectorAll('.buttonGame');

const questionText = document.getElementById('question');

const loginContainer = document.getElementById('login');

const topicContainer = document.getElementById('topic');

const answerQuestionContainer = document.getElementById('Q-A-section');

let listOfQuestion = [];
let listOfAnswer = [];
let bookQuestion = ["The book “Da Vinci Code,” was written by who?", "What was Stephen King’s first published novel?", "What title did Jane Austen originally give to the book that was eventually published as Pride and Prejudice?"];
let sciencieQuestion = ["What is the nearest planet to the sun?","How many teeth does an adult human have?","On what part of your body would you find the pinna?"];
let historyQuestion = ["In which year did Hitler commit suicide?"," One of the ancient world wonders, the “Hanging Gardens,” was found in which city?","In 1927, who became the first man to fly solo and non-stop across the Atlantic?"];

let bookRightAnswer = ["Dan Brown", "Carrie", "First Impressions"];
let sciencieRightAnswer = ["Mercury","32","Ear"];
let historyRightAnswer = ["1945","Babylon","Charles Lindbergh"];

let bookAnswer = ["George Orwell", "J.K Rowling", "Sam Collins","Dan Brown", "It", "The Stand", "The Shinnig", "Carrie", "Emma","First Impressions", "Persuasion", " Lady Elizabeth"];
let sciencieAnswer = ["Venus","Earth","Jupiter","Mercury","32","31","30","29","Leg","foot","Tongue","Ear"];
let historyAnswer = ["1945","1939","1944","1941","Babylon","Damascus","Israel","Turkey","Charles Wick","River plate","Andrew Jackson","Charles Lindbergh"];


let number_question = 0;
let number_answer = 0;
let topicId = "";
let i = 0 ;
let j = 3;

addClass(loginContainer,"show");

btnLogin.addEventListener("click",function () {
  removeClass(loginContainer,"show");
  addClass(topicContainer,"show");
});

btnTopic.forEach(btn => {
  btn.addEventListener("click",function () {
    removeClass(topicContainer,"show");
    addClass(answerQuestionContainer,"show");
    idTopic = setId(btn);
    listOfQuestion = buildListOfQuestion(idTopic);
    listOfAnswer = buildListOfAnswer(idTopic);
    showQuestion();
    btnAnswer.forEach(btn__ => {showAnswer(btn__,listOfAnswer);});
  });
});

btnAnswer.forEach(btn => {
  showAnswer(btn,listOfAnswer);
  btn.addEventListener("click",function () {
    showQuestion();
    btnAnswer.forEach(btn__ => {showAnswer(btn__,listOfAnswer);});
  });
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function removeClass(container,class_) {

  container.classList.remove(class_);

}

function addClass(container,class_) {

  container.classList.add(class_);

}

function setId(element_) {

  return element_.id;

}

function showQuestion () {

  if(number_question < listOfQuestion.length) {

    questionText.innerText = listOfQuestion[number_question];

    number_question++;

  }
}

function showAnswer (__btn,__answer) {
  if(number_answer < __answer.length) {

    __btn.innerText = __answer[number_answer];

    number_answer++;
  }
}

function buildListOfQuestion (idTopic_) {

  if (idTopic_ == 1) return historyQuestion.slice();

  if (idTopic_ == 2) return bookQuestion.slice();

  if (idTopic_ == 3) return sciencieQuestion.slice();

}

function buildListOfAnswer (idTopic__) {

  if (idTopic__ == 1) return historyAnswer.slice();

  if (idTopic__ == 2) return bookAnswer.slice();

  if (idTopic__ == 3) return sciencieAnswer.slice();

}
