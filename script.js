// START SCREEN
const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('start');
const homeScreen = document.getElementById('home');

startBtn.addEventListener('click', () => {
  startScreen.classList.remove('active');
  homeScreen.classList.add('active')
})


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
        ["Willliam Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        "William Shakespeare"
    ),
    new Question(
        "Which novel starts with 'Call me Ishmael'?",
        ["Mobby-Dick", "Dracula", "Frankenstein", "The Great Gatsby"],
        "Moby-Dick"
    ),
    new Question(
        "Who is the author of 'Pride and Prejudice'?",
        ["Jane Austen", "Emily Brontë", "Virginia Woolf", "George Eliot"],
        "Jane Austen"
    ),
    new Question(
        "Which book features a wizard named Gandalf?",
        ["The Hobbit", "Harry Potter", "Percy Jackson", "Eragaon"],
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