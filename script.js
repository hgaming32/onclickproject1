const correctAnswers = {
    question1: "All of the above",
    question2: "script src='app.js'",
    question3: "concat()",
    question4: "// This is a comment",
    question5: "NaN",
    question6: "function myFunction()",
    question7: "=",
    question8: "a is larger",
    question9: "Object",
    question10: "object"
};

function displayAnswer(checkbox, answerId) {
    const answerDisplay = document.getElementById(answerId);
    const userAnswer = checkbox.value;
    const questionId = checkbox.name; 

    if (userAnswer === correctAnswers[questionId]) {
        answerDisplay.textContent = `Correct! Your answer: ${userAnswer}`;
    } else {
        answerDisplay.textContent = `Incorrect! Correct answer: ${correctAnswers[questionId]}`;
    }


}

