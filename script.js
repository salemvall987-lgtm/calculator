
// let firstNumber = "";      // text: digits get glued on one at a time ("1" then "2" becomes "12")
// let operator = "";         // text: stores the button's symbol, like "+"; empty means none chosen yet
// let secondNumber = "";     // text: same reason as firstNumber; empty means not typed yet


function add(a,b) {
  return a+b;
}
function subtract(a,b) {
  return a-b;
}
function multiply(a,b) {
  return a*b;
}
function divide(a,b) {
  return a/b;
}


function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a,b);
    case '-':
      return  subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);
    default:
      return null;
  }
}

console.log(operate('+', 23, 3) )
