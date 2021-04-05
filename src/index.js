const btnSubmit = document.getElementById("btnSubmit");
const loginContainer = document.getElementById("login");
const answerContainer = document.getElementById("answers");
const questionContainer = document.getElementById("questions");
const header = document.getElementsByTagName('header');
const txtNickName = document.getElementById("nickname");
const topicGameContainer = document.getElementById("topicGame");

let nameClasses = ["showElement"];
let nickName = "";

WelcomeScreen(nameClasses[0], "add");

btnSubmit.addEventListener("click", function () {
    WelcomeScreen(nameClasses[0], "remove");
    TopicGameScreen(nameClasses[0],"add");
})

function WelcomeScreen(nameClass, action_) {
    if (action_ == "remove") {
        header[0].classList.remove(nameClass);
        loginContainer.classList.remove(nameClass);
    } else {
        header[0].classList.add(nameClass);
        loginContainer.classList.add(nameClass);
    }
}

function TopicGameScreen(nameClass, action_) {
    if (action_ === "remove") {
        topicGameContainer.classList.remove(nameClass);
    } else {
        topicGameContainer.classList.add(nameClass);
    }
}
