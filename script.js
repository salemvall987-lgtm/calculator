
let firstNumber = "";      // text: digits get glued on one at a time ("1" then "2" becomes "12")
let operator = "";         // text: stores the button's symbol, like "+"; empty means none chosen yet
let secondNumber = "";     // text: same reason as firstNumber; empty means not typed yet


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

let display = document.querySelector('#display');
let digits = document.querySelectorAll('.digits');
let allOperators = document.querySelectorAll('.operator');

function showNum() {
  let shown;

  if (operator !== '' && secondNumber !== '') {
    shown = secondNumber;
    calculatePair();
  } else {
    shown = firstNumber;
  }

  display.textContent = shown || '0';
};

digits.forEach((digit)=> {
  digit.addEventListener('click', (e)=>{
    if (operator === '') {
    firstNumber += e.target.textContent;
    } else {
      secondNumber += e.target.textContent;
    }
    showNum();

  })
})
showNum();

allOperators.forEach((allOperator)=> {
  allOperator.addEventListener('click', (e)=> {
    if (firstNumber === '') {
      return;
    } 
    

        operator = e.target.dataset.operator;
    showNum();
  })

})

let reset = document.querySelector('.reset');
reset.addEventListener('click', (e) => {
  firstNumber = '';
  secondNumber = "";
  operator = ""; 
  showNum();
})
console.log(firstNumber, operator, secondNumber)

let equalsButton = document.querySelector('.result');
equalsButton.addEventListener('click', ()=> {
  if (operator === '' || firstNumber === '' || secondNumber === '') {
    return;
  } 
  calculatePair()
  operator = '';
  showNum();
})
function calculatePair() {
  let answer = operate(operator, Number(firstNumber), Number(secondNumber));
  firstNumber = String(answer);
  secondNumber = '';
};


