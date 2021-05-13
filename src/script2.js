
// buttons

const btnLogin = document.getElementById('btnLogin');

const btnTopic = document.querySelectorAll('.btn-topic');

const btnAnswer = document.querySelectorAll('.buttonGame');

const btnReturn = document.getElementById('btn-return');

const btnNewGame = document.getElementById('newGame');

// user text

const userName = document.getElementById('username-txt');

const nickName = document.getElementById('playerName');

const score = document.getElementById('score');

const questionText = document.getElementById('question');

//Containers

const loginContainer = document.getElementById('login');

const topicContainer = document.getElementById('topic');

const answerQuestionContainer = document.getElementById('Q-A-section');

const scoreContainer = document.querySelector('.score-container');



let listOfQuestion = [];
let listOfAnswer = [];
let listOfRightAnswer = [];

const bookQuestion = ["The book “Da Vinci Code,” was written by who?", "What was Stephen King’s first published novel?", "What title did Jane Austen originally give to the book that was eventually published as Pride and Prejudice?"];
const sciencieQuestion = ["What is the nearest planet to the sun?","How many teeth does an adult human have?","On what part of your body would you find the pinna?"];
const historyQuestion = ["In which year did Hitler commit suicide?"," One of the ancient world wonders, the “Hanging Gardens,” was found in which city?","In 1927, who became the first man to fly solo and non-stop across the Atlantic?"];

const bookRightAnswer = ["Dan Brown", "Carrie", "First Impressions"];
const sciencieRightAnswer = ["Mercury","32","Ear"];
const historyRightAnswer = ["1945","Babylon","Charles Lindbergh"];

const bookAnswer = ["George Orwell", "J.K Rowling", "Sam Collins","Dan Brown", "It", "The Stand", "The Shinnig", "Carrie", "Emma","First Impressions", "Persuasion", " Lady Elizabeth"];
const sciencieAnswer = ["Venus","Earth","Jupiter","Mercury","32","31","30","29","Leg","foot","Tongue","Ear"];
const historyAnswer = ["1945","1939","1944","1941","Babylon","Damascus","Israel","Turkey","Charles Wick","River plate","Andrew Jackson","Charles Lindbergh"];


let number_question = 0;
let number_answer = 0;
let topicId = "";
let questionsShowed = 0 ;
let globalScore = 0;

addClass(loginContainer,"show");

btnLogin.addEventListener("click",function () {
  removeClass(loginContainer,"show");
  addClass(topicContainer,"show");
  showNickname();
});

btnTopic.forEach(btn => {
  btn.addEventListener("click",function () {
    removeClass(topicContainer,"show");
    addClass(answerQuestionContainer,"show");
    setupQuestionAnswer(btn);
    showQuestion();
    btnAnswer.forEach(btn__ => {showAnswer(btn__); });
  });
});

btnAnswer.forEach(btn => {
  showAnswer(btn);
  btn.addEventListener("click",function () {
    showQuestion();
    addPoints(getUserAnswer(btn));
    showFinalScore(questionsShowed);
    btnAnswer.forEach(btn__ => {showAnswer(btn__); });
  });
});

function showFinalScore (){

  if(questionsShowed === 2){
    addClass(scoreContainer,"show");
    removeClass(answerQuestionContainer,"show"); 
  }

  questionsShowed++;

}

btnReturn.addEventListener('click',function () {
  addClass(topicContainer,"show");
  removeClass(scoreContainer,"show"); 
  emptyGlobalScore();
  emptyQASection();
});

btnNewGame.addEventListener('click', function () {
  addClass(loginContainer,"show");
  removeClass(scoreContainer,"show"); 
  emptyGlobalScore();
  emptyQASection();
  resetLoginData();
});

function emptyQASection(){
  listOfAnswer = [];
  listOfQuestion = [];
  listOfRightAnswer = [];
  number_answer = 0;
  number_question = 0;
  questionsShowed = 0;
}

function emptyGlobalScore () {
  globalScore = 0;
}

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

function setAnswer (__answer) {

  let str = "";

  if(number_answer < __answer.length) {

    str = __answer[number_answer];

    number_answer++;
    
  }

  return str;
}

function showAnswer (btn) {

  btn.innerText = setAnswer(listOfAnswer); 

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

function buildListOfRightAnswers (id_Topic) {

  if (id_Topic == 1) return historyRightAnswer.slice();

  if (id_Topic == 2) return bookRightAnswer.slice();

  if (id_Topic == 3) return sciencieRightAnswer.slice();

}

function getUserAnswer (b_t_n) {

  return b_t_n.innerText;

}

function addPoints (user_answer) {

  listOfRightAnswer.forEach(right_answer => {
    console.log (user_answer +" "+right_answer);
    if(user_answer === right_answer){
      globalScore+=10;
    }
    score.innerText = `SCORE OF ${globalScore} OF 30`;
  });

}

function setupQuestionAnswer (btn) {

  idTopic = setId(btn);
  listOfQuestion = buildListOfQuestion(idTopic);
  listOfAnswer = buildListOfAnswer(idTopic);
  listOfRightAnswer = buildListOfRightAnswers(idTopic);

}

function showNickname () {
  nickName.innerText = userName.value;
}

function resetLoginData () {
  nickName.innerText = "";
  userName.value = "";
}
