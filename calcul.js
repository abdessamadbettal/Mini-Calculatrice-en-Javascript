// alert("js running");

//? ----------------- variables -------------//

var screen = document.getElementById("screen");
var numChar; //total number of types characters
var currentChar , previousChar ; //store current and previous taped
var operations = ['+' , '-' , '*' , '/'];

//? ----------------- functions -------------//
function clearScreen() {
  screen.value = "";
}
function display(n) {
  screen.value += n;

  numChar = screen.value.length ;
  currentChar = n ;
  console.log("current : " + currentChar);
  console.log("total : " + numChar);
  getpreviousChar()
}
function calculer() {
  screen.value = eval(screen.value);
}
function getpreviousChar() {
    previousChar = screen.value.substring(numChar-2,numChar-1)
    checkSyntax();
}
function checkSyntax() {
    if(operations.includes(previousChar) && operations.includes(currentChar)){
        // alert('ta ax katkhrba9')
        removeChar()
    }
}
function removeChar() {
    screen.value = screen.value.substring(0,numChar-1);
}
var str = "hoho" ;

console.log(str.match());