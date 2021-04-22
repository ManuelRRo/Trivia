const btnLogin = document.getElementById('btnLogin');

const btnTopic = document.querySelectorAll('.topic');

const btnAnswer = document.querySelectorAll('.buttonGame');

const questionText = document.getElementById('question');

const loginContainer = document.getElementById('login');

const topicContainer = document.getElementById('topic');

const answerQuestionContainer = document.getElementById('Q-A-section');

let listOfBookQuestion = ["The book “Da Vinci Code,” was written by who?", "What was Stephen King’s first published novel?", "What title did Jane Austen originally give to the book that was eventually published as Pride and Prejudice?"];
let bookRightAnswer = ["Dan Brown", "Carrie", "First Impressions"];
let bookWrongAnswer = ["George Orwell", "J.K Rowling", "Sam Collins", "It", "The Stand", "The Shinnig", "Emma", "Persuasion", " Lady Elizabeth"];
let number = 0;
let topicId = "";

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
  });
});

btnAnswer.forEach(btn => {
  btn.addEventListener("click",function () {
    if(number < listOfBookQuestion.length){
      questionText.innerText = listOfBookQuestion[number];
      number++;
    }
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
