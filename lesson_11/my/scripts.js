// const user = {};
// console.log(user);
// user.firstName = prompt("Enter name");
// alert("User name:" + user.firstName);
// console.log("Hello from me", user);
// ______________________________________________________________
//первый способ преобразования строки в число
// const a = parseInt(prompt("Enter A"));
// const b = parseInt(prompt("Enter B"));
// console.log(typeof a);
// console.log(typeof b);
// alert(a + b);
//parseInt строки в числа
// ______________________________________________________________
// const a = Number(prompt("Enter A"));
// const b = Number(prompt("Enter B"));
// console.log(typeof a);
// console.log(typeof b);
// alert(a + b);
//NaN = not a number
// ______________________________________________________________
// const a = +(prompt("Enter A"));
// const b = +(prompt("Enter B"));
// console.log(typeof a);
// console.log(typeof b);
// alert(a + b);
//'+' заменяет Number
// ______________________________________________________________
// const a = parseFloat(prompt("Enter A"));
// const b = parseFloat(prompt("Enter B"));
// console.log(typeof a);
// console.log(typeof b);
// alert(a + b);
//для дробных значений
// ______________________________________________________________
// const age = Number(prompt("Enter yor age"));

// if (age >= 16) {
//   alert("Welcome");
// } else {
//   alert("You are too young");
// }
// ______________________________________________________________
// function logIn() {
//   const age = Number(prompt("Enter yor age"));

//   if (age >= 16) {
//     alert("Welcome");
//   } else {
//     alert("You are too young");
//   }
// }
// ______________________________________________________________
const NAME = "admin@admin";
const PASSWORD = "admin";
const passwordField = document.querySelector(".password-field");
const nameField = document.querySelector(".name-field");

function showPassword() {
  passwordField.type = "text";
}

function logIn() {
  // console.log(nameField.type, passwordField.type);
  const userName = nameField.value;
  const userPassword = passwordField.value;

  if (userName === NAME) {
    if (userPassword === PASSWORD) {
      alert("Welcome");
    } else {
      alert("Password is incorrect");
    }
  } else {
    alert("Name is incorrect");
  }
}
