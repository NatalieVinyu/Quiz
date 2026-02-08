# Quiz Hub

A web-based interactive quiz game application that tests users' knowledge across multiple topics with real-time scoring and a countdown timer.

## Features

- **Multiple Quiz Categories:**
  - World Flags (Geography)
  - General Knowledge
  - Literature

- **Interactive User Interface:**
  - Start screen with welcoming message
  - Topic selection with card-based design
  - Real-time quiz gameplay with timed questions
  - Results screen displaying score and percentage

- **Quiz Mechanics:**
  - 15-second countdown timer per question
  - Immediate feedback on answer selection
  - Automatic answer highlighting (correct answers in green, incorrect in red)
  - Progress bar tracking quiz completion
  - Auto-lock functionality when timer runs out
  - Smooth transitions between screens

- **Responsive Design:**
  - Mobile-friendly layout
  - Adapts to different screen sizes

## Project Structure

```
├── index.html       # Main HTML file with page structure
├── script.js        # JavaScript logic and quiz questions
├── style.css        # Styling and layout

## File Descriptions

### index.html
Contains the HTML structure with four main screens:
- Start Screen: Welcome page with quiz introduction
- Home Screen: Topic selection with three quiz cards
- Quiz Screen: Question display with answer options and timer
- Results Screen: Final score and percentage with action buttons

### script.js
Contains all JavaScript functionality:
- **Question Class:** Blueprint for creating quiz questions with validation
- **Quiz Data:** Three arrays of Question objects (15 total questions - 5 per topic)
- **Game Logic:** Functions for quiz flow, timer management, and answer checking
- **Event Listeners:** Button interactions and user responses

### style.css
Provides professional styling with:
- Custom CSS variables for consistent color scheme
- Flexbox-based responsive layout
- Smooth transitions and hover effects
- Button styling with visual feedback
- Mobile media queries

## How to Use

1. **Start the Quiz:**
   - Open `index.html` in a web browser
   - Click the "Start Quiz" button on the welcome screen

2. **Select a Topic:**
   - Choose from "World Flags," "General Knowledge," or "Literature"
   - Click on any card to begin that quiz

3. **Answer Questions:**
   - Read the question carefully
   - Click on your answer choice before the 15-second timer expires
   - The correct answer will be highlighted in green
   - Incorrect selections will be highlighted in red
   - If time runs out, the correct answer is revealed automatically

4. **View Results:**
   - After completing all questions, view your score and percentage
   - Click "Restart Quiz" to try again
   - Click "Home" to return to topic selection

## Color Scheme

- **Primary Color:** #151b54 (Dark Blue - Background)
- **Secondary Color:** #123456 (Navy - Text accents)
- **Tertiary Color:** #DAEDF5 (Light Blue - Timer)
- **Button Color:** #29465b (Dark Slate - Buttons)
- **Button Hover:** #3b5c70 (Lighter Slate)
- **Correct Answer:** #c7e9c0 (Light Green)
- **Wrong Answer:** #ff7b7b (Light Red)

## Technologies Used

- **HTML5:** Semantic markup and structure
- **CSS3:** Modern styling with custom properties and flexbox
- **JavaScript (ES6+):** Object-oriented programming with classes, event handling, and DOM manipulation
- **Font Awesome:** Icon library for UI elements
- **Google Fonts:** Roboto font family

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required

## Quiz Questions

### Literature (5 questions)
- Shakespeare, classic novels, Harry Potter references

### World Flags (5 questions)
- Flag identification, geographical landmarks, country origins

### General Knowledge (5 questions)
- Geography, space, world facts, languages

## Future Enhancement Ideas

- Add more quiz categories
- Implement difficulty levels
- Add sound effects and animations
- Create a leaderboard system
- Save user progress locally
- Add question-specific explanations
- Implement shuffle for answer choices
- Add more questions per category
- Add user login/registration
- Store quiz statistics

## Browser Compatibility

Works on all modern browsers including:
- Chrome/Chromium
- Firefox
- Safari
- Microsoft Edge
