const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    }
];

let score = 0;

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h2');
        questionTitle.innerText = q.question;
        questionDiv.appendChild(questionTitle);

        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');

        q.options.forEach(option => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            optionsDiv.appendChild(optionLabel);
        });

        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });
}

function calculateScore() {
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
}

function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';

    const resultText = document.createElement('p');
    resultText.innerText = `Your score is ${score} out of ${questions.length}.`;

    const resultImage = document.createElement('img');
    if (score === questions.length) {
        resultImage.src = 'https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif' ; // Winning GIF
    } else {
        resultImage.src = 'https://media.giphy.com/media/3o6Zt8MgUuvSbkZYWc/giphy.gif'; // Losing GIF
    }

    resultContainer.appendChild(resultText);
    resultContainer.appendChild(resultImage);
}

submitButton.addEventListener('click', () => {
    calculateScore();
    displayResult();
});

loadQuiz();
