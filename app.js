//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  // console.log(question);
  const btn = question.querySelector('.question-btn');
  //  console.log(btn);
  btn.addEventListener("click", function () {
    // console.log(btn)

    questions.forEach(function (item) {
      // console.log(item);
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});


// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });


/*.parentElement es para tomar el elemnto inmediatamnte siguiente
en este caso toma el div del parrafo y agrega la calse

este sirve cuadno son pocos item dentro de la seleccion, pero si
son muchos elementos  debemos usar selectores
*/
