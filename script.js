class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    checkAnswer(choice) {
      return choice === this.answer;
    }
}
//BOOKS (LITERATURE) QUESTIONS
const bookQuiz = [
    new Question(
        "Who wrote 'Romeo and Juliet'?",
        ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        "William Shakespeare"
    ),
    new Question(
        "Which novel starts with 'Call me Ishmael'?",
        ["Moby-Dick", "Dracula", "Frankenstein", "The Great Gatsby"],
        "Moby-Dick"
    ),
    new Question(
        "Who is the author of 'Pride and Prejudice'?",
        ["Jane Austen", "Emily Brontë", "Virginia Woolf", "George Eliot"],
        "Jane Austen"
    ),
    new Question(
        "Which book features a wizard named Gandalf?",
        ["The Hobbit", "Harry Potter", "Percy Jackson", "Eragan"],
        "The Hobbit"
    ),
    new Question(
        "What is the name of the school in Harry Potter?",
        ["Hogwarts", "Beauxbatons", "Durmstrang", "Ilvermorny"],
        "Hogwarts"
    )
];
 // FLAGS (GEOGRAPHY) QUESTIONS
const flagQuiz = [
    new Question(
        "Which country has a red flag with a white cross? ",
        ["Switzerland", "Denmark", "Sweden", "Norway"],
        "Switzerland"
    ),
    new Question(
      "In which country is home to The Eiffel Tower",
      ["Russia", "France", "Netherlands", "Luxembourg"],
      "France"
    ),
    new Question(
      "Where can you visit the Great Wall?",
      ["🇻🇳", "🇨🇳", "🇰🇷", "🇲🇳"],
      "🇨🇳"
    ),
    new Question(
      "Which country's flag has red and white stripes with a blue square and stars?",
      ["Canada", "United States of America", "France", "Chile"],
      "France"
    ),
    new Question(
      "Where does tacos originate from?",
      ["🇲🇽 Mexico", "🇧🇿 Belize", "🇬🇹 Guatemala", "🇵🇪 Peru"],
      "France"
    ),
  ];
//STATE VARIABLES
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

//DOM ELEMENTS
const homeScreen = document.getElementById("home");
const quizScreen = document.getElementById("quiz");
const resultsScreen = document.getElementById("results");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers")
const nextBtn = document.getElementById("nextBtn");

const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

const scoreEl = document.getElementById("score");
const percentageEl = document.getElementById("percentage");

//START QUIZ WHEN CARD IS CLICKED
document.querySelectorAll(".card").forEach(card=> {
    card.addEventListener("click", () => {
        const quizType = card.dataset.quiz;

        if (quizType === "books") {
            startQuiz(bookQuiz);
        }
        if (quizType === "flags") {
            startQuiz(flagQuiz);
        }
});
});

//START QUIZ 
function startQuiz (selectedQuestions) {
    questions = selectedQuestions;
    currentQuestionIndex = 0;
    score = 0;

    homeScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

//DISPLAY QUESTION
function showQuestion(){
    answered = false;
    nextBtn.disabled = true;
    answersEl.innerHTML = "";

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.text;

    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    progressFill.style.width =
    ((currentQuestionIndex + 1)/ questions.length) * 100 + "%";

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.textContent = choice;

        button.addEventListener("click", () => selectAnswer(button, choice));

        answersEl.appendChild(button);
    });
}

//HANDLE ANSWER SELECTION
function selectAnswer(button, choice) {
    if (answered) return;
    answered = true;

    const correct = questions [currentQuestionIndex].checkAnswer(choice);

    if (correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }
    //Highlight correct answer 
    document.querySelectorAll(".answer-btn").forEach(btn => {
        if (btn.textContent === questions [currentQuestionIndex].answer){
            btn.classList.add("correct");
        }
        btn.disabled =true;
    });
    nextBtn.disabled = false;
}

//NEXT QUESTION
nextBtn.addEventListener("click", () => {
    if (!answered) return;
    
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion ();
    } else {
        showResults ();
    }
});

//SHOW RESULTS
function showResults () {
    quizScreen.classList.remove("active");
    resultsScreen.classList.add("active");

    scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
    percentageEl.textContent = `${Math.round((score / questions.length) * 100)}%`;
}
