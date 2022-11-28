function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b){
  return a / b;
}

function clickedNumber(e) {
  let number = this.className;

  if (operator === '') {
    a += number;
    screen.textContent = `${a}`;
  }
  else {
    b += number;
    screen.textContent = `${b}`;
  }
}

function clickedOperator(e) {
  operator = this.className;

  screen.textContent = `${operator}`;
}

function clearScreen(e) {
  a = '';
  b = '';
  result = 0;
  operator = '';
  
  screen.textContent = `0`;
}

let a = '';
let b = '';
let operator = '';
let result = 0;

let screen = document.querySelector('.screen');

let numbers = document.querySelectorAll('.numbers > button');
let operators = document.querySelectorAll('.operators button');

let equal = document.querySelector('.equal');
let clear = document.querySelector('.c');

numbers.forEach(button => button.addEventListener('click', clickedNumber))
operators.forEach(button => button.addEventListener('click', clickedOperator));

equal.addEventListener('click', (e) => {
  let parsedA = parseInt(a);
  let parsedB = parseInt(b);

  switch(operator) {
    case '+':
      result = add(parsedA, parsedB); break;
    case '-':
      result = sub(parsedA, parsedB); break;
    case '*':
      result = mul(parsedA, parsedB); break;
    case '/':
      if (parsedB === 0) return null;
      result = parseInt(div(parsedA, parsedB)); break;
    default:
      return;
  }

  screen.textContent = `${result}`;
  a = `${result}`;
  operator = '';
  b = '';
});

clear.addEventListener('click', clearScreen);
