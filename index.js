let calculation=localStorage.getItem('calculation') || "";
let displayElement=document.querySelector(".display input");
function displaying(num){
    calculation+=num;
    ondisplay();

}
function clearTheCalcalution(){
    calculation="";
    ondisplay();

}
function deleted(){
    calculation=calculation.slice(0,-1);
    ondisplay();

}
function result(){
    calculation=eval(calculation);
    ondisplay();

}
function ondisplay(){
    displayElement.value=calculation;
    localStorage.setItem('calculation',calculation);
}