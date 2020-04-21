// function greeting() {
//   console.log('Hello my name is ' + this.name)
// }

function Character(name) {
  this.name = name || '';
}
Character.prototype.greet = function () {
  console.log('Hello my name is ' + this.name)

}

// const character1 = new Character('John');
// const character2 = new Character('Jack');
const chars = [];
for (let i = 0; i < 500; i++) {
  chars.push(new Character('John${i}'));
}

window.character1 = chars;

// function test() {
//   this.hello = 'world';
//   this.run = function () {
//     console.log('TEST', this.hello)
//   };
// }

// const u = new test();


// console.log(u.run());

// console.log(u);


// function name() {
//   this.userName = "John";
//   console.log(this.userName)
// }



// const character2 = {
//   name: 'Jack',
//   address: {
//     main: 'str Str.7',
//     main: 'str Str.3'
//   },
//   greet: greeting
// };



// greeting({
//   name: 'some name'
// });
// character1.greet();
// character2.greet();