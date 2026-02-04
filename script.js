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
