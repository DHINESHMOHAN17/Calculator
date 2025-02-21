let calculation = localStorage.getItem("calculation") || "";
let displayElement = document.querySelector(".display input");
function displaying(num) {
  calculation += num;
  ondisplay();
}
function clearTheCalcalution() {
  calculation = "";
  ondisplay();
}
function deleted() {
  calculation = calculation.slice(0, -1);
  ondisplay();
}
function result() {
  try {
    calculation = eval(calculation);
    ondisplay();
  } catch (err) {
    alert("Invalid Calculation");
  }
}
function ondisplay() {
  displayElement.value = calculation;
  localStorage.setItem("calculation", calculation);
}
