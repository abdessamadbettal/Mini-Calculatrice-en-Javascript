// alert("js running");

//? ----------------- variables -------------//
var queue = [];
var input = 0;
var screen = document.getElementById("screen");
// var numChar; //total number of types characters
// var currentChar , previousChar ; //store current and previous taped
// var operations = ['+' , '-' , '*' , '/'];

//? ----------------- functions -------------//
function caculerScreen(resultat) {
  if (input !== 0) {
    input = parseFloat(input);
    AddToQueue(input);

    console.log(`inputdans fonction calculer :   ${input}`);
    console.log(`queue dans fonction calculer :   ${queue}`);
  }
  var answer = resultat[0];
  var Diviser_zero = true;
  for (var i = 2; i < resultat.length; i++) {
    console.log(`queue[i-1] :   ${queue[i - 1]}`);
    switch (queue[i - 1]) {
      case "+":
        answer += resultat[i];
        console.log(`resultat[i] :   ${resultat[i]}`);
        break;
      case "-":
        answer -= resultat[i];
        console.log(`resultat[i] :   ${resultat[i]}`);
        break;
      case "*":
        answer *= resultat[i];
        console.log(`resultat[i] :   ${resultat[i]}`);
        break;
      case "/":
        if (resultat[i] === 0) {
          Diviser_zero = false ;
        } else {
          answer = answer / resultat[i];
        }
        console.log(`resultat[i] :   ${resultat[i]}`);
        break;
    }
  }
  if (Diviser_zero === false) {
    clearScreen();
    screen.value = "ERROR";
    console.log(`the resultat is ${queue}`);
  }
  else{
    screen.value = answer;
    input = answer;
    queue = [];
    console.log(`the resultat is ${answer}`);
  }

}
function display(num) {
  if (num != ".") {
    input += num;
    screen.value += num;
    console.log(`input lors de display : ${input}`);
  }
}
function clearScreen() {
  screen.value = "";
  queue = [];
  input = 0;
  console.log(`input lors de display : ${input}`);
}
function AddToQueue(input) {
  queue.push(input);
}
function operation(arg) {
  if (input !== 0) {
    input = parseFloat(input);
    AddToQueue(input);
    AddToQueue(arg);
    console.log(`queue lors opération :   ${queue}`);
    screen.value += arg;
    input = 0;
    console.log(`input lors de l'operation : ${input}`);
  }
}
function consoleTest() {
  console.log(`######## console en general ########`);
  console.log(`input en général : ${input}`);
  console.log(`queue de facon générale :   ${queue}`);
  // console.log(`add to queue input parsefloat :   ${AddToQueue(input)}`);
  console.log(`####################################`);
}

// function clearScreen() {
//   screen.value = "";
// }
// function display(n) {
// var res = [];

//   screen.value += n;

//   numChar = screen.value.length ;
//   currentChar = n ;
//   console.log("current : " + currentChar);
//   console.log("lenght : " + numChar);
//   // function cala(params) {

//   // }
//   if (operations[0].includes(currentChar)) {
//     res = screen.value.split('+')
//     console.log(`adition  is : ${parseInt(res[0])+parseInt(res[1])}` )
//     // return parseInt(res[0])+parseInt(res[1])
//   }
// getpreviousChar()
// if (operations.includes(currentChar)) {
//   var n1 =
//   console.log(`let's stoke :${n1}`)

// }
// }

// function calculer() {
//   screen.value = eval(screen.value);
// }
// function getpreviousChar() {
//     previousChar = screen.value.substring(numChar-2,numChar-1)
//     checkSyntax();
// }
// function checkSyntax() {
//     if(operations.includes(previousChar) && operations.includes(currentChar)){
//         // alert('ta ax katkhrba9')
//         removeChar()
//     }
// }
// function removeChar() {
//     screen.value = screen.value.substring(0,numChar-1);
// }
// var str = "hoho" ;

// console.log(str.match());
