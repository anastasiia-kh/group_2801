// var lightsRed = document.querySelector(".trafficLight-red");
// var lightsYellow = document.querySelector(".trafficLight-yellow");
// var lightsGreen = document.querySelector(".trafficLight-green");


// function disableAll() {
//   deactivateYellow()
//   deactivateGreen()
//   deactivateRed()

// }

// const activeLightsRed = 'active';
// const activeLightsYellow = 'active';
// const activeLightsGreen = 'active';


// function activateRed() {
//   lightsRed.classList.add(activeLightsRed);
// }

// function deactivateRed() {
//   lightsRed.classList.remove(activeLightsRed);
// }

// function clickRed() {
//   disableAll();
//   activateRed()
// }

// function activateYellow() {
//   lightsYellow.classList.add(activeLightsYellow);
// }

// function deactivateYellow() {
//   lightsYellow.classList.remove(activeLightsYellow);
// }

// function clickYellow() {
//   activateYellow()
// }

// function clickYellow() {
//   disableAll();
//   activateYellow()
// }


// function activateGreen() {
//   lightsGreen.classList.add(activeLightsGreen);
// }

// function deactivateGreen() {
//   lightsGreen.classList.remove(activeLightsGreen);
// }

// function clickGreen() {
//   disableAll();
//   activateGreen()
// }
// _____________________________________________________________


var lights = container.querySelectorAll("div.trafficLight");

function disableAll() {
  for
  let (i = 0; i < lights.length; i++) {
    lights[i].classList.remove('active');
  }
}

function onClick(button) {
  disableAll();
  button.classList.add('active');


}