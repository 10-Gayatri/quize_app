
const questions = [
    {
        question: "How do you judge what should be added in the next version of the app?",
        options: ["Data Analysis", "User's feedback", "Copy from similar product", "Make a questionary", "Personal feeling"],
        correct: 1,
        image: null
    },
    {
        question: "How do you judge what should be added in the next version of the app?",
        options: ["Data Analysis", "User's feedback", "Copy from similar product", "Make a questionary"],
        correct: 2,
        image: "https://www.jotform.com/blog/wp-content/uploads/2022/10/3-1.png"
    },
    {
        question: "How do you judge what should be added in the next version of the app?",
        options: ["Data Analysis", "User's feedback", "Copy from similar product", "Make a questionary"],
        correct: 3,
        
    },  
];

let currentQuestionIndex = 0;

function startQuiz() {
    document.querySelector(".start-screen").classList.remove("active");
    document.querySelector(".result-screen").classList.remove("active");
    document.querySelector(".question-screen").classList.add("active");
    currentQuestionIndex = 0;
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("questionText").innerText = question.question;
    document.getElementById("questionNumber").innerText = currentQuestionIndex + 1;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionElement.onclick = () => selectOption(optionElement, index);
        optionsContainer.appendChild(optionElement);
    });

    if (question.image) {
        document.getElementById("questionImage").innerHTML = `<img src="${question.image}" alt="Question Image" width="200">`;
    } else {
        document.getElementById("questionImage").innerHTML = '';
    }
}

function selectOption(optionElement, index) {
    const selectedOption = document.querySelector(".option.selected");
    if (selectedOption) {
        selectedOption.classList.remove("selected");
    }
    optionElement.classList.add("selected");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.querySelector(".question-screen").classList.remove("active");
    document.querySelector(".result-screen").classList.add("active");
}