let btn = document.getElementById("btn");
let answer = document.getElementById("answer");
let result;

let firstNoError = document.getElementById("firstNoError");
let secondNoError = document.getElementById("secondNoError");
let opeError = document.getElementById("opeError");

let notfirst,
  notSecond,
  notOpe = false;

firstNoError.style.display = "none";
secondNoError.style.display = "none";
opeError.style.display = "none";

function checkValidation(firstNo,secondNo,operator) {
    if (
        firstNo.value == "" ||
        firstNo.value == null ||
        firstNo.value == undefined
      ) {
        firstNoError.style.display = "block";
        notfirst = true;
      } else {
        firstNoError.style.display = "none";
        notfirst = false;
      }
      if (
        secondNo.value == "" ||
        secondNo.value == null ||
        secondNo.value == undefined
      ) {
        secondNoError.style.display = "block";
        notSecond = true;
      } else {
        secondNoError.style.display = "none";
        notSecond = false;
      }
      if (operator.value == "ope") {
        opeError.style.display = "block";
        notOpe = true;
      } else {
        opeError.style.display = "none";
        notOpe = false;
      }
}


function cal(operator, firstNo, secondNo, answer, result) {
    firstNo = parseInt(firstNo.value);
    secondNo = parseInt(secondNo.value);
    operator = operator.value;
    switch (operator) {
      case "add":
        result = firstNo + secondNo;
        break;
      case "sub":
        result = firstNo - secondNo;
        break;
      case "multi":
        result = firstNo * secondNo;
        break;
      case "div":
        result = firstNo / secondNo;
      default:
        console.log("operation Error");
        break;
    }
    answer.innerHTML = result;
  }

btn.addEventListener("click", function () {
  let firstNo = document.getElementById("firstNo");
  let secondNo = document.getElementById("secondNo");
  let operator = document.getElementById("operator");


  checkValidation(firstNo,secondNo,operator);

  if (notfirst == false && notSecond == false && notOpe == false) {
    console.log("hello");
    cal(operator, firstNo, secondNo, answer, result);
  }
});
