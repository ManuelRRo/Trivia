function isRightAnswer(question, answerByUser, arrayQuestion,ans) {

  let questionNumber = 0;
  questionNumber = getQuestionNumber(arrayQuestion, question);
  if (answerByUser === ans[questionNumber]) {
    alert("right");
    return true;
  } else {
    alert("Wrong");
    return false;
  }
}

function setGameAnswer (rightAnswers,wrongAnswer,rightAnswerNumber) {
  let answerOptionNumber = 4;
  let answerOption = new Array (answerOptionNumber);
  let answerId = 0;
  let cont1 = 0;
  let cont2 = 0;

  while (cont1 < answerOptionNumber) {
    if(cont1 === 0) answerOption[cont1] = rightAnswers[rightAnswerNumber];
    else {
      answerId = getRandomInt(0,answerOptionNumber);//in the first four position are the group of wrong answer of book
      answerOption[cont1] = wrongAnswer[answerId];
    }
    cont1++;
  }

    while (cont2 < answerOptionNumber) {
        answerId = getRandomInt(0, 4);
          if (answerId < answerOption.length) {
            buttonGame[cont2].textContent = (answerOption[answerId]);
            answerOption.splice(answerId, 1);
            cont2++;
          }
    }

}

function isUndifined(value){
  if(value === undefined) return true;
  return false;
}

function getQuestionNumber(array, question) {
  let questionNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === question) questionNumber = i;
  }
  return questionNumber;
}
/////////////////////////////////////////////////////////////////////////////////7
let listOfBookQuestion = ["The book “Da Vinci Code,” was written by who?", "What was Stephen King’s first published novel?", "What title did Jane Austen originally give to the book that was eventually published as Pride and Prejudice?"];
let listOfHistoryQuestion = [];
let listOfSciencieQuestion = [];
let bookRightAnswer = ["Dan Brown", "Carrie", "First Impressions"];
let bookWrongAnswer = ["George Orwell", "J.K Rowling", "Sam Collins", "It", "The Stand", "The Shinnig", "Emma", "Persuasion", " Lady Elizabeth"]
let buttonGame = [btnOne,btnTwo,btnThree,btnFour];
let listOfAllquestion = [listOfBookQuestion,listOfHistoryQuestion,listOfSciencieQuestion];
let listOfRightAnswer = [bookRightAnswer];
let categories = ["books","history","sciencie"];
let selectedCategory = "";
let askNumber = 0;
let amountOfQuestionShowed = 0;

let questionCopyOne = [];
let questionCopyTwo = [];
let answerOptions = [];
let randomQuestionNumber = 0;


Setup();


btnLogin.addEventListener("click", function() {
  showTopic();
});

btnBooks.addEventListener("click", function() {
  showGameScreenAndSendTopic(categories[0]);
  showQuestionAndAnswers();
});

btnOne.addEventListener("click", function() {
  // isRightAnswer(question.textContent, btnOne.textContent, questionCopy, listOfRightAnswer[0]);
  showQuestionAndAnswers();
});

btnTwo.addEventListener("click", function() {
  // isRightAnswer(question.textContent, btnTwo.textContent, questionCopy, listOfRightAnswer[0]);
  showQuestionAndAnswers();
});

btnThree.addEventListener("click", function() {
  // isRightAnswer(question.textContent, btnThree.textContent, questionCopy, listOfRightAnswer[0]);
  showQuestionAndAnswers();
});

btnFour.addEventListener("click", function() {
  // isRightAnswer(question.textContent, btnFour.textContent, questionCopy, listOfRightAnswer[0]);
  showQuestionAndAnswers();
});


function Setup() {
  loginContainer.classList.add('show');
}

function showTopic(){
  loginContainer.classList.add('hide');
  topicContainer.classList.add('show');
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function showGameScreenAndSendTopic(topic) {
  answerQuestionContainer.classList.add('show');
  topicContainer.classList.remove('show');
  selectedCategory = topic;
}

function showQuestionAndAnswers() {
  let questionNoFound = true;
  let listNumber = 0;

  if(selectedCategory === categories[listNumber]) {
    questionCopyOne = listOfAllquestion[listNumber].slice();
    questionCopyTwo = questionCopyOne.slice();
    answerOptions = listOfRightAnswer[listNumber];
  }
  if(amountOfQuestionShowed < 3) {
    while(questionNoFound){
      randomQuestionNumber = getRandomInt(0,3);
      console.log(" numero de pregunta aleatorio "+randomQuestionNumber);
      questionNoFound = false;
      // if(randomQuestionNumber < questionCopyTwo.length) {
      //   questionText.textContent = (questionCopyTwo[randomQuestionNumber]);
      //   questionCopyTwo.splice(randomQuestionNumber,1);
      //   questionNoFound = false;
      //   amountOfQuestionShowed ++;
      //   console.log("Pregunta mostrada: "+ questionCopyTwo[randomQuestionNumber]);
      //   console.log("Cantidad de preguntas mostradas: "+amountOfQuestionShowed);
      // }
    }
  }
}

  // if (selectedCategory === "books" && amountOfQuestionShowed === 0) {
  //   questionCopyOne = listOfAllquestion[listNumber].slice(); ///////******************
  //   questionCopyTwo = questionCopyOne.slice();     ///////******************
  //   listOfRightAnswer = listOfAllRightAnswer[listNumber].slice();  ///////******************
  // }
  //
  // if (amountOfQuestionShowed < 3) {
  //   while (questionNoFound) {
  //     randomQuestionNumber = getRandomInt(0, 3);
  //     if (randomIndex < question.length) {
  //       questionText.textContent = (question[randomIndex]);
  //       question.splice(randomIndex, 1);
  //       questionNoFound = false;
  //       amountOfQuestionShowed++;
  //     }
  //   }
  // }

  // rightAnsNum = getQuestionNumber(arrayOfQuestion[0],question.textContent);
  // setGameAnswer(listOfRightAnswer[0],bookWrongAnswer,rightAnsNum);
  // buttonGame[0].textContent = "wild cat";
