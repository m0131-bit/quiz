document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [
        {
            question: "Який моб вибухає біля гравця?",
            answers: ["Зомбі", "Кріпер", "Скелет", "Павук"],
            correct: 1
        },
        {
            question: "Що потрібно, щоб потрапити в Незер?",
            answers: ["Лава і вода", "Алмази", "Портал із обсидіану", "Редстоун"],
            correct: 2
        },
        {
            question: "Який найрідкісніший рудний блок у звичайному світі?",
            answers: ["Золото", "Алмази", "Смарагд", "Залізо"],
            correct: 2
        },
        {
            question: "Хто є фінальним босом Minecraft?",
            answers: ["Візер", "Ендермен", "Ендер-дракон", "Варден"],
            correct: 2
        },
        {
            question: "Чим приручають вовка?",
            answers: ["М’ясом", "Кісткою", "Рибою", "Пшеницею"],
            correct: 1
        },
         {
            question: "Який блок потрібен для зачарування?",
            answers: ["Ковадло", "Піч", "Стіл зачарувань", "Верстак"],
            correct: 2
        },
        {
            question: "Як називається вимір Енду?",
            answers: ["The End", "The Nether", "Deep Dark", "Sky World"],
            correct: 0
        },
        
    ];
 const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    let questionIndex = 0;
    let score = 0;
    const quizScreen = document.querySelector("#quiz-screen")
    const resultScreen = document.querySelector("#result-screen")
    const startScreen = document.querySelector("#start-screen")
    const startBtn = document.querySelector("#start-btn")
    const restartBtn = document.querySelector("#restart-btn")
    const scoreDisplay = document.querySelector("#score-display")
    const resultText = document.querySelector("#result-text")
    let interval
    let timer = 15
    function startGame(){
        startScreen.classList.remove("show");
        startScreen.classList.add("hide");

        resultScreen.classList.remove("show");
        resultScreen.classList.add("hide");

        quizScreen.classList.remove("hide");
        quizScreen.classList.add("show");
        score = 0
        scoreDisplay.textContent = `Бали: 0`;
        questionIndex = 0
        showQuestion(questions[0])
    }
    startBtn.onclick = startGame
    
    function goToStartScreen() {
    resultScreen.classList.remove("show");
    resultScreen.classList.add("hide");

    quizScreen.classList.remove("show");
    quizScreen.classList.add("hide");

    startScreen.classList.remove("hide");
    startScreen.classList.add("show");
}
    restartBtn.onclick = goToStartScreen
    
    function showQuestion(question) {
        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            // Завдання 5 - Перевірка відповіді
            button.addEventListener('click', () => checkAnswer(button,i));
            answersContainer.appendChild(button);

        }
    }
    showQuestion(questions[questionIndex]);

    // Завдання 5 - Перевірка відповіді
    function checkAnswer(button,answerIndex) {
        if (answerIndex == questions[questionIndex].correct) {
            score++;
            button.classList.add("correct");
            scoreDisplay.textContent = `Бали:  ${score} `
            

        } else {
            button.classList.add("wrong");

        }
        questionIndex++;
        if (questionIndex < questions.length) {
        showQuestion(questions[questionIndex]);
    } else {
        showResult();
    }
    }
    function nextQuestion(){
        questionIndex++
        if (questionIndex < questions.length){
            showQuestion(questions[questionIndex])
        }
        else {
            showResult()
        }
    }
    function showResult(){
        quizScreen.classList.remove("show");
        quizScreen.classList.add("hide")
        resultScreen.classList.add("show")
        resultText.textContent = `Твій результат: ${score} з ${questions.length}`
        
    }
    
});
