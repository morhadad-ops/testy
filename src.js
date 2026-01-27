class question {
  constructor() {
    this.questionText = "What is the capital of France?";
    this.options = ["A) Berlin", "B) Madrid", "C) Paris", "D) Rome"];
    this.correctAnswer = "C";
  }

  displayQuestion() {
    console.log(this.questionText);
    this.options.forEach(option => console.log(option));
  }

  checkAnswer(answer) {
    return answer.toUpperCase() === this.correctAnswer;
  }
}

// Example usage:
const quizQuestion = new question();
quizQuestion.displayQuestion();
const userAnswer = "C"; // This would typically come from user input
if (quizQuestion.checkAnswer(userAnswer)) {
  console.log("Correct!");
} else {
  console.log("Absolutly Incorrect. The correct answer is not yours it is  " + quizQuestion.correctAnswer);
}