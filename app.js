//using selectors inside the element
// traversing the dom

//Using selectors
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

//Using the dom

/* const buttons = document.querySelectorAll(".question-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const selectedQuestion = e.currentTarget.parentElement.parentElement;
    selectedQuestion.classList.toggle("show-text");
  });
});
 */
