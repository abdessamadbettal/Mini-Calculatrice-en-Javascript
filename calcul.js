// * alert("js running");
// TODO : rechercher sur readonly dans google
//? ----------------- variables -------------//
var queue = [];
var input = 0;
var screen = document.getElementById("screen");

//? ----------------- functions -------------//
// console.log(typeof(screen));
//! on affiche sur les chiffres dans screen
function display(num) {
  if (screen.value === "ERROR" && num != ".") {
    screen.value = "";
  }
  if (num != "." || !input.match(/[.]/)) {
    input += num;
    screen.value += num;
    console.log(`input lors de display : ${input}`);
  }
}

// ! on va suppermer les dannés dans le screen
function clearScreen() {
  screen.value = "";
  queue = [];
  input = 0;
  console.log(`input lors de display : ${input}`);
}

// !! add input on the queue comme un array
function AddToQueue(input) {
  queue.push(input);
}

// ! une fois cliquer sur les + , - , / , *
function traiter(arg) {
  if (input !== 0 && input !== "-") {
    input = parseFloat(input);
    AddToQueue(input);
    AddToQueue(arg);
    console.log(`queue lors opération :   ${queue}`);
    screen.value += arg;
    input = 0;
    console.log(`input lors de l'operation : ${input}`);
  }
  if (arg == "-" && isNaN(queue[0])) {
    input = "-";
    screen.value = "-";
  }
}

// ! une fois cluquer sur = va calculer le résultat
function caculerScreen(resultat) {
  // * pour add input sur la queue
  if (input !== 0) {
    input = parseFloat(input);
    AddToQueue(input);
    console.log(`input dans fonction calculer :   ${input}`);
    console.log(`queue dans fonction calculer :   ${queue}`);
  }
  var answer = resultat[0];
  var Diviser_zero = true;
  for (var i = 2; i < resultat.length; i++) {
    switch (queue[i - 1]) {
      case "+ ":
        answer += resultat[i];
        console.log(`queue[i-1] boucle:   ${queue[i - 1]}`);
        console.log(`resultat[i] :   ${resultat[i]}`);
        break;
      case "-":
        answer -= resultat[i];
        console.log(`resultat[i] :   ${resultat[i]}`);
        console.log(`queue[i-1] boucle:   ${queue[i - 1]}`);
        break;
      case "*":
        answer *= resultat[i];
        console.log(`resultat[i] :   ${resultat[i]}`);
        console.log(`queue[i-1] boucle:   ${queue[i - 1]}`);
        break;
      case "/":
        if (resultat[i] === 0) {
          Diviser_zero = false;
        } else {
          answer = answer / resultat[i];
          console.log(`resultat[i] :   ${resultat[i]}`);
          console.log(`queue[i-1] boucle:   ${queue[i - 1]}`);
        }
        break;
      default:
        console.log(`the condition is not aviable`);
        break;
    }
    console.log(`the inswer is :   ${answer}`);
  }
  if (Diviser_zero === false) {
    clearScreen();
    screen.value = "ERROR";
    console.log(`the resultat is ${queue}`);
  } else {
    screen.value = answer;
    input = answer;
    queue = [];
    console.log(`the resultat is ${answer}`);
  }
}

// ! supermer lr dernier chiffre
function supermer() {
  screen.value = screen.value.substring(0, screen.value.length - 1);
  input = input.substring(0, input.length - 1);
}

// ! pour tester le code sur le console
function consoleTest() {
  console.log(`######## console en general ########`);
  console.log(`input en général : ${input}`);
  console.log(`queue de facon générale :   ${queue}`);
  // console.log(`add to queue input parsefloat :   ${AddToQueue(input)}`);
  console.log(`####################################`);
}
// || !input.match(/[.]/)

// var numChar; //total number of types characters
// var currentChar , previousChar ; //store current and previous taped
// var operations = ['+' , '-' , '*' , '/'];

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
