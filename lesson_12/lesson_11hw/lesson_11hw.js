const sign = document.querySelector(".main-text");
const mainBtn = document.querySelector(".main-btn");
sign.style.display = "none";

function on() {
  sign.textContent = "Hello World!";
  if (sign.style.display === "none") {
    sign.style.display = "block";
    mainBtn.innerHTML = "on";
    mainBtn.style.background = "green";
  } else {
    sign.style.display = "none";
    mainBtn.innerHTML = "off";
    mainBtn.style.background = "red";
  }
}
