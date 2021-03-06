import { add, sub, mult, divide } from './math-utils.js'

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResult = document.getElementById('sub-result');

const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('mult-result');

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');

addButton.addEventListener('click', () => {
  const number1 = +addInput1.value;
  const number2 = +addInput2.value;

  const result = add(number1, number2);
  addResult.textContent = result;
});

subButton.addEventListener('click', () => {
  const number1 = +subInput1.value;
  const number2 = +subInput2.value;

  const result = sub(number1, number2);
  subResult.textContent = result;
});

multButton.addEventListener('click', () => {
  const number1 = +multInput1.value;
  const number2 = +multInput2.value;

  const result = mult(number1, number2);
  multResult.textContent = result;
});

divideButton.addEventListener('click', () => {
  const number1 = +divideInput1.value;
  const number2 = +divideInput2.value;

  const result = divide(number1, number2);
  divideResult.textContent = result;
});