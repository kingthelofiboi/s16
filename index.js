let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
const correctAnswers = {
      "question-1": "wolf",
      "question-2": "boom"
    };

let submitButton = document.querySelector("#submit-button");
let totalScore = document.querySelector("#total-score");

submitButton.addEventListener("click", () => {
  let score = 0;
  let messageElements = [];
  
  for (const [questionId, answer] of Object.entries(correctAnswers)) {
    const selectedAnswer = document.querySelector(`#${questionId}`).value;
    const messageElement = document.querySelector(`#${questionId}-message`);

    if (selectedAnswer === answer) {
      messageElement.innerText = "Correct!";
      score++;
    } else {
      messageElement.innerText = "Incorrect, please try again.";
    }
  }

  totalScore.innerText = `Good day, ${fName.value} ${lName.value} you have ${score}/${Object.keys(correctAnswers).length} questions correct.`;

  alert(totalScore.innerText);
});