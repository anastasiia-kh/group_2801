//циклы

// console.log('LOOP STARTED');

// for (let i = 0; i <= 5; i = i + 2) {
//   console.log('Hello from loop ' + i);
// }

// let i = 0;
// while (i < 5) {
//   console.log('Hello from loop ' + i)
//   i = i + 1;
// }

// let i = 0;
// while (i < 5) {
//   console.log('Hello from loop ' + i)
//   i++;
// }

// console.log('LOOP FINISHED');

// _____________________________%______________________________________

//массивы
// const fruit = ['pinaple', 'oranges', 'plums'];
// console.log(fruit);
// fruit.push('banana');
// ____________________________________________________________________

// unshift - добавляет в начало
// push - добавляет в конец
// shift - удалит
// const fruit = [];

// function AddFruite() {
//   const newFruite = prompt('Enter')
//   fruit.push(newFruite);
//   console.log(fruit);
// }
// ____________________________________________________________________

// const fruit = ['oranges', 'banana', 'apple', 'plums'];
const output = document.querySelector('.output')
const fruit = [];


// output.textContent = fruit[0] + ' ' + fruit[1] + ' ' + fruit[2];


// for (let i = 0; i < 3; i++) {
//   console.log(fruit[i]);
// }
function render() {
  let content = '';
  for (let i = 0; i < fruit.length; i++) {
    content = content + '< li class="item">' + fruit[i] + '</li>';
  }
  output.innerHTML = content;
}

function AddFruite() {
  const newFruite = prompt('Enter')
  fruit.push(newFruite);
  render();
}


// function print() {
//   output.inner
// }