// Question data
const questions = [
  {
    question: "What is your favorite playing style?",
    answers: ["All-around game", "Shooting", "Scoring and versatility", "Power and athleticism"],
    players: ["LeBron James", "Stephen Curry", "Kevin Durant", "Giannis Antetokounmpo"]
  },
  {
    question: "Which of these is most important to you?",
    answers: ["Leadership", "Precision", "Winning at any cost", "Dominance"],
    players: ["LeBron James", "Stephen Curry", "Kevin Durant", "Giannis Antetokounmpo"]
  },
  {
    question: "How do you deal with challenges?",
    answers: ["Lead by example", "Focus on perfecting my craft", "Stay calm and adapt", "Power through it with strength"],
    players: ["LeBron James", "Stephen Curry", "Kevin Durant", "Giannis Antetokounmpo"]
  },
  {
    question: "What is your team role?",
    answers: ["The leader", "The sharpshooter", "The versatile scorer", "The unstoppable force"],
    players: ["LeBron James", "Stephen Curry", "Kevin Durant", "Giannis Antetokounmpo"]
  }
];

let currentQuestionIndex = 0;
let selectedAnswers = [];

// Display the current question
function displayQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('question-text').innerText = question.question;
  const answersContainer = document.getElementById('answers');
  answersContainer.innerHTML = '';
  
  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.onclick = () => answerQuestion(index);
    answersContainer.appendChild(button);
  });
}

// Handle answer selection
function answerQuestion(answerIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  selectedAnswers.push(currentQuestion.players[answerIndex]);
  
  // Move to the next question or show results
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    showResults();
  }
}

// Show the result based on selected answers
function showResults() {
  document.getElementById('question-container').classList.add('hidden');
  document.getElementById('result-container').classList.remove('hidden');
  
  // Get the most common answer
  const playerCounts = {};
  selectedAnswers.forEach(player => {
    playerCounts[player] = (playerCounts[player] || 0) + 1;
  });
  
  // Find the player with the highest count
  const mostChosenPlayer = Object.keys(playerCounts).reduce((a, b) => playerCounts[a] > playerCounts[b] ? a : b);
  document.getElementById('result').innerText = `You are ${mostChosenPlayer}!`;
}

// Restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  selectedAnswers = [];
  document.getElementById('question-container').classList.remove('hidden');
  document.getElementById('result-container').classList.add('hidden');
  displayQuestion();
}

// Start the quiz when the page loads
window.onload = displayQuestion;