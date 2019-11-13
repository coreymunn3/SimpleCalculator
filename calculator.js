// UI ELEMENTS
// numbers
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
numArr = [one,two,three,four,five,six,seven,eight,nine,zero];
// Decimal 
const decimal = document.getElementById('decimal');

// clear
const clear = document.getElementById('clear');

// operators
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
operatorArr = [plus,minus,multiply,divide];

// equal
const equal = document.getElementById('equal');

// display 
const numDisplay = document.getElementById('result');
const opDisplay = document.getElementById('operation');

// ===============================================
// GLOBAL VARS

var lastNum = 0;

// ===============================================
// EVENT LISTENERS
for (let i=0; i<numArr.length; i++){
  numArr[i].addEventListener('click',function(){
    let number = numArr[i].textContent;
    numDisplay.textContent += number;
  })
}

for (let i=0; i<operatorArr.length; i++){
  operatorArr[i].addEventListener('click',function(){
    // store the current number in memory
    lastNum = numDisplay.textContent;
    // display the symbol of the current operator in the display area (so the user knows)
    let operation = operatorArr[i].textContent;
    opDisplay.textContent = operation;
    // clear the numeric display
    numDisplay.textContent = '';
  })
}

clear.addEventListener('click',clearDisplay);

equal.addEventListener('click',function(){
  // grab the recently entered number
  let currentNum = numDisplay.textContent;
  // the Operation
  let operation = opDisplay.textContent;
  // setup the equation
  let value = eval(lastNum+operation+currentNum);
  // make number display reflect new value
  numDisplay.textContent = value;
  // reset operation display
  opDisplay.textContent = '';
})

decimal.addEventListener('click',function(){
  let currentNum = numDisplay.textContent;
  // if the number already contains a decimal, don't allow another
  if (currentNum.indexOf('.') === -1){
    numDisplay.textContent+='.';
  } 
  // TO DO:
  // Insert Error Message into .error-msg as a child
  // style accordingly
  // make disappear after 2 sec.
})

// ===============================================
// FUNCTIONS
function clearDisplay(){
  numDisplay.textContent = '';
  opDisplay.textContent = '';
}